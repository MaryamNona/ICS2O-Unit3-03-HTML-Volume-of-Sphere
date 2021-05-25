// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Maryam Nona
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function addAgeClicked () {
  // this function does area 

  // input
  const length = parseFloat(document.getElementById("radius-of-sphere").value)

  // process
  const volume = (4 / 3) * 3.14 * radius * radius * radius

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume + " mm³"
}
