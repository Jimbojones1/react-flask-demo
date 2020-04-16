### Setup 

#### JS

0. ```npm install```

#### Python

0. Activate your virtual environment
```bash
virtualenv .env -p python3
source .env/bin/activate
```

1.  Inside of flask-api folder create a `.flaskenv` file

- `touch .flaskenv`

2.  Add the following variable to your `.flaskenv` file

```
FLASK_APP=app.py
FLASK_ENV=development
YOUTUBE_API_KEY=WhatEverYourAPIKEYisNOSTRING
```

#### modules to install for Flask

1. If you know how virtual environments work activate first


```bash
pip3 install flask
pip3 install --upgrade google-api-python-client
pip3 install --upgrade setuptools
pip3 install python-dotenv
```


### Running the app

1. to run the flask app - `npm run server` from the terminal, check 
`package.json` scripts property to see the command being run.

2. to run react app, in seperate terminal run `npm start`


