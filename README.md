# Phonewords Generator Full Stack

Generator of Phonewords, Full Stack. To run, simply execute:

```
docker-compose up
```

## Frontend

The Frontend uses:

- React 16.x
- Typescript
- Parcel Bundler
- Kiwi.com Orbit Components
- Cypress
- Styled Components (Responsive layout)
- Formik

To start fiddling with it, just run in `/frontend`

```
npm install
```

and then 

```
npm run dev
``` 
it will open the application at port `4200` on `localhost`

to build run 
```
npm run build
```

`TODO:`

- Testing with Cypress
- Backend Integration
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