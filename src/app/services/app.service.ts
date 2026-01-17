import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public loadSelectedItems(): string[] {
    const selectedItemsString = localStorage.getItem('selectedItems');
    return JSON.parse(selectedItemsString) || [];
  }

  public saveSelectedItems(selectedItems: string[]) {
    const selectedItemsString = JSON.stringify(selectedItems);
    localStorage.setItem('selectedItems', selectedItemsString);
  }
}
