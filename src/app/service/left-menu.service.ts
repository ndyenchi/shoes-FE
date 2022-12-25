import { Injectable } from '@angular/core';
import {LeftMenu} from "../model/left-menu";

@Injectable({
  providedIn: 'root'
})
export class LeftMenuService {

  constructor() { }

  getList(): any{
    const data= [
      {id: 1, name: 'MEN', url : ''},
      {id: 2, name: 'WONEM', url : ''},
      {id: 3, name: 'KIDS', url : ''},
      {id: 4, name: 'CUSTOMER', url : ''},
      {id: 5, name: 'SALE', url : ''},
    ];
    return data;
  }
}
