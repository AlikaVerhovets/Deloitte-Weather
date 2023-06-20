import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

export interface WeatherResponse {
    weather: {
        main: string;
        description: string;
    }
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        pressure: number;
    }
    wind: {
        speed: number;
    }

}

@Injectable({ providedIn: 'root' })
export class WeatherService {

    appid: string = "ccb42d6e60a8213a14a85624272d577d";

    constructor(private httpClient: HttpClient) { }

    getWeatherData(): Observable<WeatherResponse> {
        const params = {
            lat: '44.34',
            lon: '10.99',
            appid: this.appid
        };
        return this.httpClient.get<WeatherResponse>('https://api.openweathermap.org/data/2.5/weather', { params });
    }

}