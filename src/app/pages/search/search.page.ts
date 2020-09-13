import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MOVIE } from 'src/app/model/model.api';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  providers:[
    MovieService
  ]
})
export class SearchPage implements OnInit {

  
  private skeletonList:boolean;
  private searchArr:MOVIE[] =[]
  private spinnerSearch:boolean=true;
  private expectedValue = "";
  private sugestion:{name:string}[]= [];
  private showSugestion:boolean=false;

  constructor(
    private service:MovieService
  ) {}
  
  ngOnInit() {

    //sugestion badges 
 
    this.sugestion = this.service.sugestion;
 

    //update value search
    this.updateValueSearchBar()

    
  }

  private updateValueSearchBar(){
    interval(1000).subscribe(()=>{
      if(!this.expectedValue.length){  this.searchArr = []  }
    })
  }

  private search(resps:any ){
    
    if(this.spinnerSearch){
      this.expectedValue=resps;
      this.spinnerSearch=false;
       
        this.service.searchShow(resps).subscribe((resp)=>{
        
          this.searchArr = resp.results;
        }, ()=>{ this.service.errorRequest(this.search); } ,()=>this.spinnerSearch=true)
      
     
    }

  }

  
}
