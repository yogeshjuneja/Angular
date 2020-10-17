import { DatePipe } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  @Input('parentdata') public parentdata;
  @Output() public ChildEvent = new EventEmitter();
  public color = ['Red', 'Blue', 'Green', 'Pink'];
  public realtimename = '';
  public btnclick = '';
  displaydata = new Date().getMinutes() % 2;

  public inputtextvalue = '';
  constructor() {}
  checkbtnclick(event): void {
    this.btnclick = 'Button is clicked';
    console.log(event);
  }
  textboxvalue(data): void {
    this.inputtextvalue = data;
  }

  sendeventtoparent(txtbxvalue): void {
    this.ChildEvent.emit(txtbxvalue);
  }

  ngOnInit(): void {}
}
