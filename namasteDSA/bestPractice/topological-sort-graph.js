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

// Kahn's Algorithm
function topologicalSort(n, graph) {
  let indegree = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let node of graph[i]) {
      indegree[node]++;
    }
  }

  let q = [];
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }

  while (q.length) {
    let curr = q.shift();
    ans.push(curr);
    for (let i of graph[curr]) {
      indegree[i]--;
      if (indegree[i] == 0) {
        q.push(i);
      }
    }
  }

  return ans;
}

// console.log(topologicalSort(6, [[], [], [3], [1], [0, 1], [0, 2]])); // [ 4, 5, 0, 2, 3, 1 ]

// create an indegree array
// create a queue and push all indegree elements that have 0 indegree
// shift one element from the graph and check for its neighbours that does it have zero indree or else -- it
// keep doing it
