import {  Pipe, PipeTransform} from "@angular/core"
 

@Pipe({
    name: "cutText"
})

export class CutPipe implements PipeTransform{
   
    transform(data:string,size=9){
        let text = data;

        if(data && data.length >= size){
            text = data.substring(0,size) + "..."
            return text
        }
        else if(!data){
            text = "Show"
            return text
        }
        return text        
         
         
    }

}