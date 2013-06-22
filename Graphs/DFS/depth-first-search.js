var graph = {
	'a' : ['b'],
	'b' : ['c', 'd'],
	'c' : ['d', 'e'],
	'd' : ['c', 'f'],
	'e' : ['f'],
	'f' : ['e'],
	't' : ['z', 'h'],
	'z' : ['t', 'h'],
	'h' : ['z', 't']
};

function dfs_visit(g, s, parent, entry, time) {
	for(var k = 0; k < g[s].length; k++) {
		var v = g[s][k];
		if(!(v in parent)) {
			parent[v] = s;
			entry[v] = time++;
			dfs_visit(g, v, parent, entry, time);
		}
	}
	return time;
}

function dfs(g){
	var parent = {};
	var entry = {};
	for(var s in g) {
		if(g.hasOwnProperty(s)) {
			var time = 1;
			if(!(s in parent)) {
				parent[s] = null;
				entry[s] = time++;
				time = dfs_visit(g, s, parent, entry, time);
			}
		}
	}
	return {
		parent: parent,
		entry: entry
	}
}


var res = dfs(graph);
//console.log(res);

//1,2,3
console.log( 100 % 8 );
