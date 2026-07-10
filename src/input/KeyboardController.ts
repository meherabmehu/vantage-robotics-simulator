export type KeyboardCallback = (
  jointIndex: number,
  delta: number
) => void;

export type HomeCallback = () => void;

export default class KeyboardController {
  private onMove: KeyboardCallback;
  private onHome: HomeCallback;

  private keyDown: (event: KeyboardEvent) => void;

  constructor(
    onMove: KeyboardCallback,
    onHome: HomeCallback
  ) {
    this.onMove = onMove;
    this.onHome = onHome;

    this.keyDown = this.onKeyDown.bind(this);
  }

  public attach() {
    window.addEventListener("keydown", this.keyDown);
  }

  public detach() {
    window.removeEventListener("keydown", this.keyDown);
  }

  private onKeyDown(event: KeyboardEvent) {
    switch (event.key.toLowerCase()) {
      case "q":
        this.onMove(0, +0.05);
        break;

      case "a":
        this.onMove(0, -0.05);
        break;

      case "x":
        this.onMove(1, +0.05);
        break;

      case "z":
        this.onMove(1, -0.05);
        break;

      case "e":
        this.onMove(2, +0.05);
        break;

      case "d":
        this.onMove(2, -0.05);
        break;

      case "r":
        this.onMove(3, +0.05);
        break;

      case "f":
        this.onMove(3, -0.05);
        break;

      case "t":
        this.onMove(4, +0.05);
        break;

      case "g":
        this.onMove(4, -0.05);
        break;

      case "y":
        this.onMove(5, +0.05);
        break;

      case "h":
        this.onMove(5, -0.05);
        break;

      case "u":
        this.onMove(6, +0.05);
        break;

      case "j":
        this.onMove(6, -0.05);
        break;

      case " ":
        event.preventDefault();
        this.onHome();
        break;
    }
  }
}