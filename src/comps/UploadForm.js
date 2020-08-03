import React, {useState} from 'react'

const UploadForm = () =>{
    const [file, setFile] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const [error, setError] = useState(null);

    const changeHandler = (e)=>{
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)){
            setFile(selected);
        } else {
            setFile(null);
            setError('Error! Please select an image file(png or jpeg)');
        }
        console.log(selected);
    }
    return(
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                {file && <div>{file.name}</div>}
            </div>
        </form>
    )
}
export default UploadForm;