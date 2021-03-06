import parse from '../src/lesson6/solution.js';

describe('HtmlBuilder', () => {
  it('#toString', () => {
    const data = ['html', [
      ['head', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', [
        ['div', { class: 'separator' }],
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['img', { class: 'image', href: '#' }],
          ['span', 'span text2'],
        ]],
      ]],
    ]];

    const ast = parse(data);
    const expected = '<html><head><title>hello, hexlet!</title></head><body><div class="separator"></div><h1 class="header">html builder example</h1><div><img class="image" href="#"><span>span text2</span></div></body></html>';
    expect(ast.toString()).toEqual(expected);
  });
});
