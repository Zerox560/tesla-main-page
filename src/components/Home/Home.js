import Section from "./Section";

import { Container } from "./HomeStyles";

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                image="model-s.jpg"
                topBtn="Custom Order"
                botBtn="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                image="model-y.jpg"
                topBtn="Custom Order"
                botBtn="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                image="model-3.jpg"
                topBtn="Custom Order"
                botBtn="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                image="model-x.jpg"
                topBtn="Custom Order"
                botBtn="Existing Inventory"
            />
            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                image="solar-panel.jpg"
                topBtn="Order Now"
                botBtn="Learn More"
            />
            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                image="solar-roof.jpg"
                topBtn="Order Now"
                botBtn="Learn More"
            />
            <Section
                title="Accessories"
                image="accessories.jpg"
                topBtn="Shop Now"
            />
        </Container>
    )
}

export default Home;
