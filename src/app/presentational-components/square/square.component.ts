import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'cs-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() color: string; // Square color.

  constructor() { }

  ngOnInit() {
  }

}
