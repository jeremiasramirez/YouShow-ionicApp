import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MOVIE } from 'src/app/model/model.api';
import { delay } from 'rxjs/operators';
import { timer } from 'rxjs';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'] ,
  providers:[
    MovieService
  ]
})
export class ExplorePage implements OnInit {
 
  private listRoutes=[
    { name: "action" },
    { name: "terror" },
    { name: "suspense" },
    { name: "romance" },
    { name: "fiction" },
    { name: "action" },
    { name: "crimen" },
    { name: "belic" },
    { name: "misterious" },
    { name: "documentals" },
    { name: "family" ,value:10751},
    { name: "drama" },
    { name: "history", value:36}
  ]
  private gender:string="Todo los géneros"
  private skeleton:boolean=true;
  private limitMovie:number=5;
  private moviesFind:MOVIE;
  private showList:boolean=true

  constructor(
    private sheetGender:ActionSheetController,
    private service:MovieService){ 
      this.getMovie(36,this.gender)
  }

  ngOnInit() { }

  private async openGender(){
    const genders = await this.sheetGender.create({
      header: "Géneros",
      mode:"ios",
      translucent: true,
      animated:false,
      buttons: [
        { text: "Action" ,handler:()=>this.getMovie(28,"Action")},
        { text: "Terror" ,handler:()=>this.getMovie(27,"Terror")},
        { text: "Suspense" ,handler:()=>this.getMovie(53,"Suspense")},
        { text: "Romance" ,handler:()=>this.getMovie(10749,"Romance")},
        { text: "Fiction" ,handler:()=>this.getMovie(878,"Fiction")},
        { text: "Crimen" ,handler:()=>this.getMovie(80,"Crimen")},
        { text: "Belic" ,handler:()=>this.getMovie(10752,"Belic")},
        { text: "Misterious", handler:()=>this.getMovie(9648,"Misterious") },
        { text: "Documentals",handler:()=>this.getMovie(99, "Documentals") },
        { text: "Family", handler:()=>this.getMovie(10751,"Family") },
        { text: "Drama" ,handler:()=>this.getMovie(18,"Drama")},
        { text: "History", handler:()=>this.getMovie(36,"History")},
        { text: "Cancel", role: "cancel"}
      ]
    })
    genders.present()
  }

  private getMovie(id:number,nameGender:string){
    this.skeleton=false
    this.gender=nameGender

    this.service.getByGenres(id).pipe(delay(1000)).subscribe(resp=>{

      this.moviesFind=resp.results
      this.limitMovie=8

    }, ()=>{return},()=> this.skeleton=true)  
     
  }

  private accelerateMovie(ev:any){
    timer(700).subscribe(()=>{
      ev.target.complete();
      this.limitMovie+=5
    })
  }

}
