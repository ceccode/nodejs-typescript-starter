# NodeJS Typescript quick starter

> This repository is a starter kit for working with NodeJS and Typescript.

[![Build Status](https://travis-ci.org/ceccode/nodejs-typescript-starter.svg?branch=master)](https://travis-ci.org/ceccode/nodejs-typescript-starter)

## Getting Started

Run the following command to download the repository and unpack it into nodejs-typescript-starter/.

```bash
$ curl -L https://github.com/ceccode/nodejs-typescript-starter/archive/master.tar.gz | tar -xz
```

or clone it (the easiest way to get started)

```bash
$ git clone https://github.com/ceccode/nodejs-typescript-starter.git myproject
```

## Prerequisites

- Install [Node.js](https://nodejs.org/)
- Install [VS Code](https://code.visualstudio.com/)


## Installing

The following command will install all Node.js dependencies

```bash
$ npm install
```

## Building

```bash
$ npm run build
```

## Development

```bash
$ npm run dev
```

## Run 

```bash
$ npm run start
```

## Running the tests

```bash
$ npm test
```


## Project Structure


| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **.vscode**/                       | VS Code specific settings                                    |
| **dist**/                          | output from your TypeScript build.                           |
| **node_modules**/                  | npm dependencies.                                            |
| **src**/                           | source code that will be compiled to the dist dir            |
| **src**/index.ts                   | Entry point to your ts app                                   |
| **src**/App.ts                     | Sample ts class                                              |
| **src**/App.spec.ts                | Sample test case                                             |
| .env.example                       | Your API keys, tokens, passwords and database URI.           |
| .travis.yml                        | Travis CI build                                              |
| tslint.json                        | Config settings for TSLint code style checking               |
| tsconfig.json                      | Config settings for compiling tests written in TypeScript    |
| package.json                       | NPM dependencies.                                            |
| package-lock.lock                  | Contains exact versions of NPM dependencies in package.json. |


## Docker

//todo

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* https://github.com/Microsoft/TypeScript-Node-Starter
* https://github.com/RisingStack/node-typescript-starter
