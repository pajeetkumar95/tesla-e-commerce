import React from "react";
import Section from "./Section";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <Section icon="true" name="Model 3" para="Order Online for Touchless Delivery" rightbtn="Custom Order" leftbtn="Existing Inventry" backgroundImage="model-3.jpg" />
      <Section name="Model S" para="Order Online for Touchless Delivery" rightbtn="Custom Order" leftbtn="Existing Inventry" backgroundImage="model-s.jpg" />
      <Section name="Model X" para="Order Online for Touchless Delivery" rightbtn="Custom Order" leftbtn="Existing Inventry" backgroundImage="model-x.jpg" />
      <Section name="Model Y" para="Order Online for Touchless Delivery" rightbtn="Custom Order" leftbtn="Existing Inventry" backgroundImage="model-y.jpg" />
      <Section name="Solar Panel" para="Lower Cost Solar Panels in India" rightbtn="Order Now" leftbtn="Learn More" backgroundImage="solar-panel.jpg" />
      <Section name="Solar Roof" para="Produce Clean Energy from your roof" rightbtn="Order Now" leftbtn="Learn More" backgroundImage="solar-roof.jpg" />
      <Section name="Accessories" para="Order Online for Touchless Delivery" rightbtn="Learn More" backgroundImage="accessories.jpg" />
    </>
  );
}

export default Home;
