import { Component, OnInit } from "@angular/core";
import { WeatherService } from "src/app/services/weather/weather.service";
import { WeatherResponse } from "src/app/services/weather/weather.service";

@Component({
    selector: "app-weather",
    templateUrl: "./weather.component.html",
    styleUrls: ["./weather.component.scss"]
})

export class WeatherComponent implements OnInit {
    today: string = new Date().toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
    weatherResponse: any;
    weather!: WeatherResponse;
    tempC: string = "";
    useCelsius: boolean = false;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.weatherService.getWeatherData().subscribe((response: WeatherResponse) => {
            this.weatherResponse = response as WeatherResponse;
            this.tempC = (this.weatherResponse.main.temp - 273.15).toFixed(0);
        });
    }

    toggleTemperatureFormat() {
        this.useCelsius = !this.useCelsius;
    }
    
}