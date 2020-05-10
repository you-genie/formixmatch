import React from 'react';

const images = [
    {id: 0, src: '/images/1.jpg', description: '2020-03-02'},
    {id: 1, src: '/images/2.jpg', description: '2020-03-12'},
    {id: 2, src: '/images/3.jpg', description: '2020-04-02'},
    {id: 3, src: '/images/4.jpg', description: '2020-04-03'},
    {id: 4, src: '/images/5.jpg', description: '2020-04-21'},
    {id: 5, src: '/images/6.jpg', description: '2020-04-22'},
    {id: 6, src: '/images/7.jpg', description: '2020-05-02'},
    {id: 7, src: '/images/8.jpg', description: '2020-05-12'},
    {id: 8, src: '/images/9.jpg', description: '2020-05-12'},
    {id: 9, src: '/images/10.jpg', description: '2020-05-13'},
]

function imageLoader() {
    return images;
}

export default imageLoader;