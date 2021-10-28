import $ from '../core';

$.prototype.setAttr = function (name, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
    }

    return this;
};

$.prototype.removeAttr = function (name) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(name);
    }

    return this;
};