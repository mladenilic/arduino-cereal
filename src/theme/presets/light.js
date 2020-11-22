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
    default: '#222222',

    global: {
      heading: '#876600',
      border: '#104061'
    },

    status: {
      success: '#859900',
      error: '#dc322f'
    },

    monitor: {
      timestamp: '#876600',
      message: '#222222',

      direction: {
        received: '#876600',
        sent: '#104061'
      }
    },

    variables: {
      name: '#222222',
      value: '#876600',

      range: {
        fill: '#876600',
        empty: '#104061'
      },
      flag: {
        on: '#104061',
        off: '#222222'
      }
    }
  }
};
