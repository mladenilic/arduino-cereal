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
    default: '#16181c',

    global: {
      heading: '#876600',
      border: '#104061'
    },

    status: {
      success: '#859900',
      error: '#dc322f',
    },

    monitor: {
      timestamp: '#16181c',
      message: '#16181c'
    },

    variables: {
      name: '#839496',
      value: '#839496',

      range: {
        fill: '#876600',
        empty: '#104061'
      },
      flag: {
        on: '#104061',
        off: '#16181c'
      }
    }
  }
}
