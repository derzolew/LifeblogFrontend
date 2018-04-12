import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-response-message',
  templateUrl: './auth-response-message.component.html',
  styleUrls: ['./auth-response-message.component.css']
})
export class AuthResponseMessageComponent implements OnInit {

  @Input() labelText: string;
  @Input() imageLink: string;
  @Input() bodyText: string;
  @Input() buttonText: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
