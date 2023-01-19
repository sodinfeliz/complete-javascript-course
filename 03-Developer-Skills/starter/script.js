// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]}°C in ${i + 1} days `);
  }
};

printForecast([17, 21, 23]);
