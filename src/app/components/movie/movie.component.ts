import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';  
 import {StatusBar } from "@ionic-native/status-bar"
import { ajax} from "rxjs/ajax"
import { pluck } from 'rxjs/operators';
import { KEY } from 'src/app/model/api.key';
import { FavoriteService } from 'src/app/services/favorite.service';
import { interval } from 'rxjs';
 
@Component({
  selector: 'app-movie', 
  templateUrl: './movie.component.html', 
  styleUrls: ['./movie.component.scss'],
  providers: [ StatusBar, FavoriteService ]
})
export class MovieComponent implements OnInit {

  @Input() data:any;
  private movieImg:string;
  private poster:string;
  private heightToolbar;
  private title:string;
  private overview:string;
  private vote : number=0;
  private limitText:number=90;
  private limitTextSize:number;
  private buttonMore:boolean=true;
  private popularity:number=0;
  private lang:string;
  private similarMoviesArr:any;
  private dates:any;
  private similarMovieUrl:string;
  


  constructor(
    private serviceFavorite:FavoriteService,
    private modals:ModalController,
    private statusbar:StatusBar ) { }

  ngOnInit() {
    
    this.statusbar.hide();
    this.movieImg = this.data.backdrop_path;
    this.poster=    this.data.poster_path;
    this.title =    this.data.original_title;
    this.vote=      this.data.vote_count;
    this.overview=  this.data.overview.substring(0,this.limitText) + "..."
    this.limitTextSize=  this.data.overview.length;
    this.popularity = Math.ceil(this.data.popularity)>100 ?100:Math.ceil(this.data.popularity)
    this.lang=      this.data.original_language;
    this.dates=      this.data.release_date;
    
    this.similarMovies(this.data.id)
 
    
  }
  ngOnDestroy(){
    this.statusbar.show();
  }
  private async closeModal(){
    this.modals.dismiss();
  }

  private setOrQuitFavorite(items){
    
    this.serviceFavorite.setFavorite(items)
 
  }
  private moreText(){
    
    if(this.buttonMore==true){
      this.buttonMore=false
      this.overview=this.data.overview;
      this.heightToolbar="50px"
      
    }
    else{
      this.buttonMore=true
      this.heightToolbar=""
      this.overview= this.data.overview.substring(0,this.limitText)
    }
  }


  private similarMovies(id){
    this.getSimilarMovies(id).subscribe((resp)=>{ 
      this.similarMoviesArr=resp.results
    })
  }

  getSimilarMovies(id:any){
    this.similarMovieUrl =`https://api.themoviedb.org/3/${id}/recommendations?api_key=${KEY}&language=es&page=1`
    return ajax.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=125250e6a9e5ca9991ac6cd1b964a257&language=en-US&page=1`).pipe(pluck("response"))
  }
}
