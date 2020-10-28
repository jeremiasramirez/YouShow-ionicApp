import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
 
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
 
}
