<<<<<<< HEAD
import {
  AfterViewInit,
  Component, OnInit,
  ViewChild
} from '@angular/core';
=======
import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from 'stream';
>>>>>>> c8708af7d687e12617c2bfd55cb41df00b03dfff

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, AfterViewInit {
<<<<<<< HEAD
  @ViewChild('mobileNav', {static:true}) mobileNav:any
  isMobile = false;
  constructor(){}

  ngOnInit(): void{}
=======
@ViewChild('v')  native: any;
isMobile = false 
  constructor() { }
>>>>>>> c8708af7d687e12617c2bfd55cb41df00b03dfff

  ngAfterViewInit() {
    console.log(this.mobileNav)
  }
<<<<<<< HEAD
  collapse(){
    if(!this.isMobile) {
      this.isMobile = true
    }else{
      this.isMobile = false;
    }
  }
}
=======

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
>>>>>>> c8708af7d687e12617c2bfd55cb41df00b03dfff
