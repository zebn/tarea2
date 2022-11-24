import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverId: number = 10;
  serverName='';
  allowNewServer=false;
  serverStatus: string = 'offLine';
  onUpdateServerName(event:Event)
{
this.serverName = (<HTMLInputElement>event.target).value;
if (this.serverName) this.allowNewServer = true; else this.allowNewServer = false;

}
  }

