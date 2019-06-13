import { PromotionService } from './../services/promotion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  promotionList = [];
  filterList = [];

  constructor(
    private promotionService : PromotionService
  ) { }

  ngOnInit() {
    this.promotionService.getAll().subscribe(results =>{
      this.promotionList = this.filterList = results;
      console.log(results);
    });
  }

}
