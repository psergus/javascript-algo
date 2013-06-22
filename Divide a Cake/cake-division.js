
var cakes = [1, 7, 30];
var guests_num = 60;

function calc_waste(cakes, piece_size) {
	var waste = 0;
	var guests_served = 0;
	for(var i = 0; i < cakes.length; i++) {
		guests_served += Math.floor( cakes[i] / piece_size );
		waste += cakes[i] % piece_size;
		//console.log('cakes ' + cakes[i] + ' wasted: ' + waste + ' served: ' + guests_served);
	}
	return {
		wasted: waste.toFixed(3),
		served: guests_served
	};
}

var total_volume = 0;
for(var i = 0; i < cakes.length; total_volume += cakes[i++]);
var avg_piece_size = total_volume / guests_num;
console.log('total_volume: ' + total_volume + ' avg_piece_size: ' + avg_piece_size);


var waste_stats = calc_waste(cakes, avg_piece_size);
console.log('total waste: ' + waste_stats.wasted + ' and served: ' + waste_stats.served);


/*
for(var i = avg_piece_size; i > avg_piece_size - avg_piece_size / 2; i = i - avg_piece_size/10 ) {
	waste_stats = calc_waste(cakes, i);
	console.log('piece_size: ' + i + ' total waste: ' + waste_stats.wasted + ' and served: ' + waste_stats.served);
}
*/
var run = true;
var i = avg_piece_size;
var factor = guests_num;
var prev_waste = guests_num;
while (run) {
	if(waste_stats.served < guests_num) {
		i = i - i/factor;
	}
	else {
		i = i + i/factor;
	}
	factor += factor;
	waste_stats = calc_waste(cakes, i);
	console.log('piece_size: ' + i.toFixed(2) + ' total waste: ' + waste_stats.wasted + ' and served: ' + waste_stats.served + ' factor: ' + factor);
	if(waste_stats.served == guests_num && prev_waste == waste_stats.wasted) {
		run = false;
	}
	prev_waste = waste_stats.wasted;
}


