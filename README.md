# Create React Express App

![alt tag](./client/src/components/Nav/img/notey_logo.png)

## About Notey

Welcome to Notey!
This is a digital bulletin board that allows you to take a "notey" and make a list of all the notes that you save. There is also a delete button if you want to erase any of the notes.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
``

After both installations complete, run the following command in your terminal:

```
yarn start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

After confirming that you have an up to date git repository and a Heroku app created, complete the following:

1. Build the React app for production by running the following command:

```
yarn build
```

2. Add and commit all changes to git

3. Push to Heroku

If all previous steps were followed correctly, your application should be deployed to Heroku!
