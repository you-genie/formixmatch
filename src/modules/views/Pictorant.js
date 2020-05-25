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
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {

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
                        comments: []
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
        <div>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar
                            src={users["1234"].profile} />
                    }
                    title={users["1234"].name}
                    subheader={pictureValue.date}
                    action={
                        <IconButton aria-label='settings'>
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
            </Card>
        </div>
    );
}

export default Pictorant;