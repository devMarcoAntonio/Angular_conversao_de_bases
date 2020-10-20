import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  calculator = {
    decimal: '',
    binary: '',
    octal: '',
    hexa: '',
    newValue: ''
  };

  constructor() {

  }

  reset() {
    this.calculator = {
      decimal: '',
      binary: '',
      octal: '',
      hexa: '',
      newValue: ''
    };
  }

  convert() {
    if (this.calculator.newValue !== '') {
      this.calculator.binary = parseInt(this.calculator.newValue, 10).toString(2);
      this.calculator.octal = parseInt(this.calculator.newValue, 10).toString(8);
      this.calculator.hexa = parseInt(this.calculator.newValue, 10).toString(16).toUpperCase();
    } else {
      this.calculator.binary = '';
      this.calculator.octal = '';
      this.calculator.hexa = '';
    }

    if (this.calculator.newValue !== '') {
      this.calculator.decimal = parseInt(this.calculator.newValue, 2).toString(10);
    } else {
      this.calculator.decimal = '';
    }

    if (this.calculator.newValue !== '') {
      this.calculator.decimal = parseInt(this.calculator.newValue, 8).toString(10);
    } else {
      this.calculator.decimal = '';
    }

    if (this.calculator.newValue !== '') {
      this.calculator.decimal = parseInt(this.calculator.newValue, 16).toString(10);
    } else {
      this.calculator.decimal = '';
    }
  }
}
