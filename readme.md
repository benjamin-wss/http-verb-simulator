# HTTP Error Simulator

This is a simple application built to simulate API behavior for a Loopback API server.

Currently it only supports HTTP errors to aid front end developers to test their error handling.

## How to install

Ensure you have Node.js 10.*.* and above. 

Run the following command `npm install`.

## How to use

There are 2 ways you can do this:

1. Run `npm start` will run the APIs in development mode to simulate development mode HTTP response behavior.
1. Run `npm run start:production` will run the APIs in development mode to simulate production mode HTTP response behavior.

If you want to use VSCode, you can see the configurations in the `.vscode` folder. You can use that to trigger debug in both development and production modes.

Head over to `http://localhost:3001/explorer/#/`.

Over there you will see this:

![Explorer](https://i.imgur.com/q5ZmiOv.png "API Explorer")

Currently the errors can be simulated for `HTTP GET`,`HTTP POST`,`HTTP PUT`,`HTTP PATCH` and `HTTP DELETE` calls.

It is simple to use, if you want to simulate error `404` when doing a `HTTP PATCH` request, simply do the following:

![Sample](https://i.imgur.com/YhDXaR1.png "HTTP Patch Sample")
