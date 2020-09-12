import { Component, OnInit } from '@angular/core';
import { timer, interval } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { MOVIE } from 'src/app/model/model.api';
import { delay } from 'rxjs/operators';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
  providers:[
    MovieService
  ]
})
export class UpcomingPage implements OnInit {
  private valueSegment:string="shows";
  private skeleton:boolean=true;
  private gender:string = "Todo los géneros"
  private finds:MOVIE[] = []
  private airingToday :MOVIE[]= []
  constructor(private service:MovieService,private sheetGender:ActionSheetController){ }

  private airingTvData(){
    this.service.getAiringToday().subscribe((resp)=>{
      this.airingToday = resp.results;
    })
  }
  
  ngOnInit(){ 
    this.getMovie(36, this.gender);
    this.airingTvData();
  } 

  private changeSegment(e){
    if(this.valueSegment=="shows"){ timer(200).subscribe(()=>{ this.valueSegment="live" }) }
    else{ timer(200).subscribe(()=>{this.valueSegment="shows" }) }
  }

  private async openGender(){
    const genders = await this.sheetGender.create({
      header: "Géneros",
      mode:"ios",
      translucent: true,
      animated:false,
      buttons: [
        { text: "Reality shows" , handler:  ()=>  this.getMovie(10764,  "Reality shows")},
        { text: "Fantasy" ,       handler:  ()=>  this.getMovie(10765,  "Fantasy")},
        { text: "Talk" ,          handler:  ()=>  this.getMovie(10767,  "Talk")},
        { text: "News" ,          handler:  ()=>  this.getMovie(10763,  "News")},
        { text: "Kids" ,          handler:  ()=>  this.getMovie(10762,  "Kids")},
        { text: "War & Politics" ,handler:  ()=>  this.getMovie(10768,  "War & Politics")},
        { text: "Western" ,       handler:  ()=>  this.getMovie(10768,  "Western")},
        { text: "Action" ,        handler:  ()=>  this.getMovie(10759,  "Action")},
        { text: "Suspense" ,      handler:  ()=>  this.getMovie(53,     "Suspense")},
        { text: "Romance" ,       handler:  ()=>  this.getMovie(10749,  "Romance")},
        { text: "Fiction" ,       handler:  ()=>  this.getMovie(878,    "Fiction")},
        { text: "Crimen" ,        handler:  ()=>  this.getMovie(80,     "Crimen")},
        { text: "Comedy" ,        handler:  ()=>  this.getMovie(35,     "Comedy")},
        { text: "Belic" ,         handler:  ()=>  this.getMovie(10752,  "Belic")},
        { text: "Misterious",     handler:  ()=>  this.getMovie(9648,   "Misterious") },
        { text: "Documentals",    handler:  ()=>  this.getMovie(99,     "Documentals") },
        { text: "Family",         handler:  ()=>  this.getMovie(10751,  "Family") },
        { text: "Drama" ,         handler:  ()=>  this.getMovie(18,     "Drama")},
        { text: "Animation" ,     handler:  ()=>  this.getMovie(16,     "Animation")},
        { text: "History",        handler:  ()=>  this.getMovie(36,     "History")},
        { text: "Cancel", role: "cancel"}
      ]
    })
    genders.present()
  }

  private getMovie(id:number,nameGender:string){
    this.skeleton=false
    this.gender=nameGender

    this.service.getTvByGenres(id).pipe(delay(1000)).subscribe(resp=>{
      this.finds=resp.results
    }, ()=>{return},()=> this.skeleton=true)  
     
  }
 
}
