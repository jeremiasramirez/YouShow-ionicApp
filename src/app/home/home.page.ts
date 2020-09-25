import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ListComponent } from '../components/list/list.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
 
  constructor(
    private modal:ModalController,
    private router:Router){}
  ngOnInit(){
    this.router.navigate(["/home/homepage"])
  }

  private async openFav(){
    const modals=await this.modal.create({
      component:ListComponent,
      mode:"ios"
    })
    modals.present()
  }
}
