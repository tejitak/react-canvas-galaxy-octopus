var w = window,
    raf = w['requestAnimationFrame'] || w['webkitRequestAnimationFrame'] || w['mozRequestAnimationFrame'] || w['msRequestAnimationFrame'] || w['oRequestAnimationFrame'] || (c) => { w.setTimeout(c, 1000 / 60) },
    caf = w['cancelAnimationFrame'] || w['webkitCancelAnimationFrame'] || w['mozCancelAnimationFrame'] || w['msCancelAnimationFrame'] || w['oCancelAnimationFrame'] || w.clearTimeout

export default class Loop {

    constructor(callback) {
        this.callback = callback;
    }

    start() {
        var keep = this.callback();
        if(keep) {
            this._timer = raf(this.start.bind(this));
        }
    }

    end() {
        if(this._timer) {
            caf(this._timer);
        }
    }
}