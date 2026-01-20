function floydWarShall(V, edges) {
  const dist = Array.from({ length: V }, (_, i) =>
    Array.from({ length: V }, (_, j) => (i === j ? 0 : Infinity))
  );

  for (let [i, j, w] of edges) {
    dist[i][j] = w;
  }
  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        dist[i][j] = Math.min(dist[i][k] + dist[k][j], dist[i][j]);
      }
    }
  }

  return dist;
}

const edges = [
  [0, 1, 2],
  [1, 0, 7],
  [1, 2, 3],
  [2, 1, 8],
  [2, 3, 2],
  [3, 0, 1],
  [3, 1, 5],
];

// console.log(floydWarShall(4, edges));
// [
//   [0, 2, 5, 7],
//   [6, 0, 3, 5],
//   [3, 5, 0, 2],
//   [1, 3, 6, 0],
// ];
