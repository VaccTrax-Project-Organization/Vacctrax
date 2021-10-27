export interface Inventory {
  Name: string;
  Quantity: number;
  Type: string;
  Actions(): void;
}