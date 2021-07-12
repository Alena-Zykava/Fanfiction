import React, { useState } from "react";
import { FC, MouseEvent, ChangeEvent } from "react";
import { Button, Form, Image } from 'react-bootstrap';
import { CLOUD_NAME, UPLOAD_PRESET } from "../../constants/constants";

interface UploadPictureProps {
    imageUrl: string,
    setImageUrl: (imageUrl: string) => void
}

const UploadPicture: FC<UploadPictureProps> = ({ imageUrl, setImageUrl }) => {
    const [inputFile, setInputFile] = useState<File | string>('');

    const onFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.target.files ? setInputFile(e.target.files[0]) : setInputFile('');
    };

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", inputFile);
        formData.append("upload_preset", UPLOAD_PRESET);
        const options = {
            method: "POST",
            body: formData,
        };
        
        return fetch(`https://api.Cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, options)
            .then((res) => {                
                return res.json()
            })
        .then((res) => setImageUrl(res.secure_url))
        .catch((err) => console.log(err));
    };

    return (
        <>
        <Image className='pb-3' src={imageUrl} fluid rounded/>
        <div className='d-flex align-items-center'>            
            <Form.File type="file" onChange={onFileChange} />            
            <Button onClick={handleClick}>Upload</Button>
        </div>
        </>
    )
}

export default UploadPicture;