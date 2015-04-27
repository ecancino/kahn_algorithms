#!/usr/bin/env node

'use strict';

var inquirer = require('inquirer'),
    min = 1,
    max = 100,
    toguess = Math.round(Math.random() * 100).toString();

var questions = [
  {
    type: "input",
    name: "guess",
    message: function() {
      return "Care to guess a number from " + min + " to " + max + ":";
    },
    validate: function( value ) {
      return !isNaN(value);
    }
  }
];

function guess() {
  inquirer.prompt(questions, function(answers) {
    if (answers.guess === toguess) {
      console.log('Correct!');
      process.exit();
    } else {
      if (answers.guess < toguess) {
        min = answers.guess;
        console.log('Too low!');
      } else if (answers.guess > toguess) {
        max = answers.guess;
        console.log('Too high!');
      }
      guess();
    }
  });
}

guess();
