import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import imageLoader from "./images";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CollectionsIcon from '@material-ui/icons/Collections';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
    },
    gridList: {
        height: '50%',
        transform: 'translateZ(0)'
    },
    titleBar: {
        background: 'transparent',
    },
    icon: {
        color:'white'
    }
}))
function GalleryPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();
    const images = imageLoader();

    const videoButton = (
        <IconButton className={classes.icon}>
            <PlayArrowIcon />
        </IconButton>
    )
    const multipleButton = (
        <IconButton className={classes.icon}>
            <CollectionsIcon />
        </IconButton>
    )

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Grid
                    container
                    justify='center'
                    className={classes.root}>
                    <Grid
                        container
                        justify='center'>
                        <GridList
                            spacing={1}
                            cellHeight={120}
                            cols={3}
                            className={classes.gridList}>
                            {images.map((tile) => (
                                <GridListTile
                                    onClick={()=> props.history.push('/pictorant/'+tile.id)}
                                    key={tile.id}
                                    rows={1}
                                    cols={1}>
                                    <img src={tile.src} alt={tile.description}/>
                                    <GridListTileBar
                                        className={classes.titleBar}
                                        titlePosition='top'
                                        actionIcon={tile.type === 'video' ? videoButton : tile.type === 'multiple' ? multipleButton : undefined}/>
                                </GridListTile>
                            ))}
                        </GridList>
                    </Grid>
                </Grid>
            )}
        </div>
    );
}

export default GalleryPanel;