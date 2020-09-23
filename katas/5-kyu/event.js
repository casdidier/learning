// https://www.codewars.com/kata/52d3b68215be7c2d5300022f/train/javascript

class Event {
  constructor() {
    this.handlers = [];
  }

  subscribe(fn) {
    this.handlers.push(fn);
  }

  unsubscribe(fn) {
    this.handlers = this.handlers.filter(f => f !== fn);
  }

  emit(...args) {
    this.handlers.forEach(f => f(...args));
  }
}


// other solutions

function Event() {
  var handlers = [];

  this.subscribe = function (handler) {
    handlers.indexOf(handler) === -1 && handlers.push(handler);
  }

  this.unsubscribe = function (handler, p) {
    (p = handlers.indexOf(handler)) > -1 && handlers.splice(p, 1);
  }

  this.emit = function () {
    var inArgs = arguments;

    handlers.forEach(function (handler) {
      handler.apply(this, inArgs);
    });
  }
}


class Event {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(func) {
    this.subscribers.add(func);
  }

  unsubscribe(func) {
    this.subscribers.delete(func);
  }

  emit(...args) {
    this.subscribers.forEach(s => s(...args));
  }
}