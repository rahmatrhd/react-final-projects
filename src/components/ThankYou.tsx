import Grid from '@material-ui/core/Grid';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import bgImage from '../assets/react-class-connext.jpeg';
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
    backgroundImage={bgImage}
  >
    <Grid
      container={true}
      alignItems="center"
      justify="center"
      className={classes.headerContainer}
    >
      <Grid item={true}>
        <div className={classes.headerTextWrapper}>
          <Typography align="center" variant="h4" color="inherit" gutterBottom={true}>Thank You!</Typography>
        </div>
      </Grid>
    </Grid>
  </Jumbotron>
)

const StyledHeader = withStyles(styles)(Header)

export default StyledHeader