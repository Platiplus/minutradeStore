# Minutrade Store

This is a POC of a console catalog for Minutrade.

The stack of technologies on this application uses:

- Angular 5
- NodeJS
- AngularFire2(FireStore)
- Angular Universal (SSR)
- SASS (Already Compiled)

This project was initially generated with [Angular CLI] 1.6.7.
Worked with Browser-Side-Rendering at early versions, but now the code run as-is with Server-Side-Rendering.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Server-Side-Rendering

To get a glimpse of SSR (using Angular Universal), go to https://minutradestore.firebaseapp.com/ and see the deployed version there.

## Browser-Side-Rendering

To see the BSR version, go to https://platiplus.github.io/ and see the already built version, see early commits of this repository to see its source-code.

## AuthGuard on Routes

The catalog of the application is guarded with AuthGuard authentication by SSO Providers. The specific products on the other hand, are not protected, being able to access with the full URL, this was a design choice since one of the specifications of the project was being able to share products on social-media, and it doesn't make sense to protect those links if we want people to access them with the provided links.