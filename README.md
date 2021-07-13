# How to run

## First start

`docker build -t bozs-backup . && docker run --name bozs-backup bozs-backup`

## Consequent runs

`docker start bozs-backup -a`

## Or if you have node installed

### Install deps

`npm i`

### Start

`npm run start`
