import $ from '../core';

$.prototype.animateOverTime = function(dur, callback, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / dur, 1);

        callback(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof(fin) === 'function') {
                fin();
            }
        }
    }

    return _animateOverTime;
};

$.prototype._setFadeIn = function(i, dur, display, fin) {
    this[i].style.display = display || 'block';

    const _fadeIn = (complection) => {
        this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
};

$.prototype._setFadeOut = function (i, dur, fin) {
    const _fadeOut = (complection) => {
        this[i].style.opacity = 1 - complection;

        if (complection === 1) {
            this[i].style.display = 'none';
        }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
};

$.prototype.fadeIn = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        this._setFadeIn(i, dur, display, fin);
    }

    return this;
};

$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {
        this._setFadeOut(i, dur, fin);
    }

    return this;
};

$.prototype.fadeToggle = function (dur, display, fin) {
    for (let i = 0; i < this.length; i++) {

        if (window.getComputedStyle(this[i]).display === 'none') {
            this._setFadeIn(i, dur, display, fin);
        } else {
            this._setFadeOut(i, dur, fin);
        }
    }

    return this;
};