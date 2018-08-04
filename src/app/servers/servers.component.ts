import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //for selecting using elemnts
  // selector: '[app-servers]', //for selecting using as attributes
  // selector: '.app-servers', //for selecting using as class
  
  
  
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus="Server is not created"
  isServercreated=false;
  serverName="Testserver"
  servers=["testServer","Testserver 1"]

  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);

   }

  ngOnInit() {
  }
  onCreateServer(){
    this.isServercreated=true
    this.servers.push(this.serverName);
    this.serverCreationStatus="Server is Created and the name is  " + this.serverName;
  }
  

}
