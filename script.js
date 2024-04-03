class Hover {
  constructor(option) {
    if (typeof option.el == "string") {
      this.el = document.querySelector(option.el);
    } else if (option.el instanceof HTMLElement) {
      this.el = option.el;
    }
    this.el.addEventListener("mouseenter", () => this.move());
  }

  random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) - min);
  }

  move() {
    this.el.style.position = "fixed";
    this.el.style.left =
      this.random(0, innerWidth - this.el.clientWidth) + "px";

    this.el.style.top = this.random(0, innerHeight - this.el.clientHeight) + "px";
  }
}

const btn = new Hover({
  el: ".header__btn_move",
});


document.documentElement.requestFullscreen()