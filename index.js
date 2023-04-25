function findMinimumPlanes(array) {
  const aryLength = array.length;
  let currentFuel = array[0];
  let planesNeeded = 0;
  
  for (let i = 1; i < aryLength; i++) {
    currentFuel--;
    
    if (currentFuel < 0) {
      return -1; // not enough fuel to reach next airport means current fuel value come to negative
    }
    
    if (array[i] > currentFuel) {
      currentFuel = array[i];
      planesNeeded++;
    }
  }
  
  return planesNeeded + 1; // add one for the initial plane
}


/**
 
 * Approach- Greedy Algorithm

 * The findMinimumPlanes function takes an array of non-negative integers as input. Each integer represents the amount of fuel required to travel from one airport to the next, in order.
 * The function starts by initializing the currentFuel variable to the first element of the input array. It also initializes planesNeeded to 0, which will keep track of how many planes are needed to complete the journey.
 * Then, the function iterates over the input array starting from the second element (index 1). For each element, the function subtracts 1 from currentFuel to account for the fuel used to travel from the previous airport.
 * If currentFuel becomes negative at any point during the iteration, it means that there is not enough fuel to reach the next airport, and the function returns -1.
 * If the fuel required to reach the next airport is greater than the remaining currentFuel, the function sets currentFuel to the fuel required to reach the next airport, and increments planesNeeded to account for the need for an additional plane.
 * Finally, after iterating over the entire input array, the function returns planesNeeded + 1 to account for the initial plane that was used to start the journey.
 * The overall approach of the function is to keep track of the amount of fuel remaining at each airport and use additional planes as needed to ensure that there is enough fuel to reach the next airport. If there is not enough fuel, the function returns -1 to indicate that the journey cannot be completed.
 
 */