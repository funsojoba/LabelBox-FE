import styled from "styled-components"


export const ButtonStyle = styled.button`
    text-decoration: none;
    color: #fff;
    background: rgb(55, 55, 55);
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 50px;
    cursor: pointer;
    width: ${({ width }) => (width ? width : '100%')};
    /* border: solid 1px ; */
    
    ${({ marginTop }) => (marginTop ? 'margin-top: 10px;' : '')}
    ${({ marginAuto }) => (marginAuto ? 'margin: auto;' : '')}
    &:hover{
        background:rgb(31, 31, 31);
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`