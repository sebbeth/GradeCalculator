#!/bin/sh
#deployment script
ng build --prod --base-href /GradeCalculator/
gh-pages -d dist