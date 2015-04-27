#!/usr/bin/env node

'use strict';

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97],
    target = Number(process.argv[2]) || 67;

function average(mn, mx) {
  return Math.floor((mn + mx) / 2);
}

function find(stack, needle, min, max) {
  var direction = '',
    guess = average(min, max);

  if (min >= max) {
    console.log("Can't find that needle in this stack!");
    process.exit();
  }

  if (stack[guess] == needle) {
    console.log('Great!', stack[guess], 'equals', needle);
  } else {
    if (stack[guess] < needle) {
      min = guess + 1;
      direction = 'low';
    } else if (stack[guess] > needle) {
      max = guess - 1;
      direction = 'high';
    }
    console.log('%d is too %s!', stack[guess], direction);
    find(stack, needle, min, max);
  }
}

find(primes, target, 0, primes.length - 1);
