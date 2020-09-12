import { Injectable } from '@angular/core';
import { KEY, genres } from '../model/api.key';
import { ajax } from "rxjs/ajax"
import { pluck, delay, find, filter } from "rxjs/operators"
import { MOVIE, sugestion } from '../model/model.api';
import { ModalController, ToastController } from '@ionic/angular';
import { MovieComponent } from '../components/movie/movie.component';

@Injectable()
export class MovieService {
  private apiKey = KEY;
  private movieTrendingUrl : string;
  public  movieImgUrl : string;
  private movieSearchUrl : string;

  private search:string;
  private popularSearch: string;

  private language:string;
  private movieTopUrl : string; 
  private latestMovie:string;
  private upcomingMovie :string;

  private tvShowPopular : string;
  public genres = genres
  private genresUrl:string;
  private genresTvUrl:string;
  private referenceUrl:string ;
  public sugestion:{name:string}[] =[]
  private airingTodayTv:string;
  constructor(
  
    private toast:ToastController, 
    private modal:ModalController) { 
    this.referenceUrl= "https://api.themoviedb.org/3/"

    //suggested
    this.sugestion = sugestion;
    
    //language
    this.language = "es"
 
    //trending
    this.movieTrendingUrl = `${this.referenceUrl}trending/all/day?api_key=${this.apiKey}&language=${this.language}`
    
    //img url
    this.movieImgUrl = `https://image.tmdb.org/t/p/w300`

    //search url
    this.movieSearchUrl = `${this.referenceUrl}search/movie?api_key=${this.apiKey}&language=${this.language}&query=${"query"}&page=1&include_adult=false`
  
    //top movies url
    this.movieTopUrl = `${this.referenceUrl}movie/top_rated?api_key=${this.apiKey}&language=${this.language}&page=`
   
   //lates movie
    this.latestMovie = `${this.referenceUrl}movie/latest?api_key=${this.apiKey}&language=${this.language}`
 
    //popular search 
    this.popularSearch= `${this.referenceUrl}movie/popular?api_key=${this.apiKey}&language=${this.language}&page=1`
  
    //upcoming movie
    this.upcomingMovie = `${this.referenceUrl}movie/upcoming?api_key=${this.apiKey}&language=${this.language}&page=1`
    
    //tvshow popular
    this.tvShowPopular = `${this.referenceUrl}tv/popular?api_key=${this.apiKey}&language=${this.language}&page=1` 
  

    //airing today
    this.airingTodayTv=`${this.referenceUrl}tv/airing_today?api_key=${this.apiKey}&language=${this.language}&page=1`
 
  }


  getTrending(){
    return ajax.get(this.movieTrendingUrl).pipe(pluck("response"))
  }

  getTop(page:number=1){
   return ajax.get(this.movieTopUrl+page).pipe(pluck("response"))
  }


  getPopularSearch(){
    return ajax.get(this.popularSearch).pipe(pluck("response"))
  }

  getUpcoming(){
    return ajax.get(this.upcomingMovie).pipe(pluck("response"))
  }

  getTvShow(){
    return ajax.get(this.tvShowPopular).pipe(pluck("response"))
  }

  searchShow(param:string){
    let referenceSearch="https://api.themoviedb.org/3/search/multi?api_key"
    this.search=  `${referenceSearch}=${this.apiKey}&language=${this.language}&query=${param}&page=1&include_adult=false`
    
   if (param.length)
      return ajax.get(this.search).pipe(pluck("response"))
   

  }

  async errorRequest(func:Function){
   /* const  err  = await this.toast.create({
      header:"Cargando",
      message:  "Espere un momento..",
      duration:  2000,
      mode: "ios",
      position: "top",
      color:"dark",
      buttons: [
        {text: "Ok"}
      ]
    })
    err.present()*/
  }


  getAiringToday(){

    let airingUrl = this.airingTodayTv
    return ajax.get(airingUrl).pipe(pluck("response"))
  }

  getByGenres(newGenres:number){

    // by genres url
    this.genresUrl= `${this.referenceUrl}discover/movie?api_key=${this.apiKey}&language=${this.language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${newGenres}`
  
    return ajax.get(this.genresUrl).pipe(pluck("response"))
  }

  getTvByGenres(newGenres:number){

    // by genres url
    this.genresTvUrl= `${this.referenceUrl}discover/tv?api_key=${this.apiKey}&language=${this.language}&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_genres=${newGenres}`
      return ajax.get(this.genresTvUrl).pipe(pluck("response"))
  }

  async getMovie(data:MOVIE){
    
 
        const modalMovie= await this.modal.create({
          component: MovieComponent,
          componentProps: {data}
        })
        modalMovie.present()
      
 
   
  }

  
}
