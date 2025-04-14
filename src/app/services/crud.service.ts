import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  getItems(): any[] {
    return JSON.parse(localStorage.getItem('items') || '[]');
  }

  addItem(item: any): void {
    const items = this.getItems();
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
  }

  updateItem(updatedItem: any): void {
    const items = this.getItems().map(item => item.id === updatedItem.id ? updatedItem : item);
    localStorage.setItem('items', JSON.stringify(items));
  }

  deleteItem(id: number): void {
    const items = this.getItems().filter(item => item.id !== id);
    localStorage.setItem('items', JSON.stringify(items));
  }
}
