import styled from "styled-components";

const Styles = styled.div`
    position: relative;
    z-index: 5;

    ul, .left, .right, ul li, ul li button{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
    }

    ul li img{
        margin-right: .4rem;
    }

    .left div, .right div{
        font-size: .8rem;
        color: #e1e1e1;
        font-family: 'josefinsans-regular';
    }
    
    ul{
        height: 1.4rem;
        justify-content: space-between;
        padding: 0 1.2rem 0 .4rem;
        background-color: #23232e;
    }

    .left button{
        margin-right: 1rem;
    }

    .right button {
        margin-left: 1rem;
    }
`;

export default Styles;