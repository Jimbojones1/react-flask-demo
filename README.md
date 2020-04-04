### Setup 

#### JS

0. ```npm install```

#### Python

1.  Inside of flask-api folder create a `.flaskenv` file

- `touch .flaskenv`

2.  Add the following variable to your `.flaskenv` file

```
FLASK_APP=app.py
FLASK_ENV=development
YOUTUBE_API_KEY=WhatEverYourAPIKEYisNOSTRING
```

#### modules to install

1. If you know how virtual environments work activate first


```bash
pip3 install flask
pip3 install --upgrade google-api-python-client
pip3 install --upgrade setuptools
```


