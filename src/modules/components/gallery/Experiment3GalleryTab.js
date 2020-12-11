import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {twoLoader} from "../ImageLoader";
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
    },
    button: {
        color: 'red'
    }
}))

function Experiment3GalleryTab(props) {
    const {sendStop} = props;
    const classes = useStyles();
    const theme = useTheme();

    const genAllImages = (dataset) => {
        if (! dataset) {
            dataset = twoLoader();
        }
        let tops = dataset.top;
        let bottoms = dataset.bottom;

        let newImages = [];
        Array.prototype.push.apply(newImages, tops);
        Array.prototype.push.apply(newImages, bottoms);

        //setImages(newImages);
        return newImages;
    }
    const [dataset, setDataset] = React.useState(twoLoader());
    const [iter, setIter] = React.useState(0);
    const [start, setStart] = React.useState(new Date())
    const [images, setImages] = React.useState(genAllImages(dataset));
    const [crossImages, setCrossImages] = React.useState([]);
    const [selectedTop, setSelectedTop] = React.useState([]);
    const [selectedBottom, setSelectedBottom] = React.useState([]);
    const [value, setValue] = React.useState(0);
    const [width, setWidth] = React.useState(0);

    const setDisplayImages = () => {
        let newCrossImages = [];

        let topLength = selectedTop.length;
        let bottomLength = selectedBottom.length;
        Array.prototype.push.apply(newCrossImages, selectedTop);

        for (let b = 0; b < bottomLength; b++) {
            newCrossImages.push(selectedBottom[b])
            for (let t = 0; t < topLength; t++) {
                let data = dataset.mixMatch.filter((mm) => {
                    return mm.top == selectedTop[t].id && mm.bottom == selectedBottom[b].id;
                })
                newCrossImages.push(data[0])
            }
        }
        console.log(newCrossImages);
        setCrossImages(newCrossImages);
        setWidth(topLength);
        console.log('Selected topXbottom: (' + (topLength) + ', ' + (bottomLength) + ')');
    }

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
        setImages(data);
    }

    const handleImageChange = (data) => {
        setImages(data);

        let tops = data.filter(function(n) {
            return n.selected == true && n.id.startsWith('t');
        })
        setSelectedTop(tops);

        let bottoms = data.filter(function(n) {
            return n.selected == true && n.id.startsWith('b');
        });
        setSelectedBottom(bottoms);
    }


    return (
        <div>
            <Grid
                container
                direction='row'>
                <Grid className={classes.tabGrid} item xs={6}>
                    <Grid container direction='row' justify='space-around' className={classes.mainTabGrid}>
                        <Button className={classes.tabButton} onClick={setDisplayImages}>Select Items</Button>
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
                    <GalleryPanel images={images} imageSelectHandler={handleImageChange} value={value} index={0} dir={theme.direction}>
                        Item One
                    </GalleryPanel>
                </Grid>
                <Grid item xs={6}>
                    <CrossGalleryPanel crossImages={crossImages} w={width} dir={theme.direction}>
                        Item Two
                    </CrossGalleryPanel>
                </Grid>
            </Grid>
        </div>
    )
}

export default Experiment3GalleryTab;