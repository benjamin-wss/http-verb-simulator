# HTTP Error Simulator

This is a simple application built to simulate API behavior.

Currently it only supports HTTP errors to aid front end developers to test their error handling.

## How to install

Ensure you have Node.js 10.*.* and above. 

Run the following command `npm install`.

## How to use

There are 2 ways you can do this, either by just running `npm start` or if you want to use VSCode, you can see the configurations in the `.vscode` folder. You can use that to trigger debug in both development and production modes.

Head over to `http://localhost:3000/explorer/#/`.

Over there you will see this:

![Explorer](https://i.imgur.com/q5ZmiOv.png "API Explorer")

Currently the errors can be simulated for `HTTP GET`,`HTTP POST`,`HTTP PUT`,`HTTP PATCH` and `HTTP DELETE` calls.

It is simple to use, if you want to simulate error `404` when doing a `HTTP PATCH` request, simply do the following:

![Sample](https://i.imgur.com/YhDXaR1.png "HTTP Patch Sample")
