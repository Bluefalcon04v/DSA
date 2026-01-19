function bellmanFord(edges, V, src) {
  let dist = new Array(V).fill(Infinity);
  dist[src] = 0;

  for (let i = 0; i < V - 1; i++) {
    let updated = false;
    for (let [u, v, w] of edges) {
      if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;
      updated = true;
    }
    if (!updated) break;
  }
  for (let [u, v, w] of edges) {
    if (dist[u] + w < dist[v]) return null; // negative weight cycle detected
  }
  return dist;
}

let edges = [
  [0, 1, 6],
  [0, 2, 5],
  [0, 3, 5],
  [1, 4, -1],
  [2, 1, -2],
  [2, 4, 1],
  [3, 2, -2],
  [3, 5, -1],
  [4, 6, 3],
  [5, 6, 3],
];

let NegEdges = [
  [0, 1, 4],
  [1, 2, -1],
  [2, 3, -1],
  [3, 1, 0],
];

// console.log(bellmanFord(edges, 7, 0)); // [0, 1, 3, 5, 0, 4, 3];
// console.log(bellmanFord(NegEdges, 4, 0)); // null
