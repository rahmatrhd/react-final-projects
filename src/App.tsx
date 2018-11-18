import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import Header from './components/Header'
import theme from './config/theme';

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
      </MuiThemeProvider>
    );
  }
}

export default App;
