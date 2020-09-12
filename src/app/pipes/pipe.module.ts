import { NgModule } from "@angular/core";
import { PipeImage } from './pipe.img';
import { CutPipe } from './pipe.cuttext';
import { CommonModule } from '@angular/common';  
@NgModule({
   declarations: [
    PipeImage,
    CutPipe
   ],
   imports:[
      CommonModule
   ],
   exports:[
    PipeImage,
    CutPipe
   ]
})

export class PipeModule{

}