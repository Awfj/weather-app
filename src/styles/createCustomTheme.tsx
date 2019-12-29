import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { createMuiTheme } from "@material-ui/core";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    customProperties: {
      mixins: {
        drawer: {
          minWidth: React.CSSProperties["minWidth"];
        };
      };
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    customProperties?: {
      mixins?: {
        drawer?: {
          minWidth?: React.CSSProperties["minWidth"];
        };
      };
    };
  }
}

export default function createCustomTheme(options: ThemeOptions) {
  return createMuiTheme({
    customProperties: {
      mixins: {
        drawer: {
          minWidth: 56
        }
      }
    },
    ...options
  });
}
