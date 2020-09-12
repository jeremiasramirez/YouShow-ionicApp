import { Component, OnInit, Input } from '@angular/core';
import { MOVIE } from 'src/app/model/model.api';
import { MovieService } from 'src/app/services/movie.service';
 
@Component({
  selector: 'app-facemovie',
  templateUrl: './facemovie.component.html',
  styleUrls: ['./facemovie.component.scss'],
  providers: [
    MovieService
  ]
})
export class FacemovieComponent implements OnInit {
 
  @Input() optSlide:{slidesPerView:number, freeMode:boolean, spaceBetween:number}

  @Input() showSkeleton: boolean;
  @Input() limitMovie:number;
  @Input() limitStart:number=0;
  @Input() trendingMovie:MOVIE[] =[];
   
   
  constructor(
 
    private service:MovieService) {
    this.optSlide={ slidesPerView:1.7, freeMode:true,spaceBetween: -7}
    
   }

  ngOnInit() {}
   getMovie(data){
  
     this.service.getMovie(data)
 
   }
}
