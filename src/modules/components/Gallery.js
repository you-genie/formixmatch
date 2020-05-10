import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import imageLoader from "./images";

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center'
    },
    gridList: {
        width: '55%',
        height: '50%',
        transform: 'translateZ(0)'
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color:'white'
    }
}))
function GalleryPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();
    const images = imageLoader();
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
                    <GridList
                        cellHeight={300}
                        spacing={3}
                        cols={3}
                        className={classes.gridList}>
                        {images.map((tile) => (
                            <GridListTile
                                key={tile.id}
                                cols={tile.id%5===0 ? 2 :1}>
                                <img src={tile.src} alt={tile.description}/>
                                <GridListTileBar
                                    title={tile.description}
                                    titlePosition='top'
                                    className={classes.titleBar}/>
                            </GridListTile>
                        ))}
                    </GridList>
                </Grid>
            )}
        </div>
    );
}

export default GalleryPanel;