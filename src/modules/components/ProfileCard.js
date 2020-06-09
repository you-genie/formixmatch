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
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ProfileImg from '../../assets/icons/profile.jpg';
import theme from "../theme";
import TextButton from "./TextButton";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        margin: theme.spacing(1),
    },
    upCard: {
        display: 'flex',
    },
    downCard: {
        width: '100%'
    },
    downCardContent: {
        paddingLeft: theme.spacing(1),
        paddingTop: theme.spacing(0)
    },
    name: {
        margin: theme.spacing(8, 1, 1, 0),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0, 1, 1, 0),
        }
    },
    profileImg: {
        width: '80px',
        height: '80px',
        marginLeft: theme.spacing(1),
    },
    profileIcon: {
        width: '10px',
        height: '10px',
        margin: theme.spacing(-5, 7),
    },
    infoGrid: {
        flex: 1,
        margin: theme.spacing(0, 2, 2, 2),
    },
}))

function ProfileCard(props) {
    const {id, uid, statistics, name, profile, description, sites} = props;
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
                    <Avatar
                        className={classes.profileImg}
                            src={profile} />
                    <div
                        className={classes.profileIcon}>
                        <IconButton disabled>
                            <AddCircleIcon color='primary'/>
                        </IconButton>
                    </div>

                </CardMedia>
                <CardContent style={{width: '70%'}}>
                    <Grid
                        container
                        direction='row'
                        justify='space-around'
                        className={classes.infoGrid}>
                        <TextButton
                            id='feeds'
                            statistics={statistics.feeds}
                            description='게시물' />
                        <TextButton
                            id='followers'
                            statistics={statistics.followers}
                            description='팔로워' />
                        <TextButton
                            id='following'
                            statistics={statistics.following}
                            description='팔로잉' />
                    </Grid>
                </CardContent >
            </Card>
            <Card
                className={classes.downCard}
                elevation='0'>
                <CardContent
                    className={classes.downCardContent}>
                    <Grid
                        direction='column'
                        container>
                        <Typography
                            variant='boldbody'>
                            {name}
                        </Typography>
                        <Typography
                            variant='body2'>
                            {description}
                        </Typography>
                        {sites.map((site)=> (
                            <Link href={site} onClick={preventDefault}>
                                <Typography
                                    variant='caption'>
                                    {site}
                                </Typography>
                            </Link>
                        ))}
                    </Grid>


                </CardContent>
            </Card>
        </Grid>

    );
}

ProfileCard.defaultProps = {
    id: 'itz_sammu_time',
    uid: 0,
    statistics: {
        feeds: 23,
        followers: 445,
        following: 423,
    },
    profile: '/users/1234.jpg',
    name: '김채원',
    description: '테스트 계정입니다 :) 덕질은 그저 거들뿐 ㅎ.... 더 뭐 쓰지 모르겠당',
    sites: [
        'https://github.com/you-genie/gallery_react/'
    ],
}
export default ProfileCard;