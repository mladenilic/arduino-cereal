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
    default: '#000',

    global: {
      heading: '#000',
      border: '#000'
    },

    status: {
      success: '#0f0',
      error: '#f00',
    },

    monitor: {
      timestamp: '#000',
      message: '#000'
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
}
