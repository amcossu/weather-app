import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=3d44516bbfdf7be212a11ecc50eaa933&query=' + location
    );
}
}