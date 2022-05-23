import React, { useEffect, useState } from "react";
import './block.scss';

function Block(props) {
    let size = props.width / 3;
    let number = props.number;
    let block = props.block;


    function rotatePicture(){
        props.rotate(number);
    }

    function toTop() {
        props.changeBlock(number, number - 3)
    }

    function toRight() {
        props.changeBlock(number, number + 1)
    }

    function toBottom() {
        props.changeBlock(number, number + 3)
    }

    function toLeft() {
        props.changeBlock(number, number - 1)
    }

    return (
        <div className="block" style={{ width: size + "px", height: size + "px" }}>
            <img 
                className="images" 
                src={block.image} 
                style={{ transform: "rotate(" + block.rotate + "deg)"}}
            />

            {[3,4,5].includes(number) ? 
                <button className="button-top non" onClick={toTop}>ВВЕРХ</button>
            :""}
            
            {[0,1,3,4].includes(number) ?
                <button className="button-right non" onClick={toRight}>ВПРАВО</button>
            :""}

            {[0,1,2].includes(number) ? 
                <button className="button-down non" onClick={toBottom}>ВНИЗ</button> 
            :""}

            {[1,2,4,5].includes(number) ? 
                <button className="button-left non" onClick={toLeft}>ВЛЕВО</button>
            :""}

            <button className="button-switch non" onClick={rotatePicture}>ПОВЕРНУТЬ</button>
        </div>
    )
}

export default Block;



  