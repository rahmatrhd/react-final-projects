import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import * as React from 'react';

const styles = (theme: Theme) => createStyles({
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
  gutterTop?: boolean,
}

const Container: React.StatelessComponent<InterfaceProps> = ({
  classes,
  className,
  gutterTop,
  ...props
}) => (
  <div
    {...props}
    className={[
      classes.root,
      ...(gutterTop ? [classes.gutterTop] : []),
      className
    ].join(' ')}
  />
)

Container.defaultProps = {
  gutterTop: false,
}

const StyledContainer = withStyles(styles)(Container)

export default StyledContainer