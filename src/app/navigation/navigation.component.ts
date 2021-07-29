import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterViewInit {
@ViewChild('v')  native: any;
isMobile = false 
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    debugger
    console.log(this.native.nativeElement)
  //  if(this.native?.className = 'burger'){
  //    this.isMobile = true;

  //  }else {
  //    this.isMobile = false
  //  }

  }
o(){
  alert('yo')
}
}
