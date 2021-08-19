import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  featureSelected = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature : string) {

  }

}
