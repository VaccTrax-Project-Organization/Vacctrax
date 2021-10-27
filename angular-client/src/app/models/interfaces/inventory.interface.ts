export interface Inventory {
  name: string;
  quantity: number;
  type: string;
  actions(): void;
  id: number;
  shelfLife: number;
}