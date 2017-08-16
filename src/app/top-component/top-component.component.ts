import { Component, OnInit } from '@angular/core';

import { CompCommunicationService } from '../comp-communication.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-top-component',
  templateUrl: './top-component.component.html',
  styleUrls: ['./top-component.component.scss']
})
export class TopComponentComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5];
  selectedNumber = null;
  showStyle = false;

  constructor(private compService: CompCommunicationService) { }

  ngOnInit() {
    const myObservable = Observable.create((observer: Observer<number>) => {
      
    })
    myObservable.subscribe(
      (data: number) => { console.log(data); }
    )
  }

  getStyle(event){
    
    console.log(event);
    // return this.compService.numberSelected;
  }

}
