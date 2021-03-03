import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ajax} from 'rxjs/ajax'
import {pluck} from 'rxjs/operators'
import { KEY } from 'src/app/model/api.key';
@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['../movie/movie.component.scss'],
})
export class TvshowComponent implements OnInit {
  private similarMoviesArr :any[] = [];
  @Input() private data;
  private poster:string;
  private backdrop:string;
  constructor(private modals:ModalController) { }

  ngOnInit() {
   
    this.poster = `https://image.tmdb.org/t/p/w300${this.data.poster_path}`
    this.backdrop = `https://image.tmdb.org/t/p/w300${this.data.backdrop_path}`
    this.similarMovies(this.data.id)
  }

  private similarMovies(id){
    this.getSimilarMovies(id).subscribe((resp)=>{ 
      this.similarMoviesArr=resp.results
    })
  }

  private async closeModal(){
    this.modals.dismiss();
  }

  private getSimilarMovies(id:any){
    const url =`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${KEY}&language=en-US&page=1`
    
    return ajax.get(url).pipe(pluck("response"))
  }
}
