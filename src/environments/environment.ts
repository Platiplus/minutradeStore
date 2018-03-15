// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB0057mOTZvcUZFrouY8V-SQy0Ga9-H-Xk",
    authDomain: "minutradestore.firebaseapp.com",
    databaseURL: "https://minutradestore.firebaseio.com",
    projectId: "minutradestore",
    storageBucket: "minutradestore.appspot.com",
    messagingSenderId: "668089166085"
  }
};
