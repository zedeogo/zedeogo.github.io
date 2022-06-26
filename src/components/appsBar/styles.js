import styled from "styled-components";

const Styles = styled.div`
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
    background-color: #23232e;
    width: 3.4rem;
    height: 100vh;
    padding: 1.8rem 0;

    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
    }

    ul li{
        width: fit-content;
        height: fit-content;
    }

    ul li img{
        width: 2.7rem;
        height: auto;
    }
`;

export default Styles;