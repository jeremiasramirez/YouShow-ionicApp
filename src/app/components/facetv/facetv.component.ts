import { Component, OnInit ,Input} from '@angular/core';
import { MOVIE } from 'src/app/model/model.api';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-facetv',
  templateUrl: './facetv.component.html',
  styleUrls: ['./facetv.component.scss'],
  providers:[MovieService]
})
export class FacetvComponent implements OnInit {
  @Input() optSlide:{slidesPerView:number, freeMode:boolean, spaceBetween:number};
  @Input() showSkeleton: boolean;
  @Input() limitMovie:number;
  @Input() trendingMovie:MOVIE[] =[];
  @Input() limitStart:number=0;
   
  constructor(private service:MovieService) {
    this.optSlide={ slidesPerView:1.7, freeMode:true,spaceBetween: -7}
   }

  ngOnInit() {}
  getMovie(data){
  
    this.service.getMovieByTv(data)

  }
}
