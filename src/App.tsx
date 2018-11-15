import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import theme from './config/theme';

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <h1>Hello!</h1>
      </MuiThemeProvider>
    );
  }
}

export default App;
