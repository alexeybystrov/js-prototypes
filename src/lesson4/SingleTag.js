import Node from './Node.js';

export default class extends Node {
  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }
}
