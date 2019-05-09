import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private HttpLog: HttpClient) { }
  /**
   * entrar
   */
  public entrar(data: any) {
    return this.HttpLog.post('http://localhost/clase07/', data);
  }
}
