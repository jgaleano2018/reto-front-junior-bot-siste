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
  public getProducts(): Observable<Product> {
    const params = new HttpParams()
    return this._httpClient.get<Product>('http://localhost:4200/Products', { params });
  }

  /**
   * Este método recibe el número de identificación del Cliente y el tipo de documento para consultar los créditos del Cliente.
   * @param id Número del documento del Cliente.
   * @param idType Tipo de documento del Cliente.
   * @returns Rerorna la respuesta del set de datos de los créditos del Cliente.
   */
  public getProductsId(id: string): Observable<ProductClass> {
    const params = new HttpParams()
      .set('id', id);
    return this._httpClient.get<ProductClass>('http://localhost:4200/Product/{id}', { params });
  }

  /**
   * En este método se recibe el modelo de los compromisos generados y se guarda las observaciones de la gestión de los compromisos del Cliente.
   * @param dataRequest Modelo con los compromisos generados.
   * @returns Retorna la respuesta de la gestión del guardado de las observaciones de los compromisos.
   */
  public saveProduct(dataRequest: ProductClass) {
    return this._httpClient.post<ProductClass>('http://localhost:4200/Product', dataRequest);
  }

    /**
   * En este método se recibe el modelo de los compromisos generados y se guarda las observaciones de la gestión de los compromisos del Cliente.
   * @param dataRequest Modelo con los compromisos generados.
   * @returns Retorna la respuesta de la gestión del guardado de las observaciones de los compromisos.
   */
    public deleteProduct(idProduct: any) {
      return this._httpClient.delete('http://localhost:4200/Product/'+idProduct);
    }
  
}
