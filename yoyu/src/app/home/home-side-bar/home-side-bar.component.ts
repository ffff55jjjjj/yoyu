import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'install-home-side-bar',
  templateUrl: './home-side-bar.component.html',
  styleUrls: ['./home-side-bar.component.css']
})
export class HomeSideBarComponent implements OnInit {

  @ViewChild('side_bar') sideBar:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  spreadLeftClick(){
    let sideBar = document.getElementById('side_bar');
    console.log(sideBar.style.right);
    if(sideBar.style.right=='0px'){
      sideBar.style.right='-200px';
      sideBar.children[0].children[0].classList.remove('layui-icon-spread-left');
      sideBar.children[0].children[0].classList.add('layui-icon-shrink-right');
    }else{
      sideBar.style.right='0';
      sideBar.children[0].children[0].classList.remove('layui-icon-shrink-right');
      sideBar.children[0].children[0].classList.add('layui-icon-spread-left');
    }
  }
}
