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

  @Input() data;
  private movieImg:string;
  private poster:string;
  private title:string;


  constructor(
    private modals:ModalController,
    private statusbar:StatusBar ) { }

  ngOnInit() {
    this.statusbar.hide();
    this.movieImg = this.data.backdrop_path;
    this.poster=    this.data.poster_path;
    this.title =    this.data.original_title
    console.log(this.data)
  }
  ngOnDestroy(){
    this.statusbar.show();
  }
  private async closeModal(){
    this.modals.dismiss();
  }

}
