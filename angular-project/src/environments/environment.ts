// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tmdb: {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '45304b8ce1c9b6d71c03c97b7225b232'
  },
  firebase: {
    apiKey: "AIzaSyB7i_w3ju-zvnYlzsUSnpaxAWdmuAgJV84",
    authDomain: "custom-movie-database.firebaseapp.com",
    databaseURL: "https://custom-movie-database.firebaseio.com",
    projectId: "custom-movie-database",
    storageBucket: "custom-movie-database.appspot.com",
    messagingSenderId: "173168533901",
    appId: "1:173168533901:web:3949b2b514942a2a37ddc4",
    measurementId: "G-LE31M903E0"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
