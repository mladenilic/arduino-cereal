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
    default: '#000',

    global: {
      heading: '#000',
      border: '#000'
    },

    status: {
      success: '#0f0',
      error: '#f00'
    },

    monitor: {
      timestamp: '#000',
      message: '#000',

      direction: {
        received: '#000',
        sent: '#000'
      }
    },

    variables: {
      name: '#000',
      value: '#000',

      range: {
        fill: '#000',
        empty: '#000'
      },
      flag: {
        on: '#000',
        off: '#000'
      }
    }
  }
};
