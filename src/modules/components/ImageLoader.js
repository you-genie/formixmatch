import React from 'react';

const pre_images = [
    {id: 100, src: '/images/1.jpg', selected: false, type: 'top'},
    {id: 101, src: '/images/2.jpg', selected: false, type: 'top'},
    {id: 102, src: '/images/3.jpg', selected: false, type: 'top'},
    {id: 103, src: '/images/4.jpg', selected: false, type: 'top'},
    {id: 104, src: '/images/5.jpg', selected: false, type: 'top'},
    {id: 105, src: '/images/6.jpg', selected: false, type: 'top'},
    {id: 106, src: '/images/7.jpg', selected: false, type: 'top'},
    {id: 107, src: '/images/8.jpg', selected: false, type: 'top'},
    {id: 108, src: '/images/9.jpg', selected: false, type: 'top'},
    {id: 109, src: '/images/10.jpg', selected: false, type: 'top'},
    {id: 110, src: '/images/bottom1.jpg', selected: false, type: 'bottom'},
    {id: 111, src: '/images/bottom2.jpg', selected: false, type: 'bottom'},
    {id: 112, src: '/images/bottom3.jpg', selected: false, type: 'bottom'},
    {id: 113, src: '/images/bottom4.jpg', selected: false, type: 'bottom'},
    {id: 114, src: '/images/bottom5.jpg', selected: false, type: 'bottom'},
    {id: 115, src: '/images/bottom6.jpg', selected: false, type: 'bottom'},
    {id: 116, src: '/images/bottom7.jpg', selected: false, type: 'bottom'},
    {id: 117, src: '/images/bottom8.jpg', selected: false, type: 'bottom'},
    {id: 118, src: '/images/bottom9.jpg', selected: false, type: 'bottom'},
    {id: 119, src: '/images/bottom10.jpg', selected: false, type: 'bottom'},
];

const one_images = [

];

const two_images = [

];

function preLoader() {
    return pre_images;
}

function oneLoader() {
    return one_images;
}

function twoLoader() {
    return two_images;
}

export {preLoader, oneLoader, twoLoader};