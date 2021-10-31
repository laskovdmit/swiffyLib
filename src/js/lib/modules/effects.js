import $ from '../core';

$.prototype.animateOverTime = function(dur, callback, fin) { //Вполняет анимацию callback в течение dur секунд. callback получает на вход значение, которое увеличивается с 0 до 1 во время выполнения анимации. 3-м аргументом можно передать функцию fin, которая выполнится после окончания анимации.
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

$.prototype._setFadeIn = function(i, dur, display, fin) { //Техническая функция для появления элемента
    this[i].style.display = display || 'block';

    const _fadeIn = (complection) => {
        this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
};

$.prototype._setFadeOut = function (i, dur, fin) { //Техническая функция для скрытия элемента
    const _fadeOut = (complection) => {
        this[i].style.opacity = 1 - complection;

        if (complection === 1) {
            this[i].style.display = 'none';
        }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
};

$.prototype.fadeIn = function(dur, display, fin) { //Устанавливает анимацию плавного появления для всех элементов в течение dur секунд, изменяя значение display на заданное во 2-м аргументе (по умолчанию "block"). 3-м аргументом можно передать функцию fin, которая выполнится после окончания анимации.
    for (let i = 0; i < this.length; i++) {
        this._setFadeIn(i, dur, display, fin);
    }

    return this;
};

$.prototype.fadeOut = function(dur, fin) { //Устанавливает анимацию плавного исчезновения для всех элементов в течение dur секунд. 2-м аргументом можно передать функцию fin, которая выполнится после окончания анимации.
    for (let i = 0; i < this.length; i++) {
        this._setFadeOut(i, dur, fin);
    }

    return this;
};

$.prototype.fadeToggle = function (dur, display, fin) { //Переключает анимацию плавного появления или исчезновения для всех элементов в течение dur секунд, изменяя значение display при появлении на заданное во 2-м аргументе (по умолчанию "block"). 3-м аргументом можно передать функцию fin, которая выполнится после окончания анимации.
    for (let i = 0; i < this.length; i++) {        
        if (window.getComputedStyle(this[i]).display === 'none') {
            this._setFadeIn(i, dur, display, fin);
        } else {
            this._setFadeOut(i, dur, fin);
        }
    }

    return this;
};