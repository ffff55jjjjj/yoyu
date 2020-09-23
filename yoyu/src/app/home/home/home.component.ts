import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'install-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tagClick(e){
    if(e.target.tagName === 'LI'){
      e.target.parentNode.childNodes.forEach(element =>{
        element.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  }
}
