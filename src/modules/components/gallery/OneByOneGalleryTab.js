import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {preLoader} from "../ImageLoader";
import GalleryPanel from "./GalleryPanel";
import PlainGalleryPanel from "./PlainGalleryPanel";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    tab: {
        ...theme.typography.button,
        padding: theme.spacing(1),
        color: 'palevioletred'
    },
    tabButton: {
        color: 'palevioletred',
    },
    tabGrid: {
        textAlign: 'center',
        padding: theme.spacing(1),
    },
    mainTabGrid: {
        textAlign: 'center',
        padding: theme.spacing(1),
        backgroundColor: 'lavenderblush'
    },
    button: {
        color:'red'
    }
}))

function OneByOneGalleryTab(props) {
    const {giveItems, sendStop} = props;
    const classes = useStyles();
    const theme = useTheme();

    const [iter, setIter] = React.useState(0);
    const [start, setStart] = React.useState(new Date())
    const [images, setImages] = React.useState([]);

    const [dataset, setDataset] = React.useState(preLoader());
    const [value, setValue] = React.useState(0);

    const genAllCrossImages = () => {
        let topFull = dataset.topFull;
        let bottomFull = dataset.bottomFull;

        let newCrossImages = [];
        Array.prototype.push.apply(newCrossImages, topFull);
        Array.prototype.push.apply(newCrossImages, bottomFull);

        return newCrossImages;
    }

    const genAllImages = () => {
        let tops = dataset.top;
        let bottoms = dataset.bottom;

        let newImages = [];
        Array.prototype.push.apply(newImages, tops);
        Array.prototype.push.apply(newImages, bottoms);

        //setImages(newImages);
        return newImages;
    }

    const allCrossImages = genAllCrossImages();
    const allImages = genAllImages();


    const flush = () => {
        giveItems([]);
        flushImages();
    }

    const submit = () => {
        let selectedItems = images.filter(function (n) {
            return n.selected == true;
        })

        let estimated = Math.floor(new Date() - start)/1000;
        console.log('iteration ' + iter.toString() + ' time: ' + estimated.toString() + ', chose ' + selectedItems[0].id.toString());
        setStart(new Date());
        setIter(iter + 1);
        flush();
        if (iter >= 2) {
            sendStop();
        }

    }

    const flushImages = () => {
        let data = images.map(function(n) {
            n.selected = false;
            return n;
        })
        setImages(data);
    }

    const handleImageChange = (data) => {
        setImages(data);

        let selectedItems = data.filter(function (n) {
            return n.selected == true;
        })
        giveItems(selectedItems);
    }


    return (
        <div>
            <Grid
                container
                direction='row'>
                <Grid className={classes.tabGrid} item xs={6}>
                    <Grid container direction='row' justify='space-around' className={classes.mainTabGrid}>
                        <Grid item xs={6}>
                            <div className={classes.tab}>Select Items</div>
                        </Grid>
                        <Button className={classes.button} onClick={submit}>Buy {iter+1}th item</Button>
                        <Button onClick={flush}>Refresh </Button>
                    </Grid>
                </Grid>
                <Grid className={classes.tabGrid} item xs={6}>
                    <Grid container direction='row' justify='space-around' className={classes.tabGrid}>
                        <div className={classes.tab}>Sample Item Images</div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                direction='row'>
                <Grid item xs={6}>
                    <GalleryPanel images={allImages} imageSelectHandler={handleImageChange} value={value} index={0} dir={theme.direction}>
                        Item One
                    </GalleryPanel>
                </Grid>
                <Grid item xs={6}>
                    <PlainGalleryPanel crossImages={allCrossImages} w={6} dir={theme.direction}>
                        Item Two
                    </PlainGalleryPanel>
                </Grid>
            </Grid>
        </div>
    )
}

export default OneByOneGalleryTab;