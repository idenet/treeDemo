export default [
  {
    id: 'aeqW',
    gender: 'male',
    parents: [],
    siblings: [],
    spouses: [
      {
        id: 'wIFr',
        type: 'married'
      },
      {
        id: 'aCZW',
        type: 'divorced'
      }
    ],
    children: [
      {
        id: 's9HE',
        type: 'blood'
      },
      {
        id: 'YzLf',
        type: 'blood'
      },
      {
        id: 'uJK9',
        type: 'blood'
      }
    ]
  },
  {
    id: 'wIFr',
    gender: 'female',
    parents: [],
    siblings: [],
    spouses: [
      {
        id: 'aeqW',
        type: 'married'
      }
    ],
    children: [
      {
        id: 'YzLf',
        type: 'blood'
      },
      {
        id: 'uJK9',
        type: 'blood'
      }
    ]
  },
  {
    id: 'aCZW',
    gender: 'female',
    parents: [],
    siblings: [],
    spouses: [
      {
        id: 'aeqW',
        type: 'divorced'
      }
    ],
    children: [
      {
        id: 's9HE',
        type: 'blood'
      }
    ]
  },
  {
    id: 's9HE',
    gender: 'male',
    parents: [
      {
        id: 'aeqW',
        type: 'blood'
      },
      {
        id: 'aCZW',
        type: 'blood'
      }
    ],
    siblings: [],
    spouses: [
      {
        id: 'l8un',
        type: 'married'
      }
    ],
    children: []
  },
  {
    id: 'l8un',
    gender: 'female',
    parents: [],
    siblings: [],
    spouses: [
      {
        id: 's9HE',
        type: 'married'
      }
    ],
    children: []
  },
  {
    id: 'YzLf',
    gender: 'female',
    parents: [
      {
        id: 'aeqW',
        type: 'blood'
      },
      {
        id: 'wIFr',
        type: 'blood'
      }
    ],
    siblings: [
      {
        id: 'uJK9',
        type: 'blood'
      }
    ],
    spouses: [
      {
        id: '5ejU',
        type: 'married'
      }
    ],
    children: [
      {
        id: 'c3EI',
        type: 'blood'
      },
      {
        id: 'MEHb',
        type: 'blood'
      },
      {
        id: 'lhDs',
        type: 'blood'
      },
      {
        id: '13Uo',
        type: 'blood'
      }
    ]
  },
  {
    id: '5ejU',
    gender: 'male',
    parents: [],
    siblings: [],
    spouses: [
      {
        id: 'YzLf',
        type: 'married'
      }
    ],
    children: [
      {
        id: 'c3EI',
        type: 'blood'
      },
      {
        id: 'MEHb',
        type: 'blood'
      },
      {
        id: 'lhDs',
        type: 'blood'
      },
      {
        id: '13Uo',
        type: 'blood'
      }
    ]
  },
  {
    id: 'c3EI',
    gender: 'male',
    parents: [
      {
        id: 'YzLf',
        type: 'blood'
      },
      {
        id: '5ejU',
        type: 'blood'
      }
    ],
    siblings: [
      {
        id: 'MEHb',
        type: 'blood'
      },
      {
        id: 'lhDs',
        type: 'blood'
      },
      {
        id: '13Uo',
        type: 'blood'
      }
    ],
    spouses: [],
    children: [
      {
        id: 'yZwk',
        type: 'blood'
      }
    ]
  },
  {
    id: 'yZwk',
    gender: 'female',
    parents: [
      {
        id: 'c3EI',
        type: 'blood'
      }
    ],
    siblings: [],
    spouses: [
      {
        id: '_qhe',
        type: 'married'
      }
    ],
    children: []
  },
  {
    id: '_qhe',
    gender: 'male',
    parents: [],
    siblings: [],
    spouses: [
      {
        id: 'yZwk',
        type: 'married'
      }
    ],
    children: []
  },
  {
    id: 'MEHb',
    gender: 'male',
    parents: [
      {
        id: 'YzLf',
        type: 'blood'
      },
      {
        id: '5ejU',
        type: 'blood'
      }
    ],
    siblings: [
      {
        id: 'c3EI',
        type: 'blood'
      },
      {
        id: 'lhDs',
        type: 'blood'
      },
      {
        id: '13Uo',
        type: 'blood'
      }
    ],
    spouses: [],
    children: []
  },
  {
    id: 'lhDs',
    gender: 'male',
    parents: [
      {
        id: 'YzLf',
        type: 'blood'
      },
      {
        id: '5ejU',
        type: 'blood'
      }
    ],
    siblings: [
      {
        id: 'c3EI',
        type: 'blood'
      },
      {
        id: 'MEHb',
        type: 'blood'
      },
      {
        id: '13Uo',
        type: 'blood'
      }
    ],
    spouses: [],
    children: []
  },
  {
    id: '13Uo',
    gender: 'male',
    parents: [
      {
        id: 'YzLf',
        type: 'blood'
      },
      {
        id: '5ejU',
        type: 'blood'
      }
    ],
    siblings: [
      {
        id: 'c3EI',
        type: 'blood'
      },
      {
        id: 'MEHb',
        type: 'blood'
      },
      {
        id: 'lhDs',
        type: 'blood'
      }
    ],
    spouses: [],
    children: []
  },
  {
    id: 'uJK9',
    gender: 'male',
    parents: [
      {
        id: 'aeqW',
        type: 'blood'
      },
      {
        id: 'wIFr',
        type: 'blood'
      }
    ],
    siblings: [
      {
        id: 'YzLf',
        type: 'blood'
      }
    ],
    spouses: [],
    children: []
  }
]
