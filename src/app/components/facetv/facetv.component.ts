import { Component, OnInit ,Input} from '@angular/core';
import { MOVIE } from 'src/app/model/model.api';

@Component({
  selector: 'app-facetv',
  templateUrl: './facetv.component.html',
  styleUrls: ['./facetv.component.scss'],
})
export class FacetvComponent implements OnInit {
  @Input() optSlide:{slidesPerView:number, freeMode:boolean, spaceBetween:number};
  @Input() showSkeleton: boolean;
  @Input() limitMovie:number;
  @Input() trendingMovie:MOVIE[] =[];
  @Input() limitStart:number=0;
   
  constructor() {
    this.optSlide={ slidesPerView:1.7, freeMode:true,spaceBetween: -7}
   }

  ngOnInit() {}

}
