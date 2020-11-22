export default {
  modules: {
    monitor: {
      timestamp: true,
      timestampLocale: 'en-GB',

      direction: {
        received: '<<',
        sent: '>>'
      }
    },

    variables: {
      enabled: true,
      range: {
        fill: '▇',
        empty: '-'
      },
      flag: {
        on: '▣',
        off: '▢'
      }
    },

    input: {
      enabled: true,
      prefix: '$>'
    }
  },

  colors: {
    default: '#fff',

    global: {
      heading: '#fff',
      border: '#fff'
    },

    status: {
      success: '#0f0',
      error: '#f00'
    },

    monitor: {
      timestamp: '#fff',
      message: '#fff',

      direction: {
        received: '#fff',
        sent: '#fff'
      }
    },

    variables: {
      name: '#fff',
      value: '#fff',

      range: {
        fill: '#fff',
        empty: '#fff'
      },
      flag: {
        on: '#fff',
        off: '#fff'
      }
    }
  }
};
