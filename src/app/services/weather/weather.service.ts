import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


export interface WeatherResponse {
    weather: [{
        icon: string;
        main: string;
        description: string;
    }]
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

    getWeatherData( latValue: string, lonValue: string ): Observable<WeatherResponse> {
        const params = {
            lat: latValue,
            lon: lonValue,
            appid: this.appid
        };
        return this.httpClient.get<WeatherResponse>('https://api.openweathermap.org/data/2.5/weather', { params }).pipe(
            catchError(error => {
            console.error('An error occurred:', error);
            return throwError(() => error);
            })
        );
    }

}