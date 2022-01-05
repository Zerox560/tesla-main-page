import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    background: ${({ image }) => `url("/images/${image}") no-repeat center center/cover`}}
`;

export const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

    span {
        text-decoration: underline;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const TopButton = styled.div`
    background-color: rgba(23, 26, 32, .9);
    height: 40px;
    width: 256px;
    color: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
`;

export const BottomButton = styled(TopButton)`
    background-color: white;
    opacity: 0.85;
    color: black;
`;

export const DownArrow = styled.img`
    cursor: pointer;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`;