import { Component, OnInit } from '@angular/core';
import {LeftMenuService} from "../../../service/left-menu.service";
import {LeftMenu} from "../../../model/left-menu";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus: LeftMenu[] = [];
  constructor(private leftMenuService: LeftMenuService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.getListMenu();
    },);
    }

  getListMenu(){
    this.menus=this.leftMenuService.getList();
  }
}
