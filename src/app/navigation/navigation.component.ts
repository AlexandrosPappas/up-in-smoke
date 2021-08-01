import {
  AfterViewInit,
  Component, OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @ViewChild('mobileNav', {static:true}) mobileNav:any
  isMobile = false;
  constructor(){}

  ngOnInit(): void{}

  ngAfterViewInit() {
    console.log(this.mobileNav)
  }
  collapse(){
    if(!this.isMobile) {
      this.isMobile = true
    }else{
      this.isMobile = false;
    }
  }
}