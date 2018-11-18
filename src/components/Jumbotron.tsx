import { createStyles, withStyles, WithStyles} from '@material-ui/core/styles';
import * as React from 'react';

const styles = createStyles({
  root: {
    width: '100%',
  }
})

interface InterfaceProps extends WithStyles<typeof styles> {
  backgroundImage?: string,
  className?: string;
  fullHeight?: boolean;
  style?: {[key: string]: any};
}

const Jumbotron: React.StatelessComponent<InterfaceProps> = ({
  backgroundImage,
  classes,
  className,
  fullHeight,
  style,
  ...props }
) => (
  <div
    {...props}
    className={[classes.root, className].join(' ')}
    style={{
      ...(backgroundImage ? { 
        background: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      } : {}),
      ...(fullHeight ? { height: '100vh', } : {}),
      ...style,
    }}
  />
)

Jumbotron.defaultProps = {
  fullHeight: false,
  style: {},
}

const StyledJumbotron = withStyles(styles)(Jumbotron)

export default StyledJumbotron