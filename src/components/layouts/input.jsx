import styled from 'styled-components'
import React from 'react'
import Upload from '../../assets/img/upload.png'

const InputLayout = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 10px;
    background: #ffffff;
    border-radius: 16px;
    text-align: center;
    border: none;
    margin-top: 10px;
    box-shadow: 1px 1px 6px 3px rgb(0 0 0 / 20%);
    text-align: left;
    ::placeholder {
       color: rgba(73, 13, 70, 0.51);
    }
   :focus {
    box-shadow: 1px 1px 6px 3px rgb(137 41 140 / 47%);
    outline: 0;
    }
`
const UploadButton = styled.button`
    width: 85%;
    background: #B4AEE8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #ffffff;
    border: none;
    border-radius: 20px;
    margin-top: 13px;
    text-align: center;
    cursor: pointer;
    padding: 10px 0px;

`
const UploadIcon = styled.img`
  height: 30px;
  width: 30px;
  /* margin-bottom: 25%; */
`

const Input = ({textInput, value, width, height, onChange, icon: Icon}) =>  {
    return (
        <>
            {Icon &&<Icon size={23} color="490D46"/>}   
            <InputLayout value={value} width={width} height={height} type='text' placeholder={textInput} onChange={onChange}/>
        </>
    )
}

const InputFile = (props) => {
   
    const hiddenFileInput = React.useRef(null);

    const handleClick = e => {
        hiddenFileInput.current.click(); 
    }

    const handleChange = event => { 
        const fileUploaded = event.target.files[0];
        this.props.handleFile(fileUploaded != null); 
    }

    return (
        <>
        {/* <UploadIcon/> */}
        <UploadButton onClick = {handleClick}>
            Adicionar foto de perfil
        </UploadButton>
        <InputLayout type='file' ref={hiddenFileInput} onChange={handleChange} style={{display: 'none'}}/>
        </>
    )
}

export default Input
export {InputFile}