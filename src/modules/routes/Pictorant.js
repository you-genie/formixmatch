import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles/';
import imageLoader from "../components/images";
import userLoader from "../components/users";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ProfileImg from "../../assets/icons/profile.jpg";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentBox from "../components/CommentBox";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '50%',
        [theme.breakpoints.down('md')]: {
            width: '70%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    commentBox: {
      paddingTop: theme.spacing(6),
    },
    infoSection: {
        paddingTop: theme.spacing(2),
    },
    image: {
        height: '500px',
    }
}));


function loadPic(index) {
    // return picture value (now hard-coded value.
    const pictureValue = imageLoader()[index]

    const value = {
        url: pictureValue.src,
        date: pictureValue.description,
        user: {
            name: 'Chaewon',
            id: 'itz_ssammu_time',
            uid: '1234',
        },
        info: {
            likes: 13,
            tags: [
                'cute',
                'love',
                'cat',
            ],
            description: '아 졸려 죽겠땅 도대체 뭘 써야 하지 꺄륵'
        },
        comments: [
            {
                uid: '4321',
                body: '오 귀엽땅',
                likes: 13,
                comments: []
            },
            {
                uid: '3333',
                body: '으앙',
                likes: 15,
                comments: [
                    {
                        uid: '1234',
                        body: '이힁',
                        likes: 0,
                        comments: []
                    },
                    {
                        uid: '4321',
                        body: '아 배고파',
                        likes: 1,
                        comments: [
                            {
                                uid: '1234',
                                body: '마카롱먹구싶땅',
                                likes: 1,
                                comments: [],
                            }
                        ]
                    },
                    {
                        uid: '1234',
                        body: '나두',
                        likes: 0,
                        comments: []
                    },
                ]
            },
            {
                uid: '4321',
                body: '히히히히 근데 큰일났땅 졸려 죽겟땅',
                likes: 3,
                comments: []
            },
            {
                uid: '3333',
                body: '체원언니 몰래 먹은거 은비언니한테 다 일러야지',
                likes: 3,
                comments: [
                    {
                        uid: '1234',
                        body: '헐 너무해',
                        likes: 0,
                        comments: []
                    }
                ]
            }
        ]
    }
    return value
}

function Pictorant(props) {
    const {pictureIndex} = props;
    const classes = useStyles();
    const pictureValue = loadPic(1);
    const users = userLoader();

    return (
        <Grid
            container
            className={classes.root}>
            <Card
                elevation={0}
                className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar
                            src={users["1234"].profile} />
                    }
                    title={users["1234"].id}
                    subheader={pictureValue.date}
                    action={
                        <IconButton aria-label='settings'>
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
                <CardMedia
                    className={classes.image}
                    image={pictureValue.url}
                    title='lala'/>
                <CardContent>
                    <Typography varient='body2' color='textSecondary'>
                        <b>{pictureValue.user.id}</b> {pictureValue.info.description}
                    </Typography>
                    <div
                        className={classes.infoSection}>
                        <Typography varient='subtitle2' color='textSecondary'>
                            {pictureValue.info.tags.map((tag) => (
                                <b>#{tag} </b>
                            ))}
                        </Typography>
                        <Typography variant='subtitle2'>
                            {pictureValue.info.likes}<b> likes this post.</b>
                        </Typography>
                    </div>

                    <div
                        className={classes.commentBox}>
                        {pictureValue.comments.map((comment) => {
                            return (
                                <CommentBox
                                    comment={comment} />
                            )
                        })}
                    </div>

                </CardContent>
            </Card>
        </Grid>
    );
}

export default Pictorant;