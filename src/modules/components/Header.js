import React from 'react';
import {makeStyles} from '@material-ui/core/styles/';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Clock from "./Clock";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(1),
    },
    upCard: {
        display: 'flex',
    },
    name: {
        margin: theme.spacing(8, 1, 1, 0),
    },
    profileImg: {
        width: '130px',
        height: '130px',
        marginLeft: theme.spacing(1),
    },
    profileIcon: {
        width: '10px',
        height: '10px',
        margin: theme.spacing(-5, 7),
    },
    infoGrid: {
        flex: 1,
        margin: theme.spacing(0, 2),
    },
    button: {
        margin: theme.spacing(1, 2),
        width: '30%',
    },
    buttonGrid: {
        flex: 1,
        margin: theme.spacing(4, 0, 0, -2),
        width: '40%'
    },

}))

function ProfileCard(props) {
    const {timerStop, numbers, sceneType, uid, profile} = props;
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();


    return (
        <Grid
            container
            direction='column'
            className={classes.root}>
            <Card
                elevation='0'
                className={classes.upCard}>
                <CardMedia
                    title="Youjin Chung" >
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <Avatar
                            className={classes.profileImg}
                                src={profile} />
                    </Link>

                </CardMedia>
                <CardContent style={{width: '70%'}}>
                    <Grid
                        container
                        direction='column'>
                        <Grid
                            container
                            className={classes.infoGrid}
                            direction='row'>
                            <Typography
                                variant='h6'>
                                Shopping Cart
                            </Typography>
                            <Grid
                                container
                                direction='row'>
                                <Link to="/" style={{textDecoration: 'none'}}>
                                    <Typography
                                        variant='h1'>
                                        ForMixMatch
                                    </Typography>
                                </Link>
                                <Grid container direction="row">
                                    {sceneType}
                                    {!timerStop &&
                                    <Clock stop={timerStop}/>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </CardContent >
            </Card>
        </Grid>

    );
}

ProfileCard.defaultProps = {
    uid: 0,

    profile: '/images/mixmatch.png',

}
export default ProfileCard;