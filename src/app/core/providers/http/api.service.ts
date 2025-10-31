import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { NotificationService } from '@app/core/services/notification.service';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(
        private http: HttpClient,
        private notifier: NotificationService,
    ) { }

    private setHeaders(): HttpHeaders {
        const headersConfig = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        return new HttpHeaders(headersConfig);
    }

    private handleError(error: any): Observable<never> {
        // aqui podes melhorar de acordo com tua API
        const msg =
            error?.error?.message ||
            error?.message ||
            'Ocorreu um erro ao comunicar com o servidor.';
        this.notifier.error(msg);
        return throwError(() => error);
    }

    private getBaseUrl(path: string, forceSecondary = false): string {
        return environment.url
    }

    get<T>(
        path: string,
        httpParams: HttpParams = new HttpParams(),
        forceSecondary = false,
        responseType: 'json' | 'blob' = 'json',
    ): Observable<T> {
        return this.http
            .get<T>(`${this.getBaseUrl(path, forceSecondary)}${path}`, {
                headers: this.setHeaders(),
                params: httpParams,
                responseType: responseType as 'json',
            })
            .pipe(catchError(err => this.handleError(err)));
    }

    post<T>(
        path: string,
        body: object = {},
        options?: any,
        forceSecondary = false,
        showSuccess = true,
    ): Observable<T> {
        const isFormData = body instanceof FormData;

        return this.http
            .post<T>(`${this.getBaseUrl(path, forceSecondary)}${path}`, body, {
                ...options,
                headers: isFormData ? undefined : this.setHeaders(),
            })
            .pipe(
                tap(() => {
                    if (showSuccess) {
                        this.notifier.success('Registo efetuado com sucesso.');
                    }
                }),
                catchError(err => this.handleError(err)),
            );
    }

    put<T>(
        path: string,
        body: object = {},
        params?: HttpParams,
        forceSecondary = false,
        customHeaders?: HttpHeaders,
        showSuccess = true,
    ): Observable<T> {
        const isFormData = body instanceof FormData;

        return this.http
            .put<T>(`${this.getBaseUrl(path, forceSecondary)}${path}`, body, {
                headers: isFormData ? undefined : customHeaders || this.setHeaders(),
                params,
            })
            .pipe(
                tap(() => {
                    if (showSuccess) {
                        this.notifier.success('Alterações gravadas com sucesso.');
                    }
                }),
                catchError(err => this.handleError(err)),
            );
    }

    patch<T>(
        path: string,
        body: object = {},
        forceSecondary = false,
        showSuccess = true,
    ): Observable<T> {
        return this.http
            .patch<T>(`${this.getBaseUrl(path, forceSecondary)}${path}`, body, {
                headers: this.setHeaders(),
            })
            .pipe(
                tap(() => {
                    if (showSuccess) {
                        this.notifier.success('Registo atualizado.');
                    }
                }),
                catchError(err => this.handleError(err)),
            );
    }

    delete<T>(
        path: string,
        httpParams: HttpParams = new HttpParams(),
        forceSecondary = false,
        showSuccess = true,
    ): Observable<T> {
        return this.http
            .delete<T>(`${this.getBaseUrl(path, forceSecondary)}${path}`, {
                headers: this.setHeaders(),
                params: httpParams,
            })
            .pipe(
                tap(() => {
                    if (showSuccess) {
                        this.notifier.success('Registo removido.');
                    }
                }),
                catchError(err => this.handleError(err)),
            );
    }

    download(
        path: string,
        httpParams: HttpParams = new HttpParams(),
        customHeaders = {},
        forceSecondary = false,
    ): Observable<Blob> {
        return this.http
            .get<Blob>(`${this.getBaseUrl(path, forceSecondary)}${path}`, {
                headers: this.setHeaders(),
                params: httpParams,
                responseType: 'blob' as 'json',
            })
            .pipe(catchError(err => this.handleError(err)));
    }
}
