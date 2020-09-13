import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';  
 import {StatusBar } from "@ionic-native/status-bar"
@Component({
  selector: 'app-movie', 
  templateUrl: './movie.component.html', 
  styleUrls: ['./movie.component.scss'],
  providers: [  StatusBar ]
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
  private dates:any;

  constructor(
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
    console.log(this.data)
  }
  ngOnDestroy(){
    this.statusbar.show();
  }
  private async closeModal(){
    this.modals.dismiss();
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


}
