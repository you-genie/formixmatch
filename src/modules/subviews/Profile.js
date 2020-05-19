import React from 'react';
import {makeStyles} from '@material-ui/core/styles/';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import SettingIcon from '@material-ui/icons/Settings';
import ProfileImg from '../../assets/icons/profile.jpg';
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
    root: {
        justifySelf: 'center',
        alignItems: 'center',
        justify: 'center',
        margin: theme.spacing(1),
    },
    card: {
        position: 'relative',
        justifySelf: 'center',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    cover: {
    },
    name: {
        margin: theme.spacing(8, 1, 1, 0),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0, 1, 1, 0),
        }
    },
    profileImg: {
        width: '150px',
        height: '150px',
        [theme.breakpoints.down('sm')]: {
            width: '100px',
            height: '100px',
            margin: theme.spacing(0, 4)
        },
        margin: theme.spacing(8, 0, 0),
    },
    profileButton: {
        margin: theme.spacing(0, 0, 3, 3),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0, 0, 0, 2),
            paddingBottom: theme.spacing(2)
        },
    },
    infoGrid: {
        justifyItems: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0),
            paddingTop: theme.spacing(-1)
        }
    },
    cardContentGrid: {
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(0),
        },
        marginLeft: theme.spacing(2),
    }
}))

function Profile(props) {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <Grid
            container
            direction='column'
            className={classes.root}>
            <Card
                elevation='0'
                className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    title="Youjin Chung" >
                    <Avatar
                        className={classes.profileImg}
                            src={ProfileImg} />
                </CardMedia>
                <CardContent >
                    <Grid
                        className={classes.cardContentGrid}>
                        <Grid
                            className={classes.name}
                            container
                            direction='row'
                        >
                            <Typography
                                variant="h4" color="textSecondary">
                                Chaewon Kim
                            </Typography>
                            <IconButton
                                className={classes.profileButton}
                            >
                                <SettingIcon />
                            </IconButton>
                        </Grid>
                        <Grid
                            container
                            direction='row'
                            justify='space-between'
                            xs={10}
                            sm={10}
                            lg={12}
                            className={classes.infoGrid}>
                            <Typography variant='caption1'>
                                게시물 3
                            </Typography>
                            <Typography variant='caption1'>
                                팔로워 1
                            </Typography>
                            <Typography variant='caption1'>
                                팔로우 1
                            </Typography>
                        </Grid>
                        <Typography variant='subtitle1'>
                            김채원
                        </Typography>
                        <Typography
                            variant="body2">
                            테스트 계정입니다 :) 덕질은 그저 거들뿐 ㅎ..
                            더 뭐 쓰지
                            모르겠당
                        </Typography>
                        <Typography
                            variant='caption'>
                            <Link
                                href='#'
                                color='primary'
                                onClick={preventDefault}>
                                <Typography
                                    variant="body2">
                                    https://github.com/you-genie/gallery_react/
                                </Typography>
                            </Link>
                        </Typography>
                    </Grid>

                </CardContent >
            </Card>
        </Grid>

    );
}

export default Profile;