import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { catchError, lastValueFrom, Observable, retry, throwError } from "rxjs"
import { environment } from "projects/shell/src/environments/environment"

export type LayoutOptions = {
  unicDisplayName: string
  width: string
}

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  private layout: LayoutOptions[] = []

  constructor(private http: HttpClient) {
    this.lookup().then((layout) => {
      this.layout = layout
    })
  }

  lookup(): Promise<LayoutOptions[]> {
    return lastValueFrom(
      this.http
        .get<LayoutOptions[]>(environment.layoutFromDashboard)
        .pipe(retry(3), catchError(this.handleError))
    )
  }

  public async update() {
    await this.lookup()
  }

  public getProps(pluginName: string): LayoutOptions {
    let pluginOptions = this.layout.find(
      (item) => item.unicDisplayName === pluginName
    )

    if (pluginOptions) {
      return pluginOptions
    }

    return { unicDisplayName: "default", width: "card-1" }
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
