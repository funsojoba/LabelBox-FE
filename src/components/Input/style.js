import styled from "styled-components";

export const InputWrapper = styled.div`
    margin-bottom: 15px;
    width: 100%;
`

export const InputHeader = styled.div`
    display: flex;

    label{
        color: #999;
    }

    span{
        margin-left: 5px;
        color: red;
    }
`

export const InputStyle = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #F2F2F2;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    &:focus{
        border-color: #4DC740;
    }
    &::placeholder{
        color: #999;
    }
`