import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';


const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        padding: theme.spacing(6),
    },
    gridRoot: {
        width: '100%',
    },
    gridCondensed: {
        width: '60%',
    },
    gridList: {
        height: '50%',
        transform: 'translateZ(0)'
    },
    titleBar: {
        background: 'transparent',
    },
    image: {
        height: '80%',
        width: '80%',
    },
    image_checked: {
        height: '80%',
        opacity: 0.4,
        width: '80%',

    },
    icon: {
        color:'black'
    }
}))
function GalleryPanel(props) {
    const { children, reset, sole, images, selectedImages, ...other } = props;
    const classes = useStyles();

    const toggleImage = (id) => {
        let data = [...images];
        let idx = data.findIndex((n) => n.id == id);
        data[idx].selected = !data[idx].selected;

        selectedImages(data);
    }


    const unchecked = (
        <IconButton
            className={classes.icon}>
            <RadioButtonUncheckedIcon />
        </IconButton>
    );

    const checked = (
        <IconButton
            className={classes.icon}>
            <RadioButtonCheckedIcon />
        </IconButton>
    );

    return (

                <Grid
                    container
                    justify='center'
                    className={classes.root}>
                    <Grid
                        container
                        className={classes.gridRoot}
                        justify='center'>
                        <GridList
                            spacing={50}
                            cellHeight={'auto'}
                            cols={sole?6:4}
                            className={sole?classes.gridCondensed:classes.gridList}>
                            {images.map((tile) => (
                                <GridListTile
                                    key={tile.id}
                                    rows={1}
                                    onClick={() => toggleImage(tile.id)}
                                    cols={1}>
                                    <img src={tile.src} className={tile.selected?classes.image_checked:classes.image}/>
                                    <GridListTileBar
                                        className={classes.titleBar}
                                        titlePosition='top'
                                        actionIcon={
                                            tile.selected?checked:unchecked
                                        }
                                        actionPosition='right'/>
                                </GridListTile>

                            ))}
                        </GridList>
                    </Grid>
                </Grid>

    );
}

export default GalleryPanel;