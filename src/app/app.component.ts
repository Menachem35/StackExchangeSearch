import { Component, OnInit } from '@angular/core';
import { StackSearchService } from './stackSearch.service';
import { searchResultsFromAPI } from './searchResultsFromAPI.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor (private getSearchService: StackSearchService) { }
    
  searchItem = "";
  questionsList: searchResultsFromAPI[];
  
  getSearchResults(): void {
	  if (this.searchItem != "") {
		this.getSearchService.getSearchResults(this.searchItem).
		subscribe(questions => this.questionsList = questions);
		
		console.log(this.searchItem); console.log(this.questionsList);
	  }
  }
  
  ngOnInit() {
	 // this.getSearchService.getSearchResults(); 
  }
}
