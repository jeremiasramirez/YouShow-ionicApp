import { NgModule } from '@angular/core';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { FacemovieComponent } from './facemovie/facemovie.component';
import { CommonModule } from '@angular/common';  
import { PipeModule } from '../pipes/pipe.module';
import { FacetvComponent } from './facetv/facetv.component';
//import { SkeletonSearchComponent } from './skeleton-search/skeleton-search.component';
import { FaceSearchComponent } from './face-search/face-search.component';
//import { PopularSearchComponent } from './popular-search/popular-search.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToolbarHomeComponent } from './toolbar-home/toolbar-home.component';
import { ExploreCardComponent } from './explore-card/explore-card.component';
import { MovieComponent } from './movie/movie.component';
 

@NgModule({
  declarations: [
    SkeletonComponent,
    FacemovieComponent,
    FacetvComponent,
 
    FaceSearchComponent,
    MovieComponent,
    SpinnerComponent,
    ToolbarHomeComponent,
    ExploreCardComponent
  ],
  imports:[ 
    CommonModule,
    PipeModule
  ],
  exports: [
    SkeletonComponent,
    FacemovieComponent,
    FacetvComponent,
    MovieComponent,
    FaceSearchComponent,
 
    SpinnerComponent,
    ToolbarHomeComponent,
    ExploreCardComponent
  ] 

})
export class ComponentModule {}
