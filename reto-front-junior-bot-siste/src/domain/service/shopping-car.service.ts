
import { HttpBackend, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buy } from 'src/data/interface/buy.interface';
import { Product } from 'src/data/interface/product.interface';

/**
 * Servicio que contiene los métodos para consumir los servicios de tipo api/rest de compromisos al backEnd.
 */
@Injectable({
  providedIn: 'root'
})
export class ShoppingCarService {

  constructor(
    private _httpClient: HttpClient,
    private _httpClientBypassInterceptor: HttpBackend
  ) { }

  /**
   * Este método devuelve la lista de compras x histórico
   * @returns Rerorna un array con la lista de compras x histórico
   */
  public GetListOfShoppingHistory(): Observable<Buy[]> {
    const params = new HttpParams()
    return this._httpClient.get<Buy[]>('http://localhost:4200/Products', { params });
  }

  /**
   * Este método recibe el id del producto.
   * @param id Id del producto
   * @returns Rerorna un array con la lista de compras
   */
  public GetShoppingHistoryByIdAsync(id: number): Observable<Buy[]> {
    const params = new HttpParams()
      .set('id', id);
    return this._httpClient.get<Buy[]>('http://localhost:4200/Product/{id}', { params });
  }

  /**
   * En este método se recibe el modelo del producto que se desea crear.
   * @param dataRequest Modelo con los datos del producto.
   * @returns Retorna true o false de acuerdo al procesamiento del registro.
   */
  public CreateBuyAsync(dataRequest: Buy) {
    return this._httpClient.post<Boolean>('http://localhost:4200/CreateProductAsync', dataRequest);
  }
  
}
