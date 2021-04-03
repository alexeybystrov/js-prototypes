import Node from './Node.js';

export default function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};
