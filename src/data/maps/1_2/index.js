const tiles = [
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 0, 2, 0, 0, 0, 0, 0, 0, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5, 5, 5, 5, 0, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5],
  [3, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 4, 0, 0, 5, 0, 5],
  [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
  [5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5],
  [4, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
];

const monsters = [
  {
    type: 'rat',
    position: [ 5, 2 ]
  },
  {
    type: 'rat',
    position: [ 5, 9 ]
  },
  {
    type: 'rat',
    position: [ 4, 7 ]
  },
  {
    type: 'rat',
    position: [ 12, 10 ]
  },
  {
    type: 'rat',
    position: [ 14, 12 ]
  }
];

const stairs = {
  up: '1_3',
  down: '1_1'
};

export default {
  tiles,
  monsters,
  stairs
};
