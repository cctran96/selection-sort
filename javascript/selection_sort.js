const {performance} = require("perf_hooks")

function selectionSort(arr) {
  // 0.0004917839765548706s
  let sorted = []
  while (arr.length > 0) {
    let min = Math.min(...arr)
    let index = arr.indexOf(min)
    sorted.push(min)
    arr.splice(index, 1)
  }
  return sorted

  // 0.0059714454412460325s
  // let n = arr.length
  // for(let i = 0; i < n; i++) {
  //     let min = i
  //     for(let j = i+1; j < n; j++){
  //         if(arr[j] < arr[min]) {
  //             min = j
  //         }
  //      }
  //      if (min != i) {
  //          let tmp = arr[i]
  //          arr[i] = arr[min]
  //          arr[min] = tmp
  //     }
  // }
  // return arr
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
  let t0 = performance.now()
  for (let i = 0; i < 1000; i++) {
    selectionSort([3,2,1])
    selectionSort(longInput)
  }
  let t1 = performance.now()
  console.log((t1-t0)/2000)
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
