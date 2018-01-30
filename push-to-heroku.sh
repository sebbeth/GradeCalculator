#!/bin/sh
#deployment script
cd /Users/seb/Projects/GradeCalculator/php-host-test/production/web
mv index.html index.php
git add *
git commit -m "Deploy to Production"
git push heroku master
