import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const Container = styled.div`
    z-index: 1;
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
        
        @media (max-width: 768px) {
            display: none;
        }
    }

`;

export const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

export const SideBarMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #ffff;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    text-align: start;
    overflow-y: scroll;
    transition: all .4s ease;
    transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};

    li {
        padding: 15px 0;
        font-weight: 600;
        border-bottom: solid 1px rgba(0, 0, 0, .2);
    }
}
`;

export const CloseBtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CloseButton = styled(CloseIcon)`
    cursor: pointer;
`;
