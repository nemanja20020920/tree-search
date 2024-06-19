import { TFile } from './App';

export const files: TFile[] = [
  {
    name: 'src',
    children: [
      {
        name: 'components',
        children: [
          {
            name: 'App.jsx',
          },
          {
            name: 'App.css',
          },
        ],
      },
    ],
  },
  {
    name: 'node_modules',
    children: [
      {
        name: 'axios',
        children: [
          {
            name: 'src',
          },
        ],
      },
    ],
  },
  {
    name: 'package.json',
  },
];
