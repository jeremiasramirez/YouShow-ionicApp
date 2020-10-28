import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    
 {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'search',
        loadChildren: ()=>import("../pages/search/search.module").then((e)=>e.SearchPageModule)
      },
      {
        path: 'homepage',
        loadChildren: ()=>import("../pages/homepage/homepage.module").then((e)=>e.HomepagePageModule)
      },
      {
        path: 'explore',
        loadChildren: ()=>import("../pages/explore/explore.module").then((e)=>e.ExplorePageModule)
      },
      {
        path: 'explore/:name',
        loadChildren: ()=>import("../pages/explore/explore.module").then((e)=>e.ExplorePageModule)
     },
      {
        path: 'tv',
        loadChildren: ()=>import("../pages/upcoming/upcoming.module").then((e)=>e.UpcomingPageModule)
      }
    ]
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
