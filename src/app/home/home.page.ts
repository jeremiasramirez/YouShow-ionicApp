import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
 
  constructor(private router:Router){}
  ngOnInit(){
    this.router.navigate(["/home/homepage"])
  }
}
