import { Component, OnInit } from '@angular/core';
import {Category} from "../../type/category";

@Component({
  selector: 'app-event-category',
  templateUrl: './event-category.component.html',
  styleUrls: ['./event-category.component.css']
})
export class EventCategoryComponent implements OnInit {

  categories : Category[] = [{
    id:1,
    name: "music",
    categoryUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F41638359%2F61861132805%2F1%2Foriginal.jpg?w=800&auto=compress&rect=107%2C107%2C3460%2C1730&s=0ccf42500cd2901cd0874105ff720da2",
  },{
    id:2,
    name: "sport",
    categoryUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F41638359%2F61861132805%2F1%2Foriginal.jpg?w=800&auto=compress&rect=107%2C107%2C3460%2C1730&s=0ccf42500cd2901cd0874105ff720da2",
  },{
    id:3,
    name: "food",
    categoryUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F41638359%2F61861132805%2F1%2Foriginal.jpg?w=800&auto=compress&rect=107%2C107%2C3460%2C1730&s=0ccf42500cd2901cd0874105ff720da2",
  }]

  constructor() { }

  ngOnInit() {
  }

}
