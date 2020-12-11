import React from 'react';

const pre_images = {
    top: [
        {id: 't1', src: '/experiment/zero/top/1.png', selected: false},
        {id: 't2', src: '/experiment/zero/top/2.png', selected: false},
        {id: 't3', src: '/experiment/zero/top/3.png', selected: false},
        {id: 't4', src: '/experiment/zero/top/4.png', selected: false},
        {id: 't5', src: '/experiment/zero/top/5.png', selected: false},
        {id: 't6', src: '/experiment/zero/top/6.png', selected: false},
        {id: 't7', src: '/experiment/zero/top/7.png', selected: false},
        {id: 't8', src: '/experiment/zero/top/8.png', selected: false},
        {id: 't9', src: '/experiment/zero/top/9.png', selected: false},
        {id: 't10', src: '/experiment/zero/top/10.png', selected: false},
        {id: 't11', src: '/experiment/zero/top/11.png', selected: false},
        {id: 't12', src: '/experiment/zero/top/12.png', selected: false},
    ],
    topFull: [
        {id: 't1', src: '/experiment/zero/top/full/1.png', selected: false},
        {id: 't2', src: '/experiment/zero/top/full/2.png', selected: false},
        {id: 't3', src: '/experiment/zero/top/full/3.png', selected: false},
        {id: 't4', src: '/experiment/zero/top/full/4.png', selected: false},
        {id: 't5', src: '/experiment/zero/top/full/5.png', selected: false},
        {id: 't6', src: '/experiment/zero/top/full/6.png', selected: false},
        {id: 't7', src: '/experiment/zero/top/full/7.png', selected: false},
        {id: 't8', src: '/experiment/zero/top/full/8.png', selected: false},
        {id: 't9', src: '/experiment/zero/top/full/9.png', selected: false},
        {id: 't10', src: '/experiment/zero/top/full/10.png', selected: false},
        {id: 't11', src: '/experiment/zero/top/full/11.png', selected: false},
        {id: 't12', src: '/experiment/zero/top/full/12.png', selected: false},
    ],
    bottom: [
        {id: 'b1', src: '/experiment/zero/bottom/1.png', selected: false},
        {id: 'b2', src: '/experiment/zero/bottom/2.png', selected: false},
        {id: 'b3', src: '/experiment/zero/bottom/3.png', selected: false},
        {id: 'b4', src: '/experiment/zero/bottom/4.png', selected: false},
        {id: 'b5', src: '/experiment/zero/bottom/5.png', selected: false},
        {id: 'b6', src: '/experiment/zero/bottom/6.png', selected: false},
        {id: 'b7', src: '/experiment/zero/bottom/7.png', selected: false},
        {id: 'b8', src: '/experiment/zero/bottom/8.png', selected: false},
        {id: 'b9', src: '/experiment/zero/bottom/9.png', selected: false},
        {id: 'b10', src: '/experiment/zero/bottom/10.png', selected: false},
        {id: 'b11', src: '/experiment/zero/bottom/11.png', selected: false},
        {id: 'b12', src: '/experiment/zero/bottom/12.png', selected: false},
    ],
    bottomFull: [
        {id: 'b1', src: '/experiment/zero/bottom/full/1.png', selected: false},
        {id: 'b2', src: '/experiment/zero/bottom/full/2.png', selected: false},
        {id: 'b3', src: '/experiment/zero/bottom/full/3.png', selected: false},
        {id: 'b4', src: '/experiment/zero/bottom/full/4.png', selected: false},
        {id: 'b5', src: '/experiment/zero/bottom/full/5.png', selected: false},
        {id: 'b6', src: '/experiment/zero/bottom/full/6.png', selected: false},
        {id: 'b7', src: '/experiment/zero/bottom/full/7.png', selected: false},
        {id: 'b8', src: '/experiment/zero/bottom/full/8.png', selected: false},
        {id: 'b9', src: '/experiment/zero/bottom/full/9.png', selected: false},
        {id: 'b10', src: '/experiment/zero/bottom/full/10.png', selected: false},
        {id: 'b11', src: '/experiment/zero/bottom/full/11.png', selected: false},
        {id: 'b12', src: '/experiment/zero/bottom/full/12.png', selected: false},
    ],
}

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

const three_images = {
    top: [
        {id: 't1', src: '/experiment/three/top/top1.png', selected: false},
        {id: 't2', src: '/experiment/three/top/top2.png', selected: false},
        {id: 't3', src: '/experiment/three/top/top3.png', selected: false},
        {id: 't4', src: '/experiment/three/top/top4.png', selected: false},
        {id: 't5', src: '/experiment/three/top/top5.png', selected: false},
        {id: 't6', src: '/experiment/three/top/top6.png', selected: false},
    ],
    bottom: [
        {id: 'b1', src: '/experiment/three/bottom/bottom1.png', selected: false},
        {id: 'b2', src: '/experiment/three/bottom/bottom2.png', selected: false},
        {id: 'b3', src: '/experiment/three/bottom/bottom3.png', selected: false},
        {id: 'b4', src: '/experiment/three/bottom/bottom4.png', selected: false},
        {id: 'b5', src: '/experiment/three/bottom/bottom5.png', selected: false},
        {id: 'b6', src: '/experiment/three/bottom/bottom6.png', selected: false},
    ],
    mixMatch: [
        {id: '11', src: '/experiment/three/11.png', top: 't1', bottom: 'b1'},
        {id: '12', src: '/experiment/three/12.png', top: 't2', bottom: 'b1'},
        {id: '13', src: '/experiment/three/13.png', top: 't3', bottom: 'b1'},
        {id: '14', src: '/experiment/three/14.png', top: 't4', bottom: 'b1'},
        {id: '15', src: '/experiment/three/15.png', top: 't5', bottom: 'b1'},
        {id: '16', src: '/experiment/three/16.png', top: 't6', bottom: 'b1'},
        {id: '21', src: '/experiment/three/21.png', top: 't1', bottom: 'b2'},
        {id: '22', src: '/experiment/three/22.png', top: 't2', bottom: 'b2'},
        {id: '23', src: '/experiment/three/23.png', top: 't3', bottom: 'b2'},
        {id: '24', src: '/experiment/three/24.png', top: 't4', bottom: 'b2'},
        {id: '25', src: '/experiment/three/25.png', top: 't5', bottom: 'b2'},
        {id: '26', src: '/experiment/three/26.png', top: 't6', bottom: 'b2'},
        {id: '31', src: '/experiment/three/31.png', top: 't1', bottom: 'b3'},
        {id: '32', src: '/experiment/three/32.png', top: 't2', bottom: 'b3'},
        {id: '33', src: '/experiment/three/33.png', top: 't3', bottom: 'b3'},
        {id: '34', src: '/experiment/three/34.png', top: 't4', bottom: 'b3'},
        {id: '35', src: '/experiment/three/35.png', top: 't5', bottom: 'b3'},
        {id: '36', src: '/experiment/three/36.png', top: 't6', bottom: 'b3'},
        {id: '41', src: '/experiment/three/41.jpg', top: 't1', bottom: 'b4'},
        {id: '42', src: '/experiment/three/42.jpg', top: 't2', bottom: 'b4'},
        {id: '43', src: '/experiment/three/43.jpg', top: 't3', bottom: 'b4'},
        {id: '44', src: '/experiment/three/44.jpg', top: 't4', bottom: 'b4'},
        {id: '45', src: '/experiment/three/45.jpg', top: 't5', bottom: 'b4'},
        {id: '46', src: '/experiment/three/46.jpg', top: 't6', bottom: 'b4'},
        {id: '51', src: '/experiment/three/51.jpg', top: 't1', bottom: 'b5'},
        {id: '52', src: '/experiment/three/52.jpg', top: 't2', bottom: 'b5'},
        {id: '53', src: '/experiment/three/53.jpg', top: 't3', bottom: 'b5'},
        {id: '54', src: '/experiment/three/54.jpg', top: 't4', bottom: 'b5'},
        {id: '55', src: '/experiment/three/55.jpg', top: 't5', bottom: 'b5'},
        {id: '56', src: '/experiment/three/56.jpg', top: 't6', bottom: 'b5'},
        {id: '61', src: '/experiment/three/61.jpg', top: 't1', bottom: 'b6'},
        {id: '62', src: '/experiment/three/62.jpg', top: 't2', bottom: 'b6'},
        {id: '63', src: '/experiment/three/63.jpg', top: 't3', bottom: 'b6'},
        {id: '64', src: '/experiment/three/64.jpg', top: 't4', bottom: 'b6'},
        {id: '65', src: '/experiment/three/65.jpg', top: 't5', bottom: 'b6'},
        {id: '66', src: '/experiment/three/66.jpg', top: 't6', bottom: 'b6'},
    ],
};

function randomArray(num, max, array) {
    if (! array) {
        var array = [];
    }
    let n = Math.floor(Math.random()*max);

    if (array.length < 6 && array.indexOf(n) < 0) {
        array.push(n);
        return randomArray(num, max, array);
    } else if (array.length < num) {
        return randomArray(num, max, array);
    } else {
        return array;
    }
}

var experiment_indices = randomArray(4, 4);
experiment_indices = experiment_indices.map((n) => {return n + 1;});
console.log("experiment 순서");
console.log(experiment_indices);
const indices = randomArray(3, 3);
console.log("dataset log");
console.log(indices);
const datasets = [one_images, two_images, three_images];

var dataset1 = datasets[indices[0]];
var dataset2 = datasets[indices[1]];
var dataset3 = datasets[indices[2]];


function preLoader() {
    const indices = randomArray(6, 12);
    let ret_images = {top: [], topFull: [], bottom: [], bottomFull: []};

    indices.map((idx) => {
        ret_images.top.push(pre_images.top[idx]);
        ret_images.topFull.push(pre_images.topFull[idx]);
        ret_images.bottom.push(pre_images.bottom[idx]);
        ret_images.bottomFull.push(pre_images.bottomFull[idx]);
    });

    return ret_images;
}

function oneLoader() {
    return dataset1;
}

function twoLoader() {
    return dataset2;
}

function threeLoader() {
    return dataset3;
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

function anyLoader(idx) {
    switch (idx) {
        case 0:
            return one_images;
        case 1:
            return two_images;
        case 2:
            return three_images;
    }
}

export {randomArray, preLoader, oneLoader, twoLoader, threeLoader, randomLoader, anyLoader};