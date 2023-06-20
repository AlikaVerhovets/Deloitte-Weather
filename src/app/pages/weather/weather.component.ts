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
    weatherResponse!: WeatherResponse;
    weather!: WeatherResponse;
    tempC: string = "";
    tempF: string = "";
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
                this.tempF = ((this.weatherResponse.main.temp - 273.15) * 9 / 5 + 32).toFixed(0);
            });
        } else {
            console.error(`No coordinates for city ${city}`);
        }
    }

    toggleTemperatureFormat() {
        this.useCelsius = !this.useCelsius;
    }
    
}