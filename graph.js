class Graph{
    constructor()
    {
        this.adjacencyList = {}
    }

    //ADD VERTEX
    addVertex(vertex)
    {
        if(!this.adjacencyList[vertex]){

            this.adjacencyList[vertex] = []
        }
    }

    //ADD EDGE

    addEdge(v1,v2)
    {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    //REMOVE EDGE

    removeEdge(v1,v2)
    {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v!=v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v!=v1)
    }

    //REMOVE VERTEX

    removeVertex(vertex)
    {
        while(this.adjacencyList[vertex].length)
        {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    //DFS - RECURSIVE

    depthFirstSearch(start)
    {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList
        function dfs(vertex)
        {
            if(!vertex)
            {
                return null
            }
            visited[vertex] = true
            result.push(vertex)

            adjacencyList[vertex].forEach(element => {
                if(!visited[element]){
                    return dfs(element)
                }
            });
        } 
        dfs(start)
        console.log(result) 
    }

    //DFS - ITERATIVE

    depthFirstIterative(start)
    {
        const stack = [start]
        const visited = {}
        const result = []
        let current;

        visited[start] = true

        while(stack.length)
        {
            current = stack.pop();
            result.push(current)

            this.adjacencyList[current].forEach(element => {
                if(!visited[element]){
                    visited[element] = true
                    stack.push(element)
                }
            })
        }
        console.log(result) 
    }

    //BFS - ITERATIVE

    breadthFirst(start)
    {
        const queue = [start]
        const visited = {}
        const result = []
        visited[start] = true
        let current;

        while(queue.length){
            current = queue.shift()
            result.push(current)

            this.adjacencyList[current].forEach(element =>{
                if(!visited[element])
                {
                    visited[element] = true
                    queue.push(element)
                }
            })
        }
        console.log(result)
    }
}

let g = new Graph();
// g.addVertex("Tokyo") 
// g.addVertex("Dallas")
// g.addVertex("Aspen")

// console.log(g)

// g.addEdge("Tokyo","Aspen")
// console.log(g)

// g.removeEdge("Tokyo","Aspen")
// console.log(g)

// g.addVertex("Los Angeles")
// g.addVertex("Hong Kong")
// g.addEdge("Dallas","Tokyo")
// g.addEdge("Dallas","Aspen")
// g.addEdge("Hong Kong","Tokyo")
// g.addEdge("Hong Kong","Dallas")
// g.addEdge("Los Angeles","Hong Kong")
// g.addEdge("Los Angeles","Aspen")

// console.log(g)

// g.removeVertex("Hong Kong")

// console.log(g)

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")  
g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F") 
g.addEdge("E","F")

console.log(g)

g.depthFirstSearch("A")

g.depthFirstIterative("A")

g.breadthFirst("A")