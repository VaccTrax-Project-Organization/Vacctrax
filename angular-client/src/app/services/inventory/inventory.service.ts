import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Inventory } from 'src/app/models/interfaces/inventory.interface';
import { Service } from '../service.class';

@Injectable({
  providedIn: 'root'
})
export class InventoryService extends Service {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getInventoryList(): Observable<Inventory[]> {
    return this.httpClient.get(`${this.url}/inventory`, { headers: this.httpHeader })
      .pipe(map(list => this.mapGetInventoryResponse(list)));
  }

  addInventoryItem(body: { vaccines: [{ numberOfVaccines: number, vaccineType: string }] }): Observable<any> { 
    return this.httpClient.post<any>(`${this.url}/addInventory`, body, { headers: this.httpHeader });
  }

  private mapGetInventoryResponse(list): Inventory[] {
    return list.map((item) => ({
      id: item._id,
      quantity: item.vaccines[0].numberOfVaccines,
      name: item.vaccines[0].vaccineType.manufacturer,
      shelfLife: item.vaccines[0].vaccineType.shelfLife,
      actions: () => {} // refactor this to implement appropriate modal logic in the future
    }));
  }
}