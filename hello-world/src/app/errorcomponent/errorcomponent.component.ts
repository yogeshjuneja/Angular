import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-errorcomponent',
  templateUrl: './errorcomponent.component.html',
  styleUrls: ['./errorcomponent.component.css']
})

export class ErrorcomponentComponent implements OnInit {

  @Output() public ErrorPageMessage = new EventEmitter();


  constructor() {
    this.ErrorPageMessage.emit('Yes');
  }

  ngOnInit(): void {
  }

}
