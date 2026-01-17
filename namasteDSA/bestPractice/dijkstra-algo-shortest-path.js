function dijkstraAlgo(graph, src) {
    let n = graph.length;
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    let pq = new MinQueue();
    pq.push([src, 0]);

    while (pq.size()) {
        let [currNode, currDist] = pq.pop();

        // stale value check
        if (currDist > dist[currNode]) continue;

        for (let [neighbor, neighborWeight] of graph[currNode]) {
            let newDist = currDist + neighborWeight;

            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                pq.push([neighbor, newDist]);
            }
        }
    }

    return dist; //  [0, 2, 3, 7, 6, 4, 8]
}



// console.log(dijkstraAlgo([
//     [[1, 2], [2, 4]],
//     [[3, 7], [2, 1]],
//     [[4, 3], [5, 1]],
//     [[6, 1]],
//     [[3, 2], [6, 5]],
//     [[3, 3], [6, 8]],
//     []], 0))

    


