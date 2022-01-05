import { Container, Menu, RightMenu, CustomMenu } from "./HeaderStyles";

function Header() {
    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="Logo de tesla" />
            </a>
            <Menu>
                <a href="/">Model S</a>
                <a href="/">Model 3</a>
                <a href="/">Model S</a>
                <a href="/">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Account</a>
                <CustomMenu />
            </RightMenu>
        </Container>
    )
}

export default Header
