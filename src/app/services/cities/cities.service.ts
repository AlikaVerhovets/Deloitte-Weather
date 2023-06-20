import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CitiesMapService {
  cityMap: Map<string, { lat: string, lon: string }> = new Map([
    ["Cherkasy", { lat: "49.43", lon: "32.07" }],
    ["Chernihiv", { lat: "51.49", lon: "31.29" }],
    ["Chernivtsi", { lat: "48.29", lon: "25.94" }],
    ["Dnipro", { lat: "48.45", lon: "34.98" }],
    ["Ivano-Frankivsk", { lat: "48.92", lon: "24.71" }],
    ["Kharkiv", { lat: "49.99", lon: "36.23" }],
    ["Khmelnytskyi", { lat: "49.42", lon: "26.99" }],
    ["Kropyvnytskyi", { lat: "48.51", lon: "32.26" }],
    ["Kyiv", { lat: "50.45", lon: "30.52" }],
    ["Lutsk", { lat: "50.75", lon: "25.32" }],
    ["Lviv", { lat: "49.84", lon: "24.03" }],
    ["Odesa", { lat: "46.48", lon: "30.73" }],
    ["Poltava", { lat: "49.59", lon: "34.55" }],
    ["Rivne", { lat: "50.62", lon: "26.26" }],
    ["Sumy", { lat: "50.91", lon: "34.81" }],
    ["Ternopil", { lat: "49.55", lon: "25.59" }],
    ["Uzhhorod", { lat: "48.62", lon: "22.29" }],
    ["Vinnytsia", { lat: "49.23", lon: "28.48" }],
    ["Zaporizhzhia", { lat: "47.84", lon: "35.14" }],
    ["Zhytomyr", { lat: "50.25", lon: "28.66" }],
  ]);
}

  