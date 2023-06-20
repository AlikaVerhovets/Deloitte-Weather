import { Component, OnInit, ViewChild } from "@angular/core";
import { WeatherService } from "src/app/services/weather/weather.service";
import { WeatherResponse } from "src/app/services/weather/weather.service";
import { CitiesMapService } from "src/app/services/cities/cities.service";

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
    cities: string[] = [];

    constructor(private weatherService: WeatherService, private citiesMap: CitiesMapService ) { }

    ngOnInit() {
        this.cities = Array.from(this.citiesMap.cityMap.keys());
        this.getWeatherData("Cherkasy");
    }

    getWeatherData(city: string) {
        const coordinates = this.citiesMap.cityMap.get(city);
        if (coordinates) {
            const { lat, lon } = coordinates;
            this.weatherService.getWeatherData(lat, lon).subscribe((response: WeatherResponse) => {
                this.weatherResponse = response as WeatherResponse;
                this.tempC = (this.weatherResponse.main.temp - 273.15).toFixed(0);
            });
        }
    }

    toggleTemperatureFormat() {
        this.useCelsius = !this.useCelsius;
    }
    
}