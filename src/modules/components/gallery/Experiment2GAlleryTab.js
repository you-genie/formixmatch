import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {oneLoader} from "../ImageLoader";
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
        color: 'red',
    }
}))

function Experiment2GalleryTab(props) {
    const {sendStop} = props;
    const classes = useStyles();
    const theme = useTheme();

    const genAllImages = (dataset) => {
        if (!dataset) {
            dataset = oneLoader();
        }
        let tops = dataset.top;
        let bottoms = dataset.bottom;

        let newImages = [];
        Array.prototype.push.apply(newImages, tops);
        Array.prototype.push.apply(newImages, bottoms);

        //setImages(newImages);
        return newImages;
    }
    const [dataset, setDataset] = React.useState(oneLoader());
    const [iter, setIter] = React.useState(0);
    const [start, setStart] = React.useState(new Date())
    const [images, setImages] = React.useState(genAllImages(dataset));
    const [crossImages, setCrossImages] = React.useState([]);
    const [selectedTop, setSelectedTop] = React.useState([]);
    const [selectedBottom, setSelectedBottom] = React.useState([]);
    const [value, setValue] = React.useState(0);
    const [width, setWidth] = React.useState(0);

    const setDisplayImages = () => {
        if (selectedTop.length + selectedBottom.length > 0) {
            setWidth(7);
        } else {
            setWidth(0);
        }

        let newCrossImages = [];

        selectedTop.map((top) => {
            newCrossImages.push(top);
            let topFull = dataset.mixMatch.filter((n) => {
                return n.top == top.id;
            })
            Array.prototype.push.apply(newCrossImages, topFull);
        })

        selectedBottom.map((bottom) => {
            newCrossImages.push(bottom);
            let bottomFull = dataset.mixMatch.filter((n) => {
                return n.bottom == bottom.id;
            })
            Array.prototype.push.apply(newCrossImages, bottomFull);
        })
        console.log(newCrossImages);

        setCrossImages(newCrossImages);
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
        setWidth(0);
        setSelectedTop([]);
        setSelectedBottom([]);
        setCrossImages([]);
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
                    <PlainGalleryPanel crossImages={crossImages} w={width}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Experiment2GalleryTab;