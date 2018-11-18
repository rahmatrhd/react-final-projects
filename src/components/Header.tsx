import Grid from '@material-ui/core/Grid';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import Jumbotron from './Jumbotron';

const styles = (theme: Theme) => createStyles({
  headerContainer: {
    height: '100vh',
  },
  headerTextWrapper: {
    color: theme.palette.common.white,
  },
});

interface InterfaceProps extends WithStyles<typeof styles> {

}

const Header: React.StatelessComponent<InterfaceProps> = ({
  classes,
}) => (
  <Jumbotron
    fullHeight={true}
    backgroundImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a748e7b25651211d3092e562247c860&auto=format&fit=crop&w=1500&q=80"
  >
    <Grid
      container={true}
      alignItems="center"
      justify="center"
      className={classes.headerContainer}
    >
      <Grid item={true}>
        <div className={classes.headerTextWrapper}>
          <Typography align="center" variant="h4" color="inherit" gutterBottom={true}>Final Projects</Typography>
          <Typography align="center" variant="subtitle1" color="inherit">React & React Native Class - Batch 1 Connext</Typography>
        </div>
      </Grid>
    </Grid>
  </Jumbotron>
)

const StyledHeader = withStyles(styles)(Header)

export default StyledHeader