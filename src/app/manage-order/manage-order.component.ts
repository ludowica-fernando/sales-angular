import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hide = true;
  onChange(option) {
    if (option == 'courier') {
      this.hide = false;
    }
    else {
      this.hide = true;
    }
  }

}
