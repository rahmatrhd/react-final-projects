import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { createStyles, withStyles, WithStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import * as React from 'react';
import projects, { InterfaceProject } from '../common/data/projects'
import Container from './Container';
import Jumbotron from './Jumbotron';

const styles = createStyles({
  featuredImage: {
    height: 250,
  },
  gridListTile: {
    overflow: 'unset',
  },
})

type Props = WithStyles<typeof styles> & WithWidth

const ProjectList: React.StatelessComponent<Props> = ({
  classes,
  width,
}) => (
  <Jumbotron>
    <Container gutterBottom={true} gutterTop={true}>
      <GridList cellHeight="auto" cols={width === 'xs' || width === 'sm' ? 1 : 2} spacing={8}>
        {projects.map((project: InterfaceProject) => (
          <GridListTile key={project.title} classes={{ tile: classes.gridListTile }}>
            <Card>
              <CardActionArea href={project.author.url}>
                <CardHeader
                  avatar={project.author.picture ? (
                    <Avatar src={project.author.picture} />
                  ) : (
                    <Avatar>{project.author.name[0]}</Avatar>
                  )}
                  title={project.author.name}
                />
              </CardActionArea>
              <CardMedia
                className={classes.featuredImage}
                image={project.featured}
                title={project.title}
              />
              <CardContent>
                <Grid container={true} spacing={8}>
                  {project.tags.map(tag => <Grid key={tag} item={true}><Chip label={tag}/></Grid>)}
                </Grid>
              </CardContent>
              <CardContent>
                <Typography variant="title" gutterBottom={true}>{project.title}</Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button href={project.repositoryUrl} color="primary">Repository</Button>
                {project.url && <Button href={project.url} color="primary">Demo</Button>}
              </CardActions>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </Container>
  </Jumbotron>
)

const StyledProjectList = withStyles(styles)(ProjectList)
const WithWidthProjectList = withWidth()(StyledProjectList)

export default WithWidthProjectList