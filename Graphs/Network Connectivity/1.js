/*
Social network connectivity. Given a social network containing N members and a log file containing M timestamps at which 
times pairs of members formed friendships, design an algorithm to determine the earliest time at which all members 
are connected (i.e., every member is a friend of a friend of a friend ... of a friend). Assume that the log file is 
sorted by timestamp and that friendship is an equivalence relation. The running time of your algorithm should be MlogN or 
better and use extra space proportional to N.
*/

var log = 
"Mon Aug 20 2013 21:10:04 GMT-0700 (MST) A B\n" +
"Mon Aug 21 2013 21:10:04 GMT-0700 (MST) B C\n" + 
"Mon Aug 22 2013 21:10:04 GMT-0700 (MST) E F\n" +
"Mon Aug 23 2013 21:10:04 GMT-0700 (MST) E G\n" +
"Mon Aug 24 2013 21:10:04 GMT-0700 (MST) H L\n" +
"Mon Aug 25 2013 21:10:04 GMT-0700 (MST) H K\n" +
"Mon Aug 26 2013 21:10:04 GMT-0700 (MST) A H\n" +
"Mon Aug 27 2013 21:10:04 GMT-0700 (MST) E A";

var Graph = {};
var earliestTimes = {};
var lastMember = null;

var lines = log.split("\n");
for(var i = 0; i < lines.length; i++) {
	var splits = lines[i].split(' ');
	var m2 = splits.pop();
	var m1 = splits.pop();
	var dt = new Date(splits.join(' '));
	console.log( 'm1: ' + m1 + ' m2: ' + m2 + ' date: ' + dt);

	if(Graph[m1] === undefined) {
		Graph[m1] = [];
	}
	Graph[m1].push(m2);
	if(Graph[m2] === undefined) {
		Graph[m2] = [];
	}
	Graph[m2].push(m1);

	if(earliestTimes[m1] === undefined) {
		//this is the first time
		earliestTimes[m1] = dt;
	}
	else {
		if(earliestTimes[m1] > dt) {
			earliestTimes[m1] = dt;
		}
	}
	if(earliestTimes[m2] === undefined) {
		//this is the first time
		earliestTimes[m2] = dt;
	}
	else {
		if(earliestTimes[m2] > dt) {
			earliestTimes[m2] = dt;
		}
	}


}



console.log(Graph);
console.log(earliestTimes);
