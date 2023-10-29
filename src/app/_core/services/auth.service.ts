import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly serverUrl: string = "https://localhost:7200/api";

  constructor(private httpClient: HttpClient) { }

  register(body): Observable<any> {
    return this.httpClient.post(this.serverUrl + '/Register', body);
  }

  login(body): Observable<any> {
    return this.httpClient.post(this.serverUrl + '/Login', body);
  }

  getElectronics(userId) {
    return this.httpClient.get(this.serverUrl + '/GetElectronics/' + userId);
  }

  registerElectronic(body): Observable<any> {
    return this.httpClient.post(this.serverUrl + '/registerElectronic', body);
  }

  getOffers(userId): Observable<any> {
    return this.httpClient.get(this.serverUrl + '/getoffers/' + userId);
  }
  deleteElectronic(body) {
    return this.httpClient.delete(this.serverUrl + '/deleteElectro', body);
  }

  getCO2(userId): Observable<any> {
    return this.httpClient.get(this.serverUrl + '/CO2/' + userId);
  }
}
