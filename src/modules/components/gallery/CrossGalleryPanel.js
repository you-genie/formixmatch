import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        padding: theme.spacing(6),
    },
    gridRoot: {
        width: '90%',
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
        opacity: 0.6,
        width: '80%',

    },
    icon: {
        color:'black'
    }
}))
function CrossGalleryPanel(props) {
    const { children, w, h, crossImages, ...other } = props;
    const classes = useStyles();

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
                    cellHeight={'auto'}
                    cols={w+1}
                    className={classes.gridList}>
                    <GridListTile
                        key={-1}
                        rows={1}
                        cols={1}>
                    </GridListTile>
                    {crossImages.length==0?
                        <Typography variant="subtitle1">Please select Tops and Bottoms to see crossed clothes!!</Typography>
                        :
                    crossImages.map((tile) => (
                        <GridListTile
                            key={tile.id}
                            rows={1}
                            cols={1}>
                            <img src={tile.src} className={classes.image}/>
                        </GridListTile>

                    ))}
                </GridList>

            </Grid>
        </Grid>

    );
}

export default CrossGalleryPanel;