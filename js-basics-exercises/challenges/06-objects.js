/* 
## Objects #6

1. create car object
2. add make, model, year, colors (array),
   hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods

*/

// const car = {
//   make: 'Dodge',
//   model: 'Challenger',
//   year: 1970,
//   colors: ['black', 'red'],
//   hybrid: false,
//   drive: function () {
//     console.log('driving...');
//   },
//   stop() {
//     console.log('stopped!!!');
//   },
// };

// console.log(car.make);
// console.log(car.colors[0]);
// car.drive();
// car.stop();

const car = {
  make: "BYD",
  model: "U8",
  year: 2025,
  colors: ["blue", "tan"],
  hybrid: false,
  drive(){
    return "I am driving the car"
  },
  stop(){
    return "I am stopping"
  },
}

console.log(car.make);
console.log(car.colors[0]);
console.log(car.drive());
console.log(car.stop());
