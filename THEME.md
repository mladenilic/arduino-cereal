# Arduino Cereal Monitor Themes

This document describes monitor theme customization.

### Getting Started

Theme options are specified in configuration file. Read [here](../README.md#configuration-file) how to set up configuration file.

### Configuration

Below is sample configuration file with all theme options. You can use it a template to create a custom theme.

```json
{
  "port": "/dev/tty.usbserial-1410",
  "baud": 9600,
  "fps": 15,
  
  "theme": {
    "modules": {
      "monitor": {
        "timestamp": true,
        "timestampLocale": "en-GB"
      },

      "variables": {
        "range": {
          "fill": "▇",
          "empty": "-"
        },
        
        "flag": {
          "on": "▣",
          "off": "▢"
        }
      }
    },

    "colors": {
      "default": "#839496",

      "global": {
        "heading": "#b58900",
        "border": "#268bd2"
      },

      "status": {
        "success": "#859900",
        "error": "#dc322f"
      },

      "monitor": {
        "timestamp": "#b58900",
        "message": "#839496"
      },

      "variables": {
        "name": "#839496",
        "value": "#839496",
  
        "range": {
          "fill": "#b58900",
          "empty": "#839496"
        },
        "flag": {
          "on": "#b58900",
          "off": "#b58900"
        }
      }
    }
  }
}

```
