import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';

const styles = (theme: Theme) => createStyles({
  gutterBottom: {
    marginBottom: theme.spacing.unit * 2,
  },
  gutterTop: {
    marginTop: theme.spacing.unit * 2,
  },
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 775,
  },
})

interface InterfaceProps extends WithStyles<typeof styles> {
  className?: string,
  gutterBottom?: boolean,
  gutterTop?: boolean,
}

const Container: React.StatelessComponent<InterfaceProps> = ({
  classes,
  className,
  gutterBottom,
  gutterTop,
  ...props
}) => (
  <div
    {...props}
    className={[
      classes.root,
      ...(gutterBottom ? [classes.gutterBottom] : []),
      ...(gutterTop ? [classes.gutterTop] : []),
      className
    ].join(' ')}
  />
)

Container.defaultProps = {
  gutterBottom: false,
  gutterTop: false,
}

const StyledContainer = withStyles(styles)(Container)

export default StyledContainer