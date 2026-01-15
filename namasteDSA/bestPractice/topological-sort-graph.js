function topologicalSort(n, adj) {
  let ans = [];
  let visited = new Set();
  function dfs(curr) {
    visited.add(curr);
    for (let i of adj[curr]) {
      if (!visited.has(i)) {
        dfs(i);
      }
    }
    ans.push(curr);
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
    }
  }
  console.log(res);
  return ans.reverse();
}

// console.log(topologicalSort(6, [[], [], [3], [1], [0, 1], [0, 2]])); //[ 5, 4, 2, 3, 1, 0 ]
