var graph = {
	'a' : ['b'],
	'b' : ['c', 'd'],
	'c' : ['d', 'e'],
	'd' : ['c', 'f'],
	'e' : ['f'],
	'f' : ['e']
};

function bfs(g, s){
	console.log('start from: ' + s);
	var level = {s : 0};
	var parent = { s: null };
	var i = 1;
	var frontier = []; frontier.push(s);
	console.log(frontier);
	while(frontier.length) {
		var next = [];
		var u;
		while (u = frontier.shift()) {
			console.log('in a node: ' + u + ' with nodes: ' + g[u]);
			for(var k = 0; k < g[u].length; k++) {
				var v = g[u][k];
				console.log('go to ' + v);
				if(!(v in level)) {
					level[v] = i;
					parent[v] = u;
					next.push(v);
				}
			}
		}
		frontier = next;
		i++;
	}
	return level;
}

var res = bfs(graph, 'a');
console.log(res);
