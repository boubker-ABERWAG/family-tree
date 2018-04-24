import * as d3 from 'd3';
import CONFIG from '../app.config';
export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: Number;
  x?: Number;
  y?: Number;
  vx?: Number;
  vy?: Number;
  fx?: Number | null;
  fy?: Number | null;

  membre: any;
  linkCount: number = 0;

  constructor(membre) {
    this.membre = membre;
  }

  normal = () => {
    return Math.sqrt(this.linkCount / CONFIG.N);
  }

  get r() {
    return 50 * this.normal() + 10;
  }

  get fontSize() {
    return (3 * this.normal()) + '%';
  }

  get color() {
    let index = Math.floor(CONFIG.SPECTRUM.length * this.normal());
    return CONFIG.SPECTRUM[index];
  }
}
