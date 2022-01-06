import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../../features/car/carSlice";

import { Container, Menu, RightMenu, CustomMenu, SideBarMenu, CloseBtnContainer, CloseButton } from "./HeaderStyles";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const cars = useSelector(selectCars);

    const menuHandler = () => { setMenuOpen(prevState => !prevState) }

    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="Logo de tesla" />
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a href="/" key={index}>{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Account</a>
                <CustomMenu onClick={menuHandler} />
            </RightMenu>
            <SideBarMenu open={menuOpen} >
                <CloseBtnContainer>
                    <CloseButton onClick={menuHandler} />
                </CloseBtnContainer>
                <li><a href="/">Existing Inventory</a></li>
                <li><a href="/">Used Inventory</a></li>
                <li><a href="/">Trade-In</a></li>
                <li><a href="/">Test Drive</a></li>
                <li><a href="/">Cybertruck</a></li>
                <li><a href="/">Roadster</a></li>
                <li><a href="/">Semi</a></li>
                <li><a href="/">Charging</a></li>
                <li><a href="/">Powerwall</a></li>
                <li><a href="/">Commercial Energy</a></li>
                <li><a href="/">Utilities</a></li>
                <li><a href="/">Find Us</a></li>
                <li><a href="/">Support</a></li>
                <li><a href="/">Investor Relations</a></li>
            </SideBarMenu>
        </Container>
    )
}

export default Header
