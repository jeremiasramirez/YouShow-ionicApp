import { Component, OnInit ,Input} from '@angular/core';
import { MOVIE } from 'src/app/model/model.api';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-explore-card',
  templateUrl: './explore-card.component.html',
  styleUrls: ['./explore-card.component.scss'],
  providers: [
    MovieService
  ]
})
export class ExploreCardComponent implements OnInit {
  @Input() showSkeleton: boolean;
  @Input() limitMovie:number;
  @Input() trendingMovie:MOVIE[] =[];
  constructor(private service:MovieService) { }

  ngOnInit() {}
  getMovie(data){
  
    this.service.getMovie(data)

  }
}
