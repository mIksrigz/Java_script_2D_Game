import { GAME_WIDTH, GAME_HEIGHT } from "./constants.js";

export class Game {
  constructor() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");

    this.init();
  }
  init() {
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas(t));

    // start game loop
    requestAnimationFrame((t) => this.gameLoop())
  }
  resizeCanvas() {
    const ratio = 16 / 9;
    let w, h;
    const margin = 15;
    const availableWidth = window.innerWidth - 2 * margin;
    const availableHeigth = window.innerHeight - 2 * margin;

    if (availableWidth / availableHeigth > ratio) {
      h = availableHeigth;
      w = h * ratio;
    } else {
      w = availableWidth;
      h = w / ratio;
    }

    this.canvas.width = GAME_WIDTH;
    this.canvas.height = GAME_HEIGHT;

    this.canvas.style.width = w + "px";
    this.canvas.style.height = h + "px";
    this.canvas.style.margin = `${margin}px`;
  }
  gameLoop(timestamp) {
    //console.log(timestamp);
    this.render();
    requestAnimationFrame((t) => this.gameLoop(t));
  }
  render() {
    this.ctx.fillStyle = "#0f3460";
    this.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  }
}
