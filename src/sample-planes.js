const planes = [
  {
    id: 1,
    image: "/planes/my.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 76,
    price: 2.1,
    status: 'notforsale',
    owner: 'wanglei'
  },

  {
    id: 2,
    image: "/planes/A-20g.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 18,
    price: 18.1,
    status: 'forsale',
    owner: 'a1.wanglei'
  },

  {
    id: 3,
    image: "/planes/B-17g.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 7,
    price: 9.9,
    status: 'notforsale',
    owner: 'a3.wanglei'
  },

  {
    id: 4,
    image: "/planes/B-24j.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 866,
    price: 1.1,
    status: 'bidding',
    owner: 'a4.wanglei'
  },

  {
    id: 5,
    image: "/planes/B-25c.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 1724,
    price: 12.1,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 6,
    image: "/planes/B-26b.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 98,
    price: 23.1,
    status: 'bidding',
    owner: 'wanglei'
  },

  {
    id: 7,
    image: "/planes/B-29.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 1,
    price: 28.1,
    status: 'forsale',
    owner: 'a3.wanglei'
  },

  {
    id: 8,
    image: "/planes/bgbattleship.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 0,
    price: 2.1232,
    status: 'bidding',
    owner: 'wanglei'
  },

  {
    id: 9,
    image: "/planes/bgspeedship.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 442,
    price: 29.231,
    status: 'notforsale',
    owner: 'a1.wanglei'
  },

  {
    id: 10,
    image: "/planes/C47a.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 872,
    price: 72.1,
    status: 'forsale',
    owner: 'a2.wanglei'
  },

  {
    id: 11,
    image: "/planes/heavyfreighter.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 12,
    image: "/planes/medfighter.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 13,
    image: "/planes/medfrighter.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 14,
    image: "/planes/smallfighter0006.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 15,
    image: "/planes/smallfreighterspr.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 16,
    image: "/planes/speedship.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 17,
    image: "/planes/spshipspr1.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 18,
    image: "/planes/ToonPlane.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 19,
    image: "/planes/xspr5.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 20,
    image: "/planes/BluePlane.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 21,
    image: "/planes/GodPlane.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 22,
    image: "/planes/GreenPlane.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 23,
    image: "/planes/JitPlane.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 24,
    image: "/planes/JpPlane.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 25,
    image: "/planes/LiPlane.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 26,
    image: "/planes/LXPlane.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 27,
    image: "/planes/RedPlane.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 28,
    image: "/planes/spiked ship 3. small.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },

  {
    id: 29,
    image: "/planes/spiked ship 3. small.green_.png",
    desc: 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    score: 232,
    price: 2.9,
    status: 'notforsale',
    owner: 'a4.wanglei'
  },
];

export default planes;
