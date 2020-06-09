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
import TextButton from "./TextButton";

const useStyles = makeStyles((theme) => ({
    root: {
        justifySelf: 'center',
        alignItems: 'center',
        justify: 'center',
        margin: theme.spacing(1),
    },
    upCard: {
        height: theme.spacing(10),
        display: 'flex',
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
    },
    infoGrid: {
        justifyItems: 'center',
        alignItems: 'center',
        flex: 1,
        marginBottom: theme.spacing(2)
    },
    cardContentGrid: {
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(0),
        },
        marginLeft: theme.spacing(2),
    }
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
                </CardMedia>
                <CardContent >
                    <Grid
                        container
                        direction='row'
                        justify='space-between'
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
            <Card>
                sdf
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