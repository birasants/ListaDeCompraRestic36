import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Item {
  name: string;
  bought: boolean;
}

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {
  items: Item[] = [];
  newItem: string = '';
  editingItem: Item | null = null;

  addItem() {
    if (!this.newItem) return;
    
    if (this.editingItem) {
      this.editingItem.name = this.newItem;
      this.editingItem = null;
    } else {
      this.items.push({ name: this.newItem, bought: false });
    }
    
    this.newItem = '';
  }

  toggleBought(item: Item) {
    item.bought = !item.bought;
  }

  editItem(item: Item) {
    this.newItem = item.name;
    this.editingItem = item;
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(i => i !== item);
  }
}
