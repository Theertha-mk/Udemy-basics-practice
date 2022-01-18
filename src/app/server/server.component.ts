import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
  serverName = '';
  allowNewServer = false;
  propertyTitle = 'this is propertyTitle';
  serverCreationStatus = 'no server was created';
  serverCreated=false;
  username="";
  serverId:number=10;
  serverStatus:string='offline';

  sayHello() {
    console.log('welcome to event binding')
  }
  highlightBGcolor() {
    console.log('this is highlight part')
  }
  inputBox() {
    console.log('this is input box')
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === 'online'? 'green' : 'red';
  }
  constructor() {

    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
    this.serverCreationStatus;
    this.serverStatus=Math.random() >.5 ? 'online' : 'offline' ;
  }

  ngOnInit() {}
  // onCreateServer(event: any) {
  //   alert(event.target.innerHTML)
  //   this.serverCreationStatus="server was created! server name is "+this.serverName
  // }
  onCreateServer(){
    this.serverCreated=true;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
