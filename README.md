# Vacctrax

This is a Vaccination Tracking application for course "COMP 231-003". This project has been developed under the guidance of professor Jake Nesovic with the motive of having a collaborative tracking system for vaccines at province or country level. The team members contributing towards this project are Benjamin Weymouth, Mohammd Bakir, Alvin Yap, Anmoldeep Singh Gill, Jarod Lavine, Asad Mahmood, Kharak Singh Kular, Shankar Sidgel and Jhase Campbell.

---

## Installation

### Express App

```sh
$ npm install
```
  
### Angular Client

```sh
$ cd angular-client
$ npm install
```

## Running the project

### Development Server

### Express App

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

### Angular Client

```sh
$ cd angular-client
```
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Building the project

### Express App

```sh
$ npm build
```

### Angular Client

```sh
$ cd angular-client
$ ng build
```

## Deploying the project

### Express App

### Angular Client

```sh
$ cd angular-client
$ ng deploy --base-href=https://vacctrax-project-organization.github.io/Vacctrax/
```

## Seeding Database

Navigate to _seedData

```sh
$ cd _seedData
$ set NODE_ENV=development&&node index.js
```

This seeds the database defined in the db string defined in "config/env/development.js"
