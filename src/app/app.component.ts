import { Component, OnInit } from '@angular/core';
import buildings from '../app/data/properties.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-test';

  public buildingList: Object[] = buildings.data;
  private isAscendingSort: Boolean = true;

  searchBuildingPattern = '';
  name = '';
  buildingName = '';
  towerName = '';
  propertyName = '';
  configuration = ''
  priceFilter='';

  constructor() {    
  }

  ngOnInit() {
  } 

  onkeyup(value){
   const d = this.buildingList.filter((f: any) => f.min_price > this.priceFilter);
   this.buildingList = d;
  }

  sortData(field: string) {
    this.isAscendingSort = !this.isAscendingSort;
    if(field == 'min_price' || field == 'bedroom' || field == 'bathroom' || field == 'half_bathroom'){
      if(this.isAscendingSort){
        this.buildingList.sort((item1: any, item2: any) => item1[field] - item2[field])
      }
      else{
        this.buildingList.sort((item1: any, item2: any) => item2[field]- item1[field])
      }    
    }
    else{
      if(field == 'configuration' || field == 'property_type' ){
        this.buildingList.sort((item1: any, item2: any) => this.compare(item1[field].name_en, item2[field].name_en));
      }
      else if (field == 'building_towers'){
        this.buildingList.sort((item1: any, item2: any) => this.compare(item1[field].tower_name, item2[field].tower_name));
      }
      else if(field == 'building'){
        this.buildingList.sort((item1: any, item2: any) => this.compare(item1[field].name, item2[field].name));
      }
      else{
        this.buildingList.sort((item1: any, item2: any) => this.compare(item1.name, item2.name));
      }
      
    }   
  }
  compare(item1: any, item2: any): number {
    console.log(item1, item2)
    let compValue = 0;
    compValue = item1.localeCompare(item2);
    if (!this.isAscendingSort) {
      compValue = compValue * -1;
    }
    return compValue;
  }

  
  clearFilters() {
    this.searchBuildingPattern = '';
    this.name = '';
    this.buildingName = '';
    this.towerName = '';
    this.propertyName = '';
    this.configuration = ''
    this.priceFilter='';
    this.buildingList = buildings.data
  }

}
