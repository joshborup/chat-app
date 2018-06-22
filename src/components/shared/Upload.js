import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/devmountain/image/upload';

export default class UploadForm extends Component {
    

    handleImageUpload = (file) => {

//axios call to server to request hashed signature

        axios.get('/user/upload').then(response => {
        
//form data for signed uploads

        let formData = new FormData();
        formData.append("signature", response.data.signature)
        formData.append("api_key", "496317639374845");
        formData.append("timestamp", response.data.timestamp)
        formData.append("file", file[0]);

//axios call to cloudinary using the URL set at top of page
        axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
            this.props.uploadedImage(response.data.secure_url);
            }).catch( err => {
                console.log(err);
            }) 
        })
    }     

    render() {
        return (
            <div className='upload-form'>
                <div className='image-container'>
                    <Dropzone
                            multiple={false}
                            accept="image/*"
                            onDrop={this.handleImageUpload}
                            className='dropzone'
                            >
                    Edit Background
                    </Dropzone>
                </div>
            </div>
        );
    }
}
