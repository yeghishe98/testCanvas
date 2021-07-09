import './test.css';
import { useState, useEffect, useRef } from 'react';

// const handleJpg = (canvasRef) => {
//     let ctx = canvasRef.current.getContext('2d');
//     let img = new Image();
//     img.onload = function() {
//         ctx.drawImage(img, 20, 30, 120, 90);
//     }
//     img.src = "https://cdn.statically.io/img/i.pinimg.com/originals/7d/9f/8b/7d9f8b929315d50ddae5c2879bb17a16.jpg";
// }
//
// const handlePng = (canvasRef) => {
//     let ctx = canvasRef.current.getContext('2d');
//     let img = new Image();
//     img.onload = function() {
//         ctx.drawImage(img, 160, 30, 120, 90);
//     }
//     img.src = "https://www.freepnglogos.com/uploads/tiger-png/tiger-png-2.png";
// }
//
const obj_format = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png"
}

function Foo() {

  const [format, setFormat] = useState('jpg');

  const [choose, setChoose] = useState(false);

  const [coaliti, setCoaliti] = useState(1);

  const inputRef = useRef(null);

  const canvasRef = useRef(null);

  const handleChangeChoose = () => {
    const file = inputRef.current.files[0];

    const reader = new FileReader();
    const ctx = canvasRef.current.getContext('2d');

    reader.addEventListener("load", function () {
      const image = new Image();
      image.src = reader.result;
      console.log(canvasRef.current.width,canvasRef.current.height)
      let image_width = (canvasRef.current.width - 100);
      let image_height = ((canvasRef.current.width - 100)/canvasRef.current.width) * canvasRef.current.height;
      image.onload = function() {
           ctx.drawImage(image, 10, 10, image_width, image_height);
         }
    }, false);

    reader.readAsDataURL(file);

  }



   const downloadImage = () => {
     let x = obj_format[format];
     console.log(x);
     const canvas = canvasRef.current;
     const image = canvas.toDataURL(x, coaliti);
     const a = document.createElement('a');
     a.href = image;
     a.download = 'filename';
     document.body.appendChild(a);
     a.click();
  }

  const handleChangeFormat = (e) => {
    setFormat(e.target.value);
  }

  const handleCoaliti = (e) => {
    setCoaliti(Number(e.target.value));
  }

  const handleChooseChange = () => {
    setChoose(true);
  }

  return (
    <div>
      <canvas ref={canvasRef} width={1000} height={500} />

      <div>
        <input type="file" ref={inputRef} onChange={handleChooseChange} />

        {choose ?
          (
            <>
              <button onClick={handleChangeChoose}>Load Image</button>

              <select onChange={handleChangeFormat}>
                <option value="jpg">JPG</option>
                <option value="png">PNG</option>
              </select>

              {format === 'jpg' ?
                <select onChange={handleCoaliti}>
                  <option value={1}>1</option>
                  <option value={0.5}>0.5</option>
                  <option value={0}>0</option>
                </select> : null
              }

              <button onClick={downloadImage}>Download</button>
            </>
          ) : null}
      </div>
    </div>
  )
}
export default Foo

