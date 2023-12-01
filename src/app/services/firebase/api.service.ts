import { Injectable } from '@angular/core';

const BASE_URL: string = 'https://online-clothing-store-34e45-default-rtdb.europe-west1.firebasedatabase.app/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  public source: Record<string, string> = {
    clothes: `${BASE_URL}clothes`,
    reviews: `${BASE_URL}reviews`,
  }
  
  constructor() { }
}
