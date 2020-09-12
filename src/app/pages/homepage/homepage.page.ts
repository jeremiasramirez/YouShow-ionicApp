import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MOVIE } from 'src/app/model/model.api';
import { timer, interval } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
  providers: [
    MovieService
  ]
}) 
export class HomepagePage implements OnInit {
  private trendingMovie:MOVIE[] = [];
  private topMovie : MOVIE[] = [];
  private upcomingMovie : MOVIE[] = [];
  private tvMovie : MOVIE[] = [];

  private limitMovie:number=3;

  private slideOptions = {
    slidesPerView:  2.4,
    freeMode:true,
    spaceBetween: -7
  }

  private showSkeletonTendence:boolean = false;
  private showSkeletonTop:boolean = false;
  private showSkeletonUpcoming:boolean = false;
  private showSkeletonTvShow:boolean = false;


  constructor(
    private service:MovieService
  ) { }

  ngOnInit() {

   //tendence
   this.getTendence();

   //top
   this.getTop();
    
   //upcoming
   this.getUpcoming()

    //tv show
   this.getTv()

   //acelerate request
   this.accelerateMovie()
  }



 private getTop(){
    
    this.service.getTop().pipe(delay(300)).subscribe(resp=>{
      this.topMovie = resp.results;
    }, (err)=>{this.service.errorRequest(this.getTop);}, ()=>this.showSkeletonTop=true)
  }

 private getTendence(){
    this.service.getTrending().pipe(delay(1000)).subscribe(resp=>{
      this.trendingMovie = resp.results;
    }, (err)=>{this.service.errorRequest(this.getTendence);}, ()=>this.showSkeletonTendence=true)
  }

 private getUpcoming(){
   this.service.getUpcoming().subscribe((resp)=>{
    this.upcomingMovie = resp.results;
   }, (err)=>{this.service.errorRequest(this.getUpcoming);}, ()=>this.showSkeletonUpcoming=true)
 }

  private accelerateMovie(){
    const stop=interval(2000).pipe(delay(1000)).subscribe(()=>{this.limitMovie += 3});
    timer(15000).subscribe(()=>stop.unsubscribe());
  }

  private getTv(){
    this.service.getTvShow().subscribe((resp)=>{
      this.tvMovie = resp.results;
     }, (err)=>{this.service.errorRequest(this.getTv); }, ()=>this.showSkeletonTvShow=true)
  }

}
