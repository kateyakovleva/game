import piece1 from '../../images/1.jpg';
import piece2 from '../../images/2.jpg';
import piece3 from '../../images/3.jpg';
import piece4  from '../../images/4.jpg';
import piece5  from '../../images/5.jpg';
import piece6  from '../../images/6.jpg';

const degrees = [
    0,
    90,
    180,
    240
]; 

let pictures = [
    {
       image: piece1,
       index: 0,
    },

    {
        image: piece2,
        index: 1,
    },

    {
       image: piece3,
       index: 2,
    },

    {
       image: piece4,
       index: 3,
    },

    {
       image: piece5,
       index: 4,
    },

    {
       image: piece6,
       index: 5,
    }
]

function mixarray(arr){
    return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1])
} 

pictures = mixarray(pictures)

function getRandomDeg() {
    let key = getRandomInt(3);

    return degrees[key];
}
// получение рандомного числа от 0 до мах
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const images = [
    {
        image: pictures[0].image,
        index: pictures[0].index,
        rotate: getRandomDeg()
    },

    {
        image: pictures[1].image,
        index: pictures[1].index,
        rotate: getRandomDeg()
    },

    {
        image: pictures[2].image,
        index: pictures[2].index,
        rotate: getRandomDeg()
    },

    {
        image: pictures[3].image,
        index: pictures[3].index,
        rotate: getRandomDeg()
    },

    {
        image: pictures[4].image,
        index: pictures[4].index,
        rotate: getRandomDeg()
    },

    {
        image: pictures[5].image,
        index: pictures[5].index,
        rotate: getRandomDeg()
    }
    
]