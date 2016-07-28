'use strict';

var ParkingLot = function (spaces) {

  this.numSpot = spaces;
  this.daSpaces = Array(spaces).fill('');
};


ParkingLot.prototype.vacancies = function () {

  return this.numSpot;
};

ParkingLot.prototype.park = function(plate) {

  this.numSpot--;
  insertFirstEmpty(this.daSpaces, plate);
};

ParkingLot.prototype.leave = function(plate) {

  this.numSpot++;
  findNNull(this.daSpaces, plate);
};

ParkingLot.prototype.summary = function() {

  return this.daSpaces.map(function(cVal, index, array) {

    var reState = [];
    reState.push('Position ' + (index + 1) + ((array[index]) ? ': ' + array[index] : ': (empty)'));
    return reState.join();
  });
};

ParkingLot.prototype.compact = function () {

  var compact = this.daSpaces;

  for (var i = 0; i < compact.length; i++) {

    var lastVal = compact.pop();
    if (lastVal) insertFirstEmpty(compact, lastVal);
  }

  for (i = 0; i <  this.numSpot - this.compact.length; i++) {

    compact.push('');
  }

  return compact;
};

function findNNull(array, val) {

  for (var i = 0; i < array.length; i++) {

    if (array[i] === val) { array[i] = ''; break; }
  }
}

function insertFirstEmpty(array, val) {

  for (var i = 0; i < array.length; i++) {

    if (!array[i]) { array[i] = val; break; }
  }
}

module.exports = ParkingLot;
