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
    default: '#839496',

    global: {
      heading: '#b58900',
      border: '#268bd2'
    },

    status: {
      success: '#859900',
      error: '#dc322f'
    },

    monitor: {
      timestamp: '#b58900',
      message: '#839496',

      direction: {
        received: '#b58900',
        sent: '#268bd2'
      }
    },

    variables: {
      name: '#839496',
      value: '#839496',

      range: {
        fill: '#b58900',
        empty: '#839496'
      },
      flag: {
        on: '#b58900',
        off: '#b58900'
      }
    }
  }
};
