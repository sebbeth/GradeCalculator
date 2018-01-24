#!/bin/sh
#deployment script
git add *
git commit -m "Deploy to Production"
git push heroku master
