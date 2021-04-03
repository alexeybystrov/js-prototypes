import identity from 'lodash/identity';
import buildNode from './buildNode';

const propertyActions = [
  {
    name: 'body',
    check: (property) => typeof property === 'string',
    process: identity,
  },
  {
    name: 'children',
    check: (property) => property instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: (property) => property instanceof Object,
    process: identity,
  },
];

const getPropertyAction = (property) => propertyActions.find(({ check }) => check(property));

const parse = (data) => {
  const [tagName, ...properties] = data;
  const root = {
    name: tagName,
    attributes: {},
    body: '',
    children: [],
  };
  const tag = properties.reduce((acc, property) => {
    const { name, process } = getPropertyAction(property);
    return { ...acc, [name]: process(property, parse) };
  }, root);

  return buildNode(tag.name, tag.attributes, tag.body, tag.children);
};

export default parse;
