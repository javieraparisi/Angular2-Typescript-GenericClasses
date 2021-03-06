//our root app component
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Villain} from './Villain';
import {SuperTeam} from '../SuperTeam_T';
import {SuperPower} from '../SuperPower';

@Component({
  selector: 'appVillains',
  templateUrl: 'src/villains/appVillains.html'
})

export class AppVillains {
  public members:Villain[];
  
  constructor() {
    
    //Strong typed ***********************************************************
    //********************** Villain ********************************************
    //Type Villain
    var viper = new Villain("Viper");
    var sentinel = new Villain("Sentinel"); 
    var ultron = new Villain("Ultron"); 
    //Type SuperTeam<Villain>   
    var avengers = new SuperTeam([viper,sentinel,ultron],ultron);
    //Type Villain[]
    this.members = avengers.members; 
    
	}

}  

bootstrap(AppVillains);