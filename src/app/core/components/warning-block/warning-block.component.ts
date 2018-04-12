import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-block',
  templateUrl: './warning-block.component.html',
  styleUrls: ['./warning-block.component.css']
})
export class WarningBlockComponent implements OnInit {

  @Input() warningMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
