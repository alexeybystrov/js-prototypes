const singleTagsList = new Set(['hr', 'img', 'br']);

const propertyActions = [
  {
    name: 'body',
    check: (property) => typeof property === 'string',
  },
  {
    name: 'children',
    check: (property) => property instanceof Array,
  },
  {
    name: 'attributes',
    check: (property) => property instanceof Object,
  },
];

const getPropertyName = (property) => {
  const object = propertyActions.find(({ check }) => check(property));
  return object.name;
};

const getTagType = (tag) => {
  if (singleTagsList.has(tag)) {
    return 'single';
  } return 'paired';
};

const buildAttrString = (attrs) => (
  Object.keys(attrs).map((key) => ` ${key}="${attrs[key]}"`).join('')
);

export const parse = (data) => {
  const [tagName, ...properties] = data;

  const root = {
    tag: {
      name: tagName,
      type: getTagType(tagName),
    },
    attributes: {},
    body: '',
    children: [],
  };

  const ast = properties.reduce((acc, item) => {
    const propertyName = getPropertyName(item);
    return { ...acc, [propertyName]: propertyName === 'children' ? item.map(parse) : item };
  }, root);

  return ast;
};

export const render = (data) => [
  `<${data.tag.name}${buildAttrString(data.attributes)}>`,
  `${data.body}${data.children.map(render).join('')}`,
  data.tag.type === 'paired' ? `</${data.tag.name}>` : '',
].join('');
