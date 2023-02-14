import {React, useState} from 'react';
import ProgressBar from './ProgressBar';

function InputForm() {
    const allowedFiles = ['image/png', 'image/jpeg', 'images/jpg'];
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) =>{
        const selectedFile = e.target.files[0];
        if (selectedFile && allowedFiles.includes(selectedFile.type)){
            setFile(selectedFile);
            setError(null);
        }
        else{
            setFile(null);
            setError('Please select image file of format(png/jpeg)')
        }
    }
  return (
    <form>
        <label>
            <input type="file" onChange={handleChange}/>
            <span>+</span>
        </label>
        <div className='output'>
            { error && <div className='error'>{ error }</div> }
            { file && <div>{ file.name }</div> }
            { file && <ProgressBar file = { file } setFile = { setFile }/> }
        </div>
    </form>
  )
}

export default InputForm
