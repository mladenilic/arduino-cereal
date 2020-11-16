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
    default: '#fff',

    global: {
      heading: '#fff',
      border: '#fff'
    },

    status: {
      success: '#0f0',
      error: '#f00',
    },

    monitor: {
      timestamp: '#fff',
      message: '#fff'
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
}
