import { Component, OnInit, DoCheck } from '@angular/core';

import { CompCommunicationService } from '../comp-communication.service';

@Component({
  selector: 'app-left-rail',
  templateUrl: './left-rail.component.html',
  styleUrls: ['./left-rail.component.scss']
})
export class LeftRailComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5];

  constructor(private compService: CompCommunicationService) { }

  ngOnInit() {
  }
  emitNumber(e) {
    this.compService.numberSelected = e;
  }
  // ngDoCheck(){
  //   console.log(this.compService.numberSelected);
  // }
}
