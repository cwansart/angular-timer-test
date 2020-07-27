# AngularTimerTest

This is a test to check if the end user gets informed about the timer.

Initially run `npm install` to install the required dependencies.

To set the time check [TimerService](src/app/timer.service.ts#L9) and set the property `triggerTime` accordingly.

Start the service either by running a production build and a local server: `ng build && python3 -m http.server 8080 --bind 0.0.0.0` or by running the dev environment: `ng serve`. 
