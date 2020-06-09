'use strict';
/**
 * Arquivo: sort.js
 * Author: Vanderci Curvelo Junior
 * Description: implementation of some sort algorithms'
 * Data: 11/05/2020
 *
 */
// the recursive way
// first implementation
// const bubbleSort = (array_input) => {
//   const asize = array_input.length;
//   if (asize > 2) {
//     let found = false;
//     for (let i = 0; i < asize; i++) {
//       if (array_input[i] > array_input[i+1]) {
//         found = true;
//         let auxiliar_data = array_input[i];
//         array_input[i] = array_input[i+1];
//         array_input[i+1] = auxiliar_data;
//       }
//     }
//     if (!found) {
//       return true;
//     }
//     bubbleSort(array_input);
//   }
// };
//  the iterative way

var swap = function swap(swap_array, i, j) {
  var auxiliar = swap_array[i];
  swap_array[i] = swap_array[j];
  swap_array[j] = auxiliar;
};

var bubbleSort = function bubbleSort(array_input, order) {
  var asize = array_input.length;

  if (asize > 2) {
    var found = true;

    while (found) {
      found = false;

      for (var i = 0; i < asize; i++) {
        var a = order === 'desc' ? i + 1 : i,
            b = order === 'desc' ? i : i + 1;
        var shouldSwap = array_input[a] > array_input[b];

        if (shouldSwap) {
          found = true;
          swap(array_input, a, b);
        }
      }
    }
  }
};

module.exports = {
  bubbleSort: bubbleSort
};