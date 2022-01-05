import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

export const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    flex: 1;

    a {
        font-weight: 600;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const RightMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
        font-weight: 600;
    }
`;

export const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;