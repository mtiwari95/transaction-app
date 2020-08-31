import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TxnService {

  private apiServer = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  create(transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(this.apiServer + '/transaction/', JSON.stringify(transaction), this.httpOptions)
  }  
  
  
  getAllTransaction() {
    return this.httpClient.get(this.apiServer + '/transaction/')
  }
}
