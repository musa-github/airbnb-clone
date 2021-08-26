import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
          title="Outdoor getaways"
          description=" jojoieihiuu uiahij oioideijpfasa ddao"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
          title="3 Bedroom Flat in Bournemouth"
          description=" Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="$130/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=480"
          title="Penthouse in london "
          description="Enjoy the amazing sights of london with this stunning penthouse"
          price="$350/hight"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/f51f70fb-93b7-4974-86e8-1195b64f1353.jpg?im_w=480"
          title="1 Bedroom apartment"
          description="Comfortable private places, with room for friends or family"
          price="$220/night"
        />
      </div>
    </div>
  );
}

export default Home;
