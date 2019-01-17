# Phonewords Generator Full Stack

Generator of Phonewords, Full Stack. 

## Description

This application is a converter from phone numbers to [phonewords](https://en.wikipedia.org/wiki/Phoneword). You can input a phone and it will give you a list of all the possible phonewords for that specific phone number.

The frontend has validation, checking that the phone number are only integers (2-9) digits and/or spaces, is not empty and maximum length 6, and shows all the corresponding phone words in a list that also checks if there are no words matching or something went wrong with the request.

The backend is a documented, tested API designed with Python and Flask that exposes an endpoint that given a number returns all the possible phonewords for that number, it checks for valid numbers and possible errors.

It is all bundled using Docker.

To run, simply execute:

```
docker-compose up
```

The **Front End** will be available at `localhost:4200`, and the **Backend** API (default is the documentation page), at `localhost:5000`

## Frontend

The Frontend uses:

- React 16.x
- Typescript
- Parcel Bundler
- Kiwi.com Orbit Components
- Cypress
- Styled Components (Responsive layout)
- Formik

To start fiddling with it, just run in `/frontend` the Docker Image

```
docker build . -t phoneword_frontend
docker run -d -p 4200:80 phoneword_frontend
```

the application will be available at port `4200` on `localhost`.
Alternatively, you can do it without docker:

```
npm install
```

and then 

```
npm run dev
``` 

to build run 
```
npm run build
```

`TODO:`

- Testing with Cypress
- Extra features (?¿)

## Backend

The Backend uses:

- Python 3.5
- Flask, Flask RESTFul
- Swagger for documentation
- PyTest

To build and run a `Docker image` is implemented from a Dockerfile:

```
docker build . -t phoneword_backend
docker run -d -p 5000:5000 phoneword_backend
```

Your API is running at `localhost:5000`. You can access it via `/api/v1/phonewords/` or go to `/docs` for documentation

Without docker, to build navigate to `/backend` then install the requirements

```
pip install -r requirements.txt
```

and run the API by running

```
python app.py
```

`TODO:`
- Testing with PyTest