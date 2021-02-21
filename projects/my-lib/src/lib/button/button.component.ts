import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Output() click: EventEmitter<void> = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  onclick(){
  this.click.emit();
  }
  
}
