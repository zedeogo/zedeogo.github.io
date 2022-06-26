import styled from 'styled-components';

export const BemVindo = styled.div`
    p, h2, h3, h4 {
        text-align: justify;
        text-justify: inter-word;
    }

    h2 {
        font-size: 2rem;
        line-height: 2.2rem;
    }

    h3 {
        font-size: 1.4rem;
        line-height: 1.6rem;
    }

    p {
        font-size: 1.1rem;
        line-height: 1.2rem;
    }
`;

export const ContentArticle = styled.p`
    margin-bottom: 1rem;
    font-family: 'josefinsans-regular';
`

export const NewArticle = styled.article`
    margin: 1rem 0;

    h3 {
        margin-bottom: .5rem;
    }
`;

export const SpaceTab = styled.span`
    margin-left: 3vw;
`;