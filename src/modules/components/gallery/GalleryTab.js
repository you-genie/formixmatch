import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import imageLoader from "../images";
import selectedImageLoader from '../selected_images';
import GalleryPanel from "./GalleryPanel";
import CrossGalleryPanel from "./CrossGalleryPanel";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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

function GalleryTab(props) {
    const {items, all, sendStop} = props;
    const classes = useStyles();
    const theme = useTheme();

    const [tops, setTops] = React.useState([]);
    const [bottoms, setBottoms] = React.useState([]);
    const [crossImages, setCrossImages] = React.useState([]);
    const [width, setWidth] = React.useState(0);

    const [images, setImages] = React.useState(imageLoader());
    const defaultSelectedImages = selectedImageLoader();
    const [value, setValue] = React.useState(0);

    const genAllCrossImages = () => {
        let newTops = images.filter(function (n) {
            return n.type == 'top';
        });

        let newBottoms = images.filter(function (n) {
            return n.type == 'bottom';
        });

        let newCrossImages = [];
        Array.prototype.push.apply(newCrossImages, newTops);

        for (let step=0; step<newBottoms.length; step++) {
            newCrossImages.push(newBottoms[step]);
            Array.prototype.push.apply(newCrossImages, defaultSelectedImages.slice(step*newTops.length, (step+1)*newTops.length));
        }

        return newCrossImages;
    }

    const allW = images.filter(function(n){return n.type=='top'}).length;
    const allCrossImages = genAllCrossImages();

    const flush = () => {
        setTops([]);
        setBottoms([]);
        items([]);
        flushImages();
        setCrossImages([]);

    }

    const submit = () => {
        sendStop();
        console.log(images.filter(function (n) {return n.selected==true;}));
    }

    const flushImages = () => {
        let data = images.map(function(n) {
            n.selected = false;
            return n;
        })
        setImages(data);
        setWidth(0);
    }

    const setDisplayImages = () => {
        let newCrossImages = [];

        let topLength = tops.length;
        let bottomLength = bottoms.length;
        Array.prototype.push.apply(newCrossImages, tops);

        for (let step=0; step<bottomLength; step++) {
            newCrossImages.push(bottoms[step]);
            Array.prototype.push.apply(newCrossImages, defaultSelectedImages.slice(step*topLength, (step+1)*topLength));
        }
        console.log(newCrossImages);
        setCrossImages(newCrossImages);
        setWidth(topLength);
        console.log('Selected topXbottom: (' + (topLength) + ', ' + (bottomLength) + ')');
    }

    const handleImageChange = (data) => {
        setImages(data);

        let newTops = data.filter(function (n) {
            return n.selected == true && n.type == 'top';
        });
        setTops(newTops);

        let newBottoms = data.filter(function (n) {
            return n.selected == true && n.type == 'bottom';
        });
        setBottoms(newBottoms);

        let selectedItems = data.filter(function (n) {
            return n.selected == true;
        })
        items(selectedItems);
    }


    return (
        <div>
            <Grid
                container
                direction='row'>
                <Grid className={classes.tabGrid} item xs={4}>
                    <Grid container direction='row' justify='space-around' className={classes.mainTabGrid}>
                        {all? (
                            <Grid item xs={6}>
                                <div className={classes.tab}>Select Items</div>
                            </Grid>
                        ): (
                            <Button className={classes.tabButton} onClick={setDisplayImages}>Select Items</Button>
                        )
                        }
                        <Button onClick={submit}>Submit {tops.length + bottoms.length} items</Button>
                        <Button onClick={flush}>Refresh </Button>
                    </Grid>
                </Grid>
                <Grid className={classes.tabGrid} item xs={8}>
                    <Grid container direction='row' justify='space-around' className={classes.tabGrid}>
                        <div className={classes.tab}>Crossed Items</div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                direction='row'>
                <Grid item xs={4}>
                <GalleryPanel images={images} selectedImages={handleImageChange} value={value} index={0} dir={theme.direction}>
                    Item One
                </GalleryPanel>
                </Grid>
                <Grid item xs={8}>
                {all?
                    (<CrossGalleryPanel crossImages={allCrossImages} w={allW}></CrossGalleryPanel>)
                    :
                    (<CrossGalleryPanel crossImages={crossImages} w={width} dir={theme.direction}>
                        Item Two
                    </CrossGalleryPanel>)
                }
                </Grid>
            </Grid>
        </div>
    )
}

export default GalleryTab;