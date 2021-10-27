import $ from '../core';

$.prototype.setAttr = function (name, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
    }

    return this;
};

$.prototype.getAttr = function (name) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(this[i].getAttribute(name));
    }

    return arr;
};

$.prototype.removeAttr = function (name) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(name);
    }

    return this;
};