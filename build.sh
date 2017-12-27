#!/usr/bin/env bash

if [ -d "./static" ]
then
    rm -rf static
fi

if [ -d "./images" ]
then
    rm -rf images
fi

mv ./build/* .

if [ -d "./build" ]
then
    rm -rf build
fi

today=`date '+%Y_%m_%d__%H_%M_%S'`;
git add .
git commit -am "Deployed at $today"
git push
