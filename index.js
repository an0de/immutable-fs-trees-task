import {
  mkfile, mkdir,
} from '@hexlet/immutable-fs-trees';

const tree = mkdir(
  'nodejs-package',
  [
    mkfile('Makefile'),
    mkfile('README.md'),
    mkdir('dist'),
    mkdir(
      '__tests__',
      [
        mkfile('half.test.js', { type: 'text/javascript' }),
      ],
    ),
    mkfile('babel.config.js', { type: 'text/javascript' }),
    mkdir(
      'node_modules',
      [
        mkdir(
          '@babel',
          [
            mkdir('cli', [mkfile('LICENSE')]),
          ],
        ),
      ],
      { owner: 'root', hidden: false },
    ),
  ],
  { hidden: true },
);

const printNode = (node, pad = '') => {
  const { name, meta, children = [] } = node;
  console.log(pad, name, meta || '');
  const newpad = `${pad}  `;
  for (const child of children) {
    printNode(child, newpad);
  }
};

printNode(tree);
