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
    return this.httpClient.get(`${this.url}/inventory`, { headers: this.httpHeader }).pipe(
      map(list => this.mapGetInventoryResponse(list)),
    );
  }

  addInventoryItem(body: { vaccines: [{ numberOfVaccines: number, vaccineType: string }] }): Observable<any> { 
    return this.httpClient.post<any>(`${this.url}/addInventory`, body, { headers: this.httpHeader });
  }

  updateInventoryItemQuantity(id: string, numberOfVaccines: number): Observable<any> { 
    return this.httpClient.put<any>(`${this.url}/updateInventory/${id}`, { numberOfVaccines }, { headers: this.httpHeader });
  }

  private mapGetInventoryResponse(list): Inventory[] {
    return list.map((item) => ({
      id: item._id,
      quantity: item?.numberOfVaccines,
      name: item.vaccineType?.manufacturer,
      shelfLife: item.vaccineType?.shelfLife,
    })).filter(item => !!item.name);
  }
}
