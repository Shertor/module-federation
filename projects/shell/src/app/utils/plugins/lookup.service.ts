import { Injectable } from "@angular/core";
import { PluginOptions } from "./plugin";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, lastValueFrom, Observable, retry, throwError } from "rxjs";

@Injectable({ providedIn: "root" })
export class LookupService {
  manifestUrl = "../../assets/mf.plugins.manifest.json";
  manifest: PluginOptions[] | undefined;

  constructor(private http: HttpClient) {}
  lookup(): Promise<PluginOptions[]> {
    return lastValueFrom(
      this.http
        .get<PluginOptions[]>(this.manifestUrl)
        .pipe(retry(3), catchError(this.handleError))
    );
  }

  /**
   * Стандартный обработчик ошибок от RXJS
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error("Something bad happened; please try again later.")
    );
  }
}
