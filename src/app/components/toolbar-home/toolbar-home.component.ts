import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-home',
  templateUrl: './toolbar-home.component.html',
  styleUrls: ['./toolbar-home.component.scss'],
})
export class ToolbarHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  private setByNavigate(uri:string){
    this.router.navigate([uri])
  }
}
