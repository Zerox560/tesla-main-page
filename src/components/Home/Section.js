import { Wrap, ItemText, ButtonWrapper, TopButton, BottomButton, DownArrow, Buttons } from "./HomeStyles";

function Section({ title, description, topBtn, botBtn, image }) {
    return (
        <Wrap image={image}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonWrapper>
                    <TopButton>
                        {topBtn}
                    </TopButton>
                    {botBtn && (
                        <BottomButton>
                            {botBtn}
                        </BottomButton>
                    )
                    }
                </ButtonWrapper>
                <DownArrow src="/images/down-arrow.svg" onClick={() => window.scroll({ behavior: "smooth", top: window.scrollY + 630 })} />
            </Buttons>
        </Wrap>
    )
}

export default Section
