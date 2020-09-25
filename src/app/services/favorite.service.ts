import {Injectable } from "@angular/core";
import { ToastController } from '@ionic/angular';


@Injectable()

export class FavoriteService{

    public favorites :any[]=[]
    constructor(private toast:ToastController){
        if (localStorage.getItem("favorites"))
            this.favorites= JSON.parse(localStorage.getItem("favorites")) 
    }


    private async setToast(name:string,colors:string, icons:string="heart"){
        const toasted= await this.toast.create({
            header: name,
            color: colors,
            mode:"ios",
            duration: 2000,
            position:"bottom",
            buttons:[
                {text: "", icon: icons}
            ]
        })
        toasted.present();
    }
    setFavorite(item){
        this.updateStorage()
        
        if(!this.isFavorite(item)){
            this.favorites.push(item)
            this.updateStorage()
            this.setToast("Agregado a favoritos", "tertiary")
        }
        else{
            this.removeFavorite(item)
        }


    }

    updateStorage(){
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
        this.favorites= JSON.parse(localStorage.getItem("favorites")) 
    }

    getFavorites(){
        this.updateStorage();
        return JSON.parse(localStorage.getItem("favorites")) 
    } 

    isFavorite(item){
        this.updateStorage()
        let returnIs:boolean
        for(let i=0;i<this.favorites.length; i++){
            if(this.favorites[i].id == item.id){
                returnIs=true

                return returnIs
            }
            else{
                returnIs=false
                return returnIs
            }
        }
        return returnIs;

    }

    removeFavorite(item){
        this.updateStorage()
        for(let i=0; i<this.favorites.length;i++){
            if(this.favorites[i].id == item.id){
                
                this.favorites.splice(this.favorites[i],1);
                
                this.setToast("Removido de favoritos", "danger", "star-outline")
                this.updateStorage()
            }
            
        }
    }
}