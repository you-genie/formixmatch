import React from 'react';

const images = [
    {id: 0, src: '/images/1.jpg', description: '2020-03-02', type: 'video'},
    {id: 1, src: '/images/2.jpg', description: '2020-03-12', type: 'plain'},
    {id: 2, src: '/images/3.jpg', description: '2020-04-02', type: 'video'},
    {id: 3, src: '/images/4.jpg', description: '2020-04-03', type: 'plain'},
    {id: 4, src: '/images/5.jpg', description: '2020-04-21', type: 'multiple'},
    {id: 5, src: '/images/6.jpg', description: '2020-04-22', type: 'plain'},
    {id: 6, src: '/images/7.jpg', description: '2020-05-02', type: 'video'},
    {id: 7, src: '/images/8.jpg', description: '2020-05-12', type: 'multiple'},
    {id: 8, src: '/images/9.jpg', description: '2020-05-12', type: 'video'},
    {id: 9, src: '/images/10.jpg', description: '2020-05-13', type: 'plain'},
]

function imageLoader() {
    return images;
}

export default imageLoader;