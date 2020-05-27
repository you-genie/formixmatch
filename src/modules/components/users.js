import React from 'react';

const users = {
    '1234': {
        name: '김채원',
        id: 'itz_sammu_time',
        enName: 'Chaewon Kim',
        profile: '/users/1234.jpg'
    },
    '4321': {
        name: '장원영',
        id: 'long_long',
        enName: 'Wonyong Jang',
        profile: '/users/4321.jpg'
    },
    '3333': {
        name: '김민주',
        id: 'frog_lady',
        enName: 'Minju Kim',
        profile: '/users/3333.jpg'
    }
}

function userLoader() {
    return users;
}

export default userLoader;