// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'weather-by-api-ninjas.p.rapidapi.com',
  XRapidAPIKeyHeaderKeyName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderKeyValue: 'c9dc98dc3bmsh5dd8e256b0bf7c0p171557jsn5b5059d15127'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
