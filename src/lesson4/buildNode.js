import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

const singleTagsList = new Set(['hr', 'br', 'img']);

export default (name, ...properties) => {
  const C = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new C(name, ...properties);
};
