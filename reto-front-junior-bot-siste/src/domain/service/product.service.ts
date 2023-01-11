import { HttpBackend, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/data/interface/product.interface';

/**
 * Servicio que contiene los métodos para consumir los servicios de tipo api/rest de compromisos al backEnd.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _httpClient: HttpClient,
    private _httpClientBypassInterceptor: HttpBackend
  ) { }

  /**
   * Este método devuelve la lista de productos
   * @returns Rerorna un array con la lista de productos
   */
  public getProducts(): Observable<Product[]> {
    const params = new HttpParams()
    return this._httpClient.get<Product[]>('https://localhost:7174/api/Product', { params });
  }

  /**
   * Este método recibe el id del producto.
   * @param id Id del producto
   * @returns Rerorna el array de con los datos del producto.
   */
  public getProductsId(id: number): Observable<Product[]> {
    const params = new HttpParams()
      .set('id', id);
    return this._httpClient.get<Product[]>('https://localhost:7174/api/Product/{id}', { params });
  }

  /**
   * En este método se recibe el modelo del producto que se desea crear.
   * @param dataRequest Modelo con los datos del producto.
   * @returns Retorna true o false de acuerdo al procesamiento del registro.
   */
  public createProduct(dataRequest: Product) {
    return this._httpClient.post<Boolean>('https://localhost:7174/api/Product', dataRequest);
  }

  /**
   * En este método se recibe el modelo del producto que se desea actualizar.
   * @param dataRequest Modelo con los datos del producto.
   * @returns Retorna true o false de acuerdo al procesamiento del registro.
   */
   public updateProduct(dataRequest: Product) {
    let query = {
      'id': dataRequest.id,
      'product': dataRequest
    }
    return this._httpClient.put<Boolean>('https://localhost:7174/api/Product/{id}', query);
   }

    /**
   * En este método se recibe el modelo del producto que se desea eliminar.
   * @param dataRequest Modelo con los datos del producto.
   * @returns Retorna true o false de acuerdo al procesamiento del registro.
   */
    public deleteProduct(idProduct: number) {
      return this._httpClient.delete('https://localhost:7174/api/Product/'+idProduct);
    }
  
}
