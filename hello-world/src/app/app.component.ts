import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  componentname;
  staticdatavisible = false;
  constructor(private activatedRoute: ActivatedRoute) {
    //this.componentname = this.activatedRoute.snapshot?.routeConfig.component;
  }
  title = 'hello-world';
  public datafromparent = 'Data from parent';
  public childmessage: string = '';
  public ErrorPageComponent = "";

}
