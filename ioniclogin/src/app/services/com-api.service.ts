import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  user_id = 'user_id'
}

@Injectable({
  providedIn: 'root'
})
export class ComApiService {
  url = 'http://aulal.org:1880/GetUserData/';
  urlF = 'http://aulal.org:1880/GetUserFisio/';
  urlP = 'http://aulal.org:1880/GetFormulasHH/';
  apiKey = ''; // <-- Enter your own key here!
 
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }
 
  /**
  * Get data from the OmdbApi 
  * map the result to return only the results that we need
  * 
  * @param {string} title Search Term
  * @param {SearchType} type movie, series, episode or empty
  * @returns Observable with the search results
  */
  searchData(title: string): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }
  searchFisio(title: string): Observable<any> {
    return this.http.get(`${this.urlF}?s=${encodeURI(title)}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }
  searchFormulas(title: number): Observable<any> {
    return this.http.get(`${this.urlP}?patient_id=${encodeURI(title.toString())}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }
  /**
  * Get the detailed information for an ID using the "i" parameter
  * 
  * @param {string} id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
