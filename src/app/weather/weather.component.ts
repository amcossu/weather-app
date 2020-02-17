import { Component, OnInit } from '@angular/core';
import { ApixuService } from "../apixu.service";
import { WeatherRequest } from "../models/weatherRequest";
import { WeatherResponse } from '../models/weatherResponse';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  public request: WeatherRequest;
  public response: WeatherResponse;

  constructor(private apixuService: ApixuService) { }

  ngOnInit() {
    this.request = new WeatherRequest();
    this.response = new WeatherResponse();
  }

  sendToAPIXU() {
    this.apixuService.getWeather(this.request.town).subscribe(data => {
      this.response.observation_time = data['current'].observation_time;
      this.response.temperature = data['current'].temperature;
      this.response.feelslike = data['current'].feelslike;
      this.response.name = data['location'].name;
      this.response.country = data['location'].country;
      console.log(data);
    });
  }

}
