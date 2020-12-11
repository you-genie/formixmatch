import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {threeLoader} from "../ImageLoader";
import GalleryPanel from "./GalleryPanel";
import CrossGalleryPanel from "./CrossGalleryPanel";
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
    }
}))

function Experiment2GalleryTab(props) {
    const {sendStop} = props;
    const classes = useStyles();
    const theme = useTheme();

    const genAllImages = (dataset) => {
        if (!dataset) {
            dataset = threeLoader();
        }
        let tops = dataset.top;
        let bottoms = dataset.bottom;

        let newImages = [];
        Array.prototype.push.apply(newImages, tops);
        Array.prototype.push.apply(newImages, bottoms);

        //setImages(newImages);
        return newImages;
    }
    const [dataset, setDataset] = React.useState(threeLoader());
    const [iter, setIter] = React.useState(0);
    const [start, setStart] = React.useState(new Date())
    const [images, setImages] = React.useState(genAllImages(dataset));
    const [selectedTop, setSelectedTop] = React.useState([]);
    const [selectedBottom, setSelectedBottom] = React.useState([]);
    const [value, setValue] = React.useState(0);
    const [width, setWidth] = React.useState(0);
    const genAllCrossImages = () => {
        let newCrossImages = [];

        Array.prototype.push.apply(newCrossImages, dataset.top);

        for (let b = 0; b < 6; b++) {
            newCrossImages.push(dataset.bottom[b])
            for (let t = 0; t < 6; t++) {
                let data = dataset.mixMatch.filter((mm) => {
                    return mm.top == dataset.top[t].id && mm.bottom == dataset.bottom[b].id;
                })
                newCrossImages.push(data[0])
            }
        }

        return newCrossImages;
    }
    const allCrossImages = genAllCrossImages();
    const flush = () => {
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
        setWidth(0);

        setImages(data);
    }

    const handleImageChange = (data) => {
        setImages(data);

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
                        <Button onClick={submit}>Submit {iter+1}th item</Button>
                        <Button onClick={flushImages}>Refresh </Button>
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
                    <GalleryPanel images={images} imageSelectHandler={handleImageChange} value={value} index={0} dir={theme.direction}>
                        Item One
                    </GalleryPanel>
                </Grid>
                <Grid item xs={6}>
                    <CrossGalleryPanel crossImages={allCrossImages} w={6}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Experiment2GalleryTab;