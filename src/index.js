import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';
import red from 'material-ui/colors/red';
import App from './components/App';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';
import './i18n';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: teal,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const Root = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={App} />
          <Match pattern="/plane/:planeId" component={App} />
          <Match pattern="/upgrade/:planeId" component={App} />
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

render(<Root/>, document.querySelector('#main'));
registerServiceWorker();
