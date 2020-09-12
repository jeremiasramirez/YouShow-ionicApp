import { Component, OnInit,Input } from '@angular/core';
import { MOVIE } from 'src/app/model/model.api';
import { timer } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-face-search',
  templateUrl: './face-search.component.html',
  styleUrls: ['./face-search.component.scss'],
  providers:[
    MovieService
  ]
})
export class FaceSearchComponent implements OnInit {
  @Input() arrSearch:MOVIE[]=[];
  private dataEnd:number=9;
  
  constructor(private service:MovieService) { }

  ngOnInit() {}


  private change(ev:any){
    
    timer(1000).subscribe(()=>{

      this.dataEnd+=5;
      ev.target.complete();

    })
    
  }
  getMovie(data){
  
    this.service.getMovie(data)

  }
}
