import React, { useState } from "react";
import "./Upload.css";


const Upload = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="uploadForm">
      <label>Imagen</label>
      <input type="file" onChange={handleChange} />
      <br />
      <br />
      <img src={file} />
      
    
       
    </div>
  );
};

export default Upload;
