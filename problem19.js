function busNumsToLocation(routes, source, target) {
  if (source === target) return 0;

  const stopToRoutesMap = {};
  for (let i = 0; i < routes.length; i++) {
    for (const stop of routes[i]) {
      if (!stopToRoutesMap[stop]) {
        stopToRoutesMap[stop] = [];
      }
      stopToRoutesMap[stop].push(i);
    }
  }

  const visitedRoutes = new Set();
  const visitedStops = new Set();
  const queue = [source];
  let buses = 0;

  while (queue.length > 0) {
    const size = queue.length;
    buses++;

    for (let i = 0; i < size; i++) {
      const currentStop = queue.shift();

      if (visitedStops.has(currentStop)) continue;
      visitedStops.add(currentStop);

      const routesForCurrentStop = stopToRoutesMap[currentStop] || [];

      for (const route of routesForCurrentStop) {
        if (visitedRoutes.has(route)) continue;
        visitedRoutes.add(route);

        for (const nextStop of routes[route]) {
          if (nextStop === target) return buses;
          queue.push(nextStop);
        }
      }
    }
  }

  return -1;
}



// Testing 1, 2
console.log(busNumsToLocation([[1, 2, 7], [3, 6, 7]], 1, 6)); // Output: 2
console.log(busNumsToLocation([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12)); // Output: -1
