import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers:[
    FavoriteService
  ]
})
export class ListComponent implements OnInit {
  private lists:any[] =[]
  private showButtonNew:boolean;
  private slideOptions = {
    slidesPerView:  2.6,
    freeMode:true,
    spaceBetween: -7
  }

  constructor(
    private modal:ModalController,
    private list:FavoriteService) { }

  ngOnInit() {
    this.getFavLists()
    this.lists=this.list.favorites
  }

  private async close(){
    this.modal.dismiss()
  }
  private refresh(){
    this.lists=this.list.getFavorites();
  }

  private getFavLists(){
    if(this.list.getFavorites().length){
     
      this.list.updateStorage()
      this.lists=this.list.getFavorites()
   
      this.showButtonNew=false
    
    }
    else{
      this.showButtonNew=true
    }
  }
}
