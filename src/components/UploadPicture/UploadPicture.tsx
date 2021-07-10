import React, { useState } from "react";
import { FC, MouseEvent, ChangeEvent } from "react";

interface UploadPictureProps {
    imageUrl: string,
    setImageUrl: (imageUrl: string) => void
}



const UploadPicture: FC<UploadPictureProps> = ({ imageUrl, setImageUrl }) => {
    const [inputFile, setInputFile] = useState<File | string>('')

    const cloud_name = "dqpsggdou";
    const upload_preset = "stg8asgt";

    const onFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.target.files ? setInputFile(e.target.files[0]) : setInputFile('');
    };

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('1');

        const formData = new FormData();
        formData.append("file", inputFile);
        formData.append("upload_preset", upload_preset);
        const options = {
            method: "POST",
            body: formData,
        };
        return fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`, options)
            .then((res) => {
                console.log(2);
                return res.json()
            })
        .then((res) => setImageUrl(res.secure_url))
        .catch((err) => console.log(err));
    };

    return (
        <div>
            <img src={imageUrl} className="app_uploadedImg" alt="" />
            <input type="file" className="app_uploadInput" onChange={onFileChange} />            
            <button className="app_uploadButton" onClick={handleClick}>Upload</button>
        </div>
    )
}

export default UploadPicture;