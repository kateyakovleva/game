import { useEffect, useState } from 'react';
import './app.scss';
import Block from './components/Block';
import { images } from './components/data/pictures';

function clone(obj){
  return JSON.parse(JSON.stringify(obj));
}

function App() {
  const [width, setWidth] = useState(0);
  const [blocks, setBlocks] = useState(images);
  let success = true;

  blocks.map(function(block, index) {
    if(block.rotate !== 0 || block.index !== index) {
      success = false;
    }
  }) 

  function rotatePicture(index) {
    let rotate = blocks[index].rotate + 90;
    if(rotate >= 360) {
      rotate = 0;
    }

    blocks[index].rotate = rotate;
    setBlocks(clone(blocks))
  }

  useEffect(function() {
    setWidth(document.getElementsByClassName('app')[0].clientWidth - 20)
  }, []);

  function changeBlock(index1, index2) {
    let firstBlock = clone(blocks[index1]);
    blocks[index1] = clone(blocks[index2]);
    blocks[index2] = firstBlock;
    setBlocks(clone(blocks));
  }

  return (
    <div className="app">
      {blocks.map((block, index) => 
        <Block 
          width={width} 
          block={block} 
          rotate={rotatePicture} 
          number={index} 
          changeBlock={changeBlock}
        />
      )}
      {success ? <div className='popup'>Вы победили!!!</div> : ""}
    </div>
  );
}

export default App;

