export default {
  modules: {
    monitor: {
      timestamp: true,
      timestampLocale: 'en-GB'
    },

    variables: {
      range: {
        fill: '▇',
        empty: '-'
      },
      flag: {
        on: '▣',
        off: '▢'
      }
    }
  },

  colors: {
    default: '#839496',

    global: {
      heading: '#b58900',
      border: '#268bd2'
    },

    status: {
      connected: '#859900',
      error: '#dc322f',
    },

    monitor: {
      timestamp: '#839496',
      text: '#839496'
    },

    variables: {
      range: {
        fill: '#b58900',
        empty: '#268bd2'
      },
      flag: {
        on: '#268bd2',
        off: '#839496'
      }
    }
  }
}
