import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import Header from './components/Header'
import ProjectList from './components/ProjectList'
import theme from './config/theme';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Grid container={true}>
            <Grid item={true} xs={12}>
              <Header />
            </Grid>
            <Grid item={true} xs={12}>
              <ProjectList />
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
