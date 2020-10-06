import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any, searchText: any, name: any, buildingName: any, towerName: any, propertyName: any, configuration: any): any {

    if (((searchText.length > 0) || (name.length > 0) || (buildingName.length > 0) || (towerName.length > 0) || (propertyName.length > 0) || (configuration.length > 0))) {
      let temp: any[] = [];

      const tempCat: any[] = [];

      for (let i = 0; i < list.length; i++) {
        if ((this.hasSearchTextInContext(list[i].name, name))
          && (this.hasSearchTextInContext(list[i].building.name, buildingName))
          && (this.hasSearchTextInContext(list[i].building_towers.tower_name, towerName))
          && (this.hasSearchTextInContext(list[i].property_type.name_en, propertyName))
          && (this.hasSearchTextInContext(list[i].configuration.name_en, configuration))
          ) {
          tempCat.push(list[i]);
        }
      }
      temp = tempCat;

      if (searchText.length > 0) {
        searchText = searchText.trim();

        if (temp.length === 0) {
          for (let i = 0; i < list.length; i++) {

            if (this.hasSearchTextInContext(list[i].name, searchText) ||
              this.hasSearchTextInContext(list[i].building.name, searchText) ||
              this.hasSearchTextInContext(list[i].building_towers.tower_name, searchText) ||
              this.hasSearchTextInContext(list[i].property_type.name_en, searchText) ||
              this.hasSearchTextInContext(list[i].configuration.name_en, searchText)
              ) {
              temp.push(list[i]);
            }
          }
        } else {

          const tempSearch: any[] = [];

          for (let i = 0; i < temp.length; i++) {
             if (this.hasSearchTextInContext(temp[i].name, searchText) ||
              this.hasSearchTextInContext(temp[i].building.name, searchText) ||
              this.hasSearchTextInContext(temp[i].building_towers.tower_name, searchText) ||
              this.hasSearchTextInContext(temp[i].property_type.name_en, searchText) ||
              this.hasSearchTextInContext(temp[i].configuration.name_en, searchText)
              ) {
              tempSearch.push(temp[i]);
            }
          }

          temp = tempSearch;
        }

      }

      return temp;
    } else {
      return list;
    }

  }

  hasSearchTextInContext(searchContext: string, searchText: string) {
    return searchContext.toUpperCase().includes(searchText.toUpperCase());
  }
}
