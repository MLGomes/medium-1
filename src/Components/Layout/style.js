import styled from "styled-components";

export const MainGrid = styled.div`
    display: grid;

    grid-template-areas: "firstColumn secondColumn";
    grid-template-columns: 493px 288px;

    grid-gap: 32px;

    max-width: 757px;
    margin: 100px auto;
`

export const SecondColumn = styled.div`

`

export const NewsColumn = styled.div`

`

export const Discovery = styled.div`
    background-color: yellow;
    border: 1px solid black;
`

export const Infos = styled.div`
    background-color: orange;
    border: 1px solid black;
`