import styled from 'styled-components';

export const WindowBar = styled.div`
    width: 100%;
    height: fit-content;
    backdrop-filter: blur(10px);

    ul{
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        height: 1.7rem;
        margin-top: .1rem;
    }

    ul div{
        margin-left: .4rem;
    }
`;

export const WindowIcon = styled.div`
    margin-right: .4rem;
    font-family: 'josefinsans-semibold';
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;

    p{
        width: fit-content;
        height: fit-content;
        padding-bottom: .01rem;
    }

    img{
        width: 1.2rem;
        height: 1.2rem;
        margin-left: .4rem;
    }
`;

export const WindowBarIcons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 1.2rem;

    img{
        width: 1.25rem;
        height: auto;
        margin-right: .4rem;
    }
`;

export const WindowContent = styled.div`
    position: absolute;
    width: fit-content;
    height: fit-content;
    top: 0;
    left: 0;
    z-index: 3;
`;

export const WindowChildrenContent = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: nowrap;
    width: fit-content;
    height: fit-content;
    display: flex;
    background-color: #f0f0f070;
    box-shadow: -1px -1px 5px #2323236b;
    backdrop-filter: blur(20px);
    max-width: calc(100vw - 3.4rem);
    max-height: calc(100vh - 1.4rem);

    .content{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        flex-wrap: nowrap;
        padding: .8rem;
        overflow-x: hidden;
    }
`;