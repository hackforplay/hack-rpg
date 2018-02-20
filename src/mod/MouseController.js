import { Entity } from 'enchantjs/enchant'

export default class MouseContoller {
	constructor(player) {
		// event binding
		this.onenterframe = this.onenterframe.bind(this)
		this.ontouchstart = this.ontouchstart.bind(this)
		this.ontouchmove = this.ontouchmove.bind(this)
		this.ontouchend = this.ontouchend.bind(this)
		this.ontouchleave = this.ontouchleave.bind(this)

		// event registration
		this.player = player
		this.player.on('enterframe', this.onenterframe)
		window.addEventListener('touchstart', this.ontouchstart)
		window.addEventListener('mousedown', this.ontouchstart)
		window.addEventListener('touchmove', this.ontouchmove)
		window.addEventListener('mousemove', this.ontouchmove)
		window.addEventListener('touchend', this.ontouchend)
		window.addEventListener('mouseup', this.ontouchend)
		window.addEventListener('touchleave', this.ontouchleave)
		window.addEventListener('mouseleave', this.ontouchleave)

		// mutable properties
		this.isHolding = false;
		this.position = { x: player.x, y: player.y };
	}

	onenterframe() {
		// console.log(!this.player, !this.player.scene, this.isHolding)
		if (!this.player || !this.player.scene) {
			return; // Missed player
		}

		if (this.isHolding) {
			// Move?
			const lazy = getBasis({
				x: this.player.mapX,
				y: this.player.mapY
			}, {
				x: Math.floor(this.position.x / 32),
				y: Math.floor(this.position.y / 32)
			});
			if (lazy.x !== lazy.y) {
				// Mouse cursor is enough far by player
				if (isEqual(this.player.forward, lazy)) {
					this.player.walk();
				} else if (this.player.behavior === BehaviorTypes.Idle) {
					this.player.forward = lazy;
				}
			} else {
				// Mouse cursor is near by player
				// const actual = getBasis({
				// 	x: this.player.mapX * 32 + 16,
				// 	y: this.player.mapY * 32 + 16,
				// }, this.position);
				// Turn around on the spot                
				// if (this.player.behavior === BehaviorTypes.Idle) {
				// 	this.player.forward = actual;
				// }
			}


		}
	}

	setPosition(event) {
		const [{ pageX, pageY }] = event.touches || [event];
		this.position = { x: pageX, y: pageY };
	}

	ontouchstart(event) {
		this.isHolding = true;
		this.setPosition(event)
	}

	ontouchmove(event) {
		this.setPosition(event);
	}

	ontouchend() {
		this.isHolding = false;
	}

	ontouchleave() {
		this.isHolding = false;
	}
}

function isEqual(v1, v2) {
	return v1.x === v2.x && v1.y === v2.y;
}

function getBasis(from, to) {
	const dx = to.x - from.x
	const dy = to.y - from.y
	return Math.abs(dx) > Math.abs(dy) ? {
		x: Math.sign(dx),
		y: 0
	} : {
		x: 0,
		y: Math.sign(dy)
	};
}
