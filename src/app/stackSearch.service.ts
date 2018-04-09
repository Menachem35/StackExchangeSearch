import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { searchResultsFromAPI } from './searchResultsFromAPI.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StackSearchService {

	constructor(private _http: HttpClient) {} // Inject the http to make the REST API call
	
	searchUrl: string = "https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q=";

	searchResults:searchResultsFromAPI[];
	 
	// a function to see the structure of the API
	/*searchUrl: string = "https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q=angular&site=stackoverflow";
	getSearchResults(): void { 
		this._http.get(this.searchUrl).subscribe(data => console.log(data));
	} */
	
	getSearchResults(searchQuery: string): Observable<searchResultsFromAPI[]> {
		return this._http.get<{has_more: boolean, items: any[], quota_max: number, quota_remaining: number}>(`${this.searchUrl}${searchQuery}&site=stackoverflow`).map(data=>this.searchResults = data['items']);
	}
	
}
