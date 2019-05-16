import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';
import { tap } from 'rxjs/internal/operators/tap';
import { Community, County, Town } from './croatia';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private countiesUrl = '/api/counties';
  private townsUrl = '/api/towns';
  private communitiesUrl = '/api/communities';

  private counties: County[];
  private towns: Town[];
  private communities: Community[];

  constructor(private http: HttpClient) { console.log('constructor in service'); }

  getCounties(): Observable<County[]> {
    if (this.counties) {
      return of(this.counties);
    }
    return this.http.get<County[]>(this.countiesUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        tap(data => this.counties = data),
        catchError(this.handleError)
      );
  }
  getTowns(): Observable<Town[]> {
    if (this.towns) {
      return of(this.towns);
    }
    return this.http.get<Town[]>(this.townsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        tap(data => this.towns = data),
        catchError(this.handleError)
      );
  }
  getCommunities(): Observable<Community[]> {
    if (this.communities) {
      return of(this.communities);
    }
    return this.http.get<Community[]>(this.communitiesUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        tap(data => this.communities = data),
        catchError(this.handleError)
      );
  }
  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
