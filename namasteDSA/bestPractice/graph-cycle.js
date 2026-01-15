function hasCycle(edges) {
  let graph = {};
  for (let [x, y] of edges) {
    if (!graph[x]) graph[x] = [];
    if (!graph[y]) graph[y] = [];
    graph[x].push(y);
    graph[y].push(x);
  }
  let visited = new Set();
  function dfs(curr, parent) {
    visited.add(curr);
    for (let i of graph[curr]) {
      if (!visited.has(i)) {
        return dfs(i, curr);
      } else if (i !== parent) {
        return true;
      }
    }
    return false;
  }
  return dfs(0, -1);
}

// console.log(hasCycle([[0,1],[1,2]])) // false
// console.log(hasCycle([[0,1],[1,2],[2,0]])) // true
