import Assets from 'hackforplay/Assets';

function createMap() {

	// map1 というマップを作る
	const mapName = 'map1';

	// 15, 10 の大きさにする ( 32 の部分は書き換えないでください )
	const map = new RPGMap(32, 32, 15, 10);

	map.imagePath = 'enchantjs/x2/dotmat.gif';
	const ___ = -1;

	// マップの地形をつくる
	map.bmap.loadData([
		[322, 322, 322, 322, 322, 322, 322, 204, 205, 205, 205, 205, 205, 205, 205],
		[322, 322, 322, 322, 322, 322, 322, 204, 205, 205, 205, 205, 205, 205, 205],
		[322, 322, 322, 322, 322, 322, 322, 204, 205, 205, 205, 205, 205, 205, 205],
		[322, 322, 322, 322, 322, 322, 322, 204, 205, 205, 166, 225, 225, 225, 167],
		[322, 322, 322, 322, 322, 322, 322, 224, 225, 225, 226, 322, 322, 322, 204],
		[322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 204],
		[322, 322, 322, 322, 322, 322, 322, 184, 185, 185, 186, 322, 322, 322, 204],
		[322, 322, 322, 322, 322, 322, 322, 204, 205, 205, 164, 185, 185, 185, 165],
		[322, 322, 322, 322, 322, 24., 26., 204, 205, 205, 205, 205, 205, 205, 205],
		[322, 322, 322, 322, 322, 64., 66., 204, 205, 205, 205, 205, 205, 205, 205],
	], [
		[462, 461, 462, 461, 462, 461, 462, ___, ___, ___, ___, ___, ___, ___, ___],
		[482, 481, 482, 481, 482, 481, 482, ___, ___, ___, ___, ___, ___, ___, ___],
		[462, ___, ___, 421, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___],
		[482, ___, 421, ___, ___, 421, ___, ___, ___, ___, ___, ___, ___, ___, ___],
		[___, 421, ___, ___, 421, ___, 421, ___, ___, ___, ___, ___, ___, ___, ___],
		[___, ___, 421, ___, 421, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___],
		[___, ___, ___, ___, ___, ___, 421, ___, ___, ___, ___, ___, ___, ___, ___],
		[___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___],
		[___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___],
		[___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___],
	]);

	// マップの歩ける場所を決める
	// 1 なら歩けないし、 0 なら歩ける
	map.cmap = [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
	];



	Hack.maps[mapName] = map;

}

Hack.on('load', createMap);
