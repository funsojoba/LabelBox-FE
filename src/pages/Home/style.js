import styled from 'styled-components';


export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const Container = styled.div`
    background: #f0f0f0;
    height: 100vh;
    overflow: scroll;
    
    .content{
        display: flex;
        padding: 30px;
        
        .card-list{
            flex: 4;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            flex-grow: 1;
            border-right: solid 1px #f0f0f0;
        }
    
        .form{
            padding: 20px;
            background: #fff;
        }
    }

    
`;

