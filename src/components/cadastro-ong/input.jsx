import styled from 'styled-components'

const InputLayout = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 14px 10px;
    border: 0px solid;
    text-align: left;
    ::placeholder {
       color: rgba(73, 13, 70, 0.51);
    }
    :focus {
        outline: 0;
    }
`

const InputContainer = styled.div`
    background: #ffffff;
    border-radius: 16px;
    display: flex;
    align-items: center;
    box-shadow: rgb(0 0 0 / 20%) 1px 1px 6px 3px;
    padding-left: 8px;
    width: 90%; 
    margin: 6px 5%; 
    height: 37px;
`

const Input = ({ value, textInput, width, height, onChange, icon: Icon, ...repeatInput }) => {
    return (
        <>
            <InputContainer>
                {Icon && <Icon size={18} color="490D46" />}
                <InputLayout {...repeatInput} width={width} height={height} type='text' placeholder={textInput} onChange={onChange} value={value} />
            </InputContainer>
        </>
    )
}

export default Input