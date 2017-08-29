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
		[323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323],
		[323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323],
		[323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323],
		[323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323],
		[323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323],
		[323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323],
		[323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323],
		[323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323],
		[323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323],
		[323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323, 323]
	], [
		[320, 320, 320, 320, 320, 340, 320, 320, 401, 401, ___, 340, 340, 340, 320],
		[320, 320, 320, 320, 320, ___, 320, 320, 401, ___, ___, ___, ___, ___, 320],
		[320, 320, 320, 320, 320, ___, 320, 320, ___, ___, ___, 320, 320, ___, 320],
		[340, 340, 340, 320, 340, ___, 340, 320, 320, ___, 320, 320, 320, ___, 320],
		[___, ___, ___, 340, ___, ___, ___, 340, 340, ___, 320, 320, 320, ___, 320],
		[___, ___, ___, ___, ___, ___, ___, ___, ___, ___, 320, 320, 320, ___, 320],
		[___, ___, ___, 320, ___, ___, ___, 320, 320, 320, 320, 320, 320, ___, 320],
		[320, 320, 320, 320, 320, ___, 340, 340, 340, 340, 340, 340, 340, ___, 320],
		[320, 320, 320, 320, 320, ___, ___, ___, ___, ___, ___, ___, ___, ___, 320],
		[320, 320, 320, 320, 320, 320, ___, ___, ___, 320, 320, 320, 320, 320, 320]
	]);


	// マップの歩ける場所を決める
	// 1 なら歩けないし、 0 なら歩ける
	map.cmap = [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1],
		[1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
		[0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
		[0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1]
	];



	Hack.maps[mapName] = map;

}

Hack.on('load', createMap);
