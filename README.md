# Ionic Boilerplate [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/)

_Currently this project is using the latest versions of all: Ionic and Angular 4_

## Setup

Requirements to use this project:

##### Node.js (https://nodejs.org/)

##### npm (Node Package Manager, it comes with node.js installation)
In case you're not with the latest version of npm:
```sh
sudo npm install npm -g
```

##### Cordova & Ionic Cli
To install both of them on your system just launch this command:
```sh
sudo npm install cordova ionic -g
```

## Install NPM Dependencies
Once you clone this repository, run this command on your terminal to install all needed dependencies:
```sh
npm install
```

## Install cordova plugin Dependencies
Run this command on your terminal to add a platform and install all needed puglins:

Android:
```sh
ionic cordova platform add android
ionic cordova run android
```

iOS:
```sh
ionic cordova platform add ios
ionic cordova run ios
```

## Environment Variables

Create a default file `src/environments/environment.ts` which will be used for your **PRODUCTION** environment:
```typescript
export const ENV = {
  mode: 'Production'
}
```

Create a default file `src/environments/environment.dev.ts` which will be used for your development environment:
```typescript
export const ENV = {
  mode: 'Development'
}
```

You can then import your environment variables anywhere!
```typescript
import { ENV } from '@app/env'
```

## Launching the App

```sh
IONIC_ENV=prod ionic serve # to serve our project with prod env
IONIC_ENV=prod ionic cordova build android --prod # to build our android project with prod env 
ionic serve # to serve our project with dev env
```
