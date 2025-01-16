export interface Item {
  id: number;
  name: string;
  color: string;
  price: number;
  events?: Event[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: number;
  itemId: number;
  location: string;
  custodian: string;
  item?: Item;
  createdAt: Date;
} 