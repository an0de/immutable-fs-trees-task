import {
  mkfile, mkdir, map,
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

const callbackFn = (node) => {
  const { name } = node;
  const newName = name.toUpperCase();
  return { ...node, name: newName };
};

console.log(map(callbackFn, tree));
