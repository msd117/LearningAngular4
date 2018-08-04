import { Component } from "@angular/core";

@Component({
    // selector:'app-server',
     // selector: 'app-server', //for selecting using elemnts
  // selector: '[app-server]', //for selecting using as attributes
  selector: '.app-server', //for selecting using as class
  
    templateUrl:'./server.component.html',
    styles:[`
    .online{
        color:white;
    }
    `]
    
})

export class ServerComponent{
    serverID=10;
    serverStatus='offline';
    constructor(){
        this.serverStatus= Math.random()>0.5? 'Online':'Offline';
    }
    getColor(){
        return this.serverStatus==='Online'?'green':'red';
    }

}