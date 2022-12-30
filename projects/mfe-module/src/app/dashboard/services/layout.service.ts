import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { catchError, lastValueFrom, Observable, retry, throwError } from "rxjs"
import { environment } from "projects/shell/src/environments/environment"

/**
 * Свойства расположения плагинов
 */
export type LayoutOptions = {
  /** ID should correspond with ID in PluginOptions */
  id: string
  styleClass: string
}

/**
 * Сервис для загрузки манифеста расположения плагинов (Лэйаута)
 */
@Injectable({
  providedIn: "root",
})
export class LayoutService {
  /** Расположение плагинов подгруженное из манифеста */
  private _layout: LayoutOptions[] = []
  /** Флаг состояния загрузки */
  private _loading: boolean = false

  constructor(private http: HttpClient) {}

  /** Функция загрузки манифеста через http запрос */
  private lookup(): Promise<LayoutOptions[]> {
    return lastValueFrom(
      this.http
        .get<LayoutOptions[]>(environment.layoutFromDashboard)
        .pipe(retry(3), catchError(this.handleError))
    )
  }

  /** Функция для загрузки манифеста */
  private async loadManifest(): Promise<void> {
    if (this._loading) return

    this._loading = true
    await this.lookup().then((layout) => {
      this._layout = layout
      this._loading = false
    })
  }

  /**
   * Обновляет манифест
   */
  public async update() {
    await this.loadManifest()
  }

  /** Возвращает манифест */
  public get Layout(): LayoutOptions[] {
    return this._layout
  }

  /**
   * Стандартный обработчик ошибок от RXJS
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error)
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      )
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error("Something bad happened; please try again later.")
    )
  }
}
