import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  constructor(angular) {
    let myApp = angular.module('myApp', []);
    myApp.controller('myController'),[{
      decimal : "",
      binary:"",
      octal:"",
      hexa:"",

     let (newValue, oldValue){
        if (newValue != ""){
        this.binary = parseInt(newValue, 10).toString(2);
       this.octal = parseInt(newValue, 10).toString(8);
        this.hexa = parseInt(newValue, 10).toString(16).toUpperCase();
        }else{
          this.binary="";
          this.octal="";
          this.hexa="";
        }
          
        if (newValue != ""){
        this.decimal = parseInt(newValue, 2).toString(10);
      }else{
        this.decimal = "";
      }
        if (newValue != ""){
        this.decimal = parseInt(newValue, 8).toString(10);
      }else{
        this.decimal = "";
      }
        if (newValue != ""){
        this.decimal = parseInt(newValue, 16).toString(10);
         }else{
        this.decimal = "";
         }
        }
      }];
    }
  }
  