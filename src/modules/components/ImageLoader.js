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

const one_images = {
    top: [
        {id: 't1', src: '/experiment/one/top/top1.png', selected: false},
        {id: 't2', src: '/experiment/one/top/top2.png', selected: false},
        {id: 't3', src: '/experiment/one/top/top3.png', selected: false},
        {id: 't4', src: '/experiment/one/top/top4.png', selected: false},
        {id: 't5', src: '/experiment/one/top/top5.png', selected: false},
        {id: 't6', src: '/experiment/one/top/top6.png', selected: false},
    ],
    bottom: [
        {id: 'b1', src: '/experiment/one/bottom/bottom1.png', selected: false},
        {id: 'b2', src: '/experiment/one/bottom/bottom2.png', selected: false},
        {id: 'b3', src: '/experiment/one/bottom/bottom3.png', selected: false},
        {id: 'b4', src: '/experiment/one/bottom/bottom4.png', selected: false},
        {id: 'b5', src: '/experiment/one/bottom/bottom5.png', selected: false},
        {id: 'b6', src: '/experiment/one/bottom/bottom6.png', selected: false},
    ],
    mixMatch: [
        {id: '11', src: '/experiment/one/11.png', top: 't1', bottom: 'b1'},
        {id: '12', src: '/experiment/one/12.png', top: 't2', bottom: 'b1'},
        {id: '13', src: '/experiment/one/13.png', top: 't3', bottom: 'b1'},
        {id: '14', src: '/experiment/one/14.png', top: 't4', bottom: 'b1'},
        {id: '15', src: '/experiment/one/15.png', top: 't5', bottom: 'b1'},
        {id: '16', src: '/experiment/one/16.png', top: 't6', bottom: 'b1'},
        {id: '21', src: '/experiment/one/21.png', top: 't1', bottom: 'b2'},
        {id: '22', src: '/experiment/one/22.png', top: 't2', bottom: 'b2'},
        {id: '23', src: '/experiment/one/23.png', top: 't3', bottom: 'b2'},
        {id: '24', src: '/experiment/one/24.png', top: 't4', bottom: 'b2'},
        {id: '25', src: '/experiment/one/25.png', top: 't5', bottom: 'b2'},
        {id: '26', src: '/experiment/one/26.png', top: 't6', bottom: 'b2'},
        {id: '31', src: '/experiment/one/31.png', top: 't1', bottom: 'b3'},
        {id: '32', src: '/experiment/one/32.png', top: 't2', bottom: 'b3'},
        {id: '33', src: '/experiment/one/33.png', top: 't3', bottom: 'b3'},
        {id: '34', src: '/experiment/one/34.png', top: 't4', bottom: 'b3'},
        {id: '35', src: '/experiment/one/35.png', top: 't5', bottom: 'b3'},
        {id: '36', src: '/experiment/one/36.png', top: 't6', bottom: 'b3'},
        {id: '41', src: '/experiment/one/41.png', top: 't1', bottom: 'b4'},
        {id: '42', src: '/experiment/one/42.png', top: 't2', bottom: 'b4'},
        {id: '43', src: '/experiment/one/43.png', top: 't3', bottom: 'b4'},
        {id: '44', src: '/experiment/one/44.png', top: 't4', bottom: 'b4'},
        {id: '45', src: '/experiment/one/45.png', top: 't5', bottom: 'b4'},
        {id: '46', src: '/experiment/one/46.png', top: 't6', bottom: 'b4'},
        {id: '51', src: '/experiment/one/51.png', top: 't1', bottom: 'b5'},
        {id: '52', src: '/experiment/one/52.png', top: 't2', bottom: 'b5'},
        {id: '53', src: '/experiment/one/53.png', top: 't3', bottom: 'b5'},
        {id: '54', src: '/experiment/one/54.png', top: 't4', bottom: 'b5'},
        {id: '55', src: '/experiment/one/55.png', top: 't5', bottom: 'b5'},
        {id: '56', src: '/experiment/one/56.png', top: 't6', bottom: 'b5'},
        {id: '61', src: '/experiment/one/61.png', top: 't1', bottom: 'b6'},
        {id: '62', src: '/experiment/one/62.png', top: 't2', bottom: 'b6'},
        {id: '63', src: '/experiment/one/63.png', top: 't3', bottom: 'b6'},
        {id: '64', src: '/experiment/one/64.png', top: 't4', bottom: 'b6'},
        {id: '65', src: '/experiment/one/65.png', top: 't5', bottom: 'b6'},
        {id: '66', src: '/experiment/one/66.png', top: 't6', bottom: 'b6'},
    ],
}

const two_images = {
    top: [
        {id: 't1', src: '/experiment/two/top/top1.png', selected: false},
        {id: 't2', src: '/experiment/two/top/top2.png', selected: false},
        {id: 't3', src: '/experiment/two/top/top3.png', selected: false},
        {id: 't4', src: '/experiment/two/top/top4.png', selected: false},
        {id: 't5', src: '/experiment/two/top/top5.png', selected: false},
        {id: 't6', src: '/experiment/two/top/top6.png', selected: false},
    ],
    bottom: [
        {id: 'b1', src: '/experiment/two/bottom/bottom1.png', selected: false},
        {id: 'b2', src: '/experiment/two/bottom/bottom2.png', selected: false},
        {id: 'b3', src: '/experiment/two/bottom/bottom3.png', selected: false},
        {id: 'b4', src: '/experiment/two/bottom/bottom4.png', selected: false},
        {id: 'b5', src: '/experiment/two/bottom/bottom5.png', selected: false},
        {id: 'b6', src: '/experiment/two/bottom/bottom6.png', selected: false},
    ],
    mixMatch: [
        {id: '11', src: '/experiment/two/11.png', top: 't1', bottom: 'b1'},
        {id: '12', src: '/experiment/two/12.png', top: 't2', bottom: 'b1'},
        {id: '13', src: '/experiment/two/13.png', top: 't3', bottom: 'b1'},
        {id: '14', src: '/experiment/two/14.png', top: 't4', bottom: 'b1'},
        {id: '15', src: '/experiment/two/15.png', top: 't5', bottom: 'b1'},
        {id: '16', src: '/experiment/two/16.png', top: 't6', bottom: 'b1'},
        {id: '21', src: '/experiment/two/21.png', top: 't1', bottom: 'b2'},
        {id: '22', src: '/experiment/two/22.png', top: 't2', bottom: 'b2'},
        {id: '23', src: '/experiment/two/23.png', top: 't3', bottom: 'b2'},
        {id: '24', src: '/experiment/two/24.png', top: 't4', bottom: 'b2'},
        {id: '25', src: '/experiment/two/25.png', top: 't5', bottom: 'b2'},
        {id: '26', src: '/experiment/two/26.png', top: 't6', bottom: 'b2'},
        {id: '31', src: '/experiment/two/31.png', top: 't1', bottom: 'b3'},
        {id: '32', src: '/experiment/two/32.png', top: 't2', bottom: 'b3'},
        {id: '33', src: '/experiment/two/33.png', top: 't3', bottom: 'b3'},
        {id: '34', src: '/experiment/two/34.png', top: 't4', bottom: 'b3'},
        {id: '35', src: '/experiment/two/35.png', top: 't5', bottom: 'b3'},
        {id: '36', src: '/experiment/two/36.png', top: 't6', bottom: 'b3'},
        {id: '41', src: '/experiment/two/41.png', top: 't1', bottom: 'b4'},
        {id: '42', src: '/experiment/two/42.png', top: 't2', bottom: 'b4'},
        {id: '43', src: '/experiment/two/43.png', top: 't3', bottom: 'b4'},
        {id: '44', src: '/experiment/two/44.png', top: 't4', bottom: 'b4'},
        {id: '45', src: '/experiment/two/45.png', top: 't5', bottom: 'b4'},
        {id: '46', src: '/experiment/two/46.png', top: 't6', bottom: 'b4'},
        {id: '51', src: '/experiment/two/51.png', top: 't1', bottom: 'b5'},
        {id: '52', src: '/experiment/two/52.png', top: 't2', bottom: 'b5'},
        {id: '53', src: '/experiment/two/53.png', top: 't3', bottom: 'b5'},
        {id: '54', src: '/experiment/two/54.png', top: 't4', bottom: 'b5'},
        {id: '55', src: '/experiment/two/55.png', top: 't5', bottom: 'b5'},
        {id: '56', src: '/experiment/two/56.png', top: 't6', bottom: 'b5'},
        {id: '61', src: '/experiment/two/61.png', top: 't1', bottom: 'b6'},
        {id: '62', src: '/experiment/two/62.png', top: 't2', bottom: 'b6'},
        {id: '63', src: '/experiment/two/63.png', top: 't3', bottom: 'b6'},
        {id: '64', src: '/experiment/two/64.png', top: 't4', bottom: 'b6'},
        {id: '65', src: '/experiment/two/65.png', top: 't5', bottom: 'b6'},
        {id: '66', src: '/experiment/two/66.png', top: 't6', bottom: 'b6'},
    ],
};

const three_images = {...two_images};

function preLoader() {
    return pre_images;
}

function oneLoader() {
    return one_images;
}

function twoLoader() {
    return two_images;
}

function threeLoader() {
    return three_images;
}

function randomLoader() {
    let idx = Math.floor(Math.random()*(3));
    switch (idx) {
        case 0:
            return one_images;
        case 1:
            return two_images;
        case 2:
            return three_images;
    }
}

export {preLoader, oneLoader, twoLoader, threeLoader, randomLoader};