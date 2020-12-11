import React from 'react';
import Banner from "../components/Banner";
import imageLoader from "../components/images";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    typeStyle: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    typeTypoStyle: {
        color: 'palevioletred'
    },
    startButton: {
        margin: theme.spacing(10),
        padding: theme.spacing(10),
    }
}))

function Baseline(props) {
	const classes = useStyles();
    const [items, setItems] = React.useState(imageLoader());
    const [selectedItems, setSelectedItems] = React.useState([]);
    const baseType = (
        <Grid item className={classes.typeStyle} alignItems="flex-end">
        <Typography
            className={classes.typeTypoStyle}
            variant='h3'>
            Type 1
        </Typography>
        </Grid>
    )

    const getItems = (data) => {setSelectedItems(data)}
    return (
        <Grid container direction="column">
            <div className={classes.root}>
                <Banner />
                <Grid item className={classes.startbutton} justify="center" spacing={5}>
                    <Link to="/1" style={{textDecoration: 'none'}}>
                        <Button>
                            Start Experiment
                        </Button>
                    </Link>
                </Grid>
            </div>
        </Grid>
    );
}

export default Baseline;