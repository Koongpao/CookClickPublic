import Cropper from 'cropperjs';
import { useState } from 'react';

const GetImg = () => {
  const [img, setImg] = useState('');
  let cropper = "";
    return (
      <div className="flex justify-center">
        <div className="flex flex-wrap items-center max-w-md justify-center border-2 border-black">
          <div className="flex flex-auto align-middle justify-center border-2 border-black bg-gray-300 w-screen min-h-[40vh] m-4">
            <img id="frame" className="max-h-[40vh]" src={img} alt="uploaded-img" />
          </div>
          <form>
            <label className="flex flex-auto justify-center rounded-sm cursor-pointer px-4 py-2 mx-4 mb-2 bg-blue-500"
              onChange={
                event => {
                  setImg(URL.createObjectURL(event.target.files[0]))
                  const image = document.getElementById('frame');
                  let cropper = new Cropper(image);
                }
              }>
              <input type="file" className="hidden" />
              Add Picture
            </label>
          </form>
        </div>
      </div>
    )
  }


export default GetImg
