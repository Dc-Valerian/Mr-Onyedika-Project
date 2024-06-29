import { useState, ChangeEvent } from "react";

const MainUploadPage: React.FC = () => {

  const [image, setImage] = useState<File | string>("");
  const [previewImage, setPreviewImage] = useState<string>("");



  const ImageOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        console.log('====================================');
        console.log(image);
        console.log('====================================');
      setImage(file);
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  };




  return (
    <div className="flex justify-center items-center flex-col mainUploadHolder">
      <div className="w-[90%] p-4 mt-5 flex h-[400px]  items-center justify-between uploadUploadHolder">
        <div className=" flex flex-col items-center justify-center w-[30%] h-[80%] uploadImageHold ">
          <div className="rounded-[10px] bg-gray-300 h-[250px] w-60 flex justify-center items-center uploadImageHolder">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                className="rounded-[10px] h-[92%] object-cover w-[92%]"
              />
            ) : (
              <div className="text-gray-500 text-2xl">Upload Image</div>
            )}
          </div>

          <label
            htmlFor="pix"
            className="bg-black text-white mt-4 px-4 py-2 rounded cursor-pointer uploadLabel"
          >
            Upload Image
          </label>
          <input
            onChange={ImageOnchange}
            id="pix"
            type="file"
            className="hidden"
          />
        </div>

        <div className="w-[68%] h-[80%] uploadBottom ">
          <div className=" flex items-center justify-between py-[10px] uploadInput ">
            <input
              placeholder="Enter Name"
              className="border border-gray-300 rounded px-2 py-[10px]  w-[24%] uploadMainInput"
            />

            <input
              placeholder="Enter Old Price"
              className="border border-gray-300 rounded px-2 py-[10px]  w-[24%] uploadMainInput "
            />
            <input
              placeholder="Enter New Price"
              className="border border-gray-300 rounded px-2 py-[10px]  w-[24%] uploadMainInput "
            />

            <select
              className="border border-gray-300 rounded px-2 py-[10px]  w-[24%]  uploadMainInput h-[45px]"
            >
                <option>valei</option>
            </select>
          </div>
          <div className="flex items-center justify-between p-[10px] uploadInput">
            <textarea
              placeholder="Description..."
              maxLength={400}
              className="border border-gray-300 rounded px-2 py-[10px]  w-[100%] h-[130px] resize-none uploadMainInput"
            ></textarea>
          </div>

    
            <button
              className="mt-4 px-4 py-2 rounded text-white bg-red-500 cursor-pointer transition-all duration-350 hover:scale-95"
            >
          
                Submit
            </button>
        
        </div>
      </div>
   
    </div>
  );
};

export default MainUploadPage;
