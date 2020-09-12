import {  Pipe, PipeTransform} from "@angular/core"

@Pipe({
    name: "image"
})

export class PipeImage implements PipeTransform{
    private movieImgURI = `https://image.tmdb.org/t/p/w300`
    private movieImgDefault="../../../assets/poster-face/cinema.png"

    
    transform(data:string){
        let imgUri= `${this.movieImgURI+data}`
        if(!data){
            imgUri=this.movieImgDefault
            return imgUri  
        }
        
         return imgUri 
    }

}