import styled from "styled-components";




export const CardStyle = styled.div`

    width: 250px;
    background: #fff;

    .image{
        height: 150px;
        width: 100%;
        background: ${props => `url(${props.image})`};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .text{
        padding: 20px;
        }
`;