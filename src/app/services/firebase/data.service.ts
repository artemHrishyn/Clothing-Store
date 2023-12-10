import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IAllData } from '../../interfaces/all-data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private data: IAllData[] = new Array<IAllData>;

  constructor(
    private http: HttpClient,
    private api: ApiService
  ) { }

  // Отримка даних з серверу
  public getData(value: string) {
    const data: string = `${this.api.source[`${value}`]}.json`;
    return this.http.get(data);
  }

  // Відправка даних на сервер
  public sendData(value: string, dataValue: IAllData) {

    this.data.push(dataValue);
    return this.http.post(`${this.api.source['clothes']}/${value}.json`, dataValue).subscribe(elem => {
      console.log(elem);
    });
  }
}
