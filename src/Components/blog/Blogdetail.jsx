import React from "react";
import styled from "styled-components";
import blog from "../../assets/blogs4.png";
import rect from "../../assets/girlrect.png";
import boat from "../../assets/boat11.png";
import boat1 from "../../assets/boat22.png";
import birds from "../../assets/birds.png";
import birds1 from "../../assets/birds1.png";
import left from "../../assets/leftarrow1.svg";
import right from "../../assets/rightarrow.svg";
import man1 from "../../assets/mans1.png";
import man2 from "../../assets/mans2.png";
import man3 from "../../assets/mans3.png";
import man44 from "../../assets/mans4.png";
import man5 from "../../assets/mans5.png";
import man6 from "../../assets/mans6.png";
import Footer from "../Home/Footer";
import { useParams } from "react-router-dom";

const Blogdiv = styled.div`
  height: 35vmax;
  object-fit: cover;
  width: 100%;
  background: url(${blog});
  background-repeat: no-repeat;

  @media (min-width: 993px) and (max-width: 1024px) {
    height: 52vmax;
    object-fit: cover;
    width: 100%;
    background-position: center;
  }

  @media (min-width: 1025px) and (max-width: 1279px) {
    background-position: center;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    background-position: center;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    height: 44vmax;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    background-size: cover;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    background-size: cover;
  }
`;
const Nextdiv = styled.div`
  margin: 2% 2% 0 2%;
  display: flex;
  gap: 1vmax;
`;
const Img = styled.img`
  height: 5vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 7vmax;
  }
`;
const Textdiv = styled.div``;
const Dwayane = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
`;
const Dates = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
`;

const Lorem = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  margin: 2.4% 2% 0 2%;
  text-align: justify;
  color: #000000;

  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const One = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  margin: 2.4% 2% 0 2%;
  color: #000000;
`;
const Boat = styled.img`
  margin: 2% 2% 0 2%;

  height: 42.9vmax;

  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: 3% 2% 0 2%;
  }
`;
const Orci = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin: 2% 2% 0 2%;
  color: #000000;
`;
const Table = styled.table`
  margin: 2% 2% 0 3.3%;
`;
const Ul = styled.ul``;
const Li = styled.li`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
`;
const Lorem1 = styled.p`
  margin: 2% 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  text-align: justify;
  color: #000000;
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Thing = styled.p`
  margin: 2% 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #000000;
`;
const Lorem2 = styled.p`
  margin: 0 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  color: #000000;
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Birdsdiv = styled.div`
  margin: 1.5% 2% 0 2%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: 3% 2% 0 2%;
  }
`;
const Birds1 = styled.img`
  width: 46vmax;
  height: 35vmax;
  object-fit: cover;
`;
const More = styled.p`
  margin: 2% 0 0 0;
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: #145843;
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 2% 0 0 0;
  }
`;
const Nextdivs = styled.div`
  @media (min-width: 1024px) and (max-width: 1279px) {
    margin: 3% 2% 0 2%;

    justify-content: space-between;
  }
  margin: 3.5% 2% 0 2%;
  display: flex;

  justify-content: space-between;
`;
const Left = styled.img``;
const Right = styled.img``;
const Mans1 = styled.img`
  height: 100%;
  width: 15%;

  @media (min-width: 993px) and (max-width: 1024px) {
    width: 13%;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 100%;
    width: 12%;
  }
`;
const Mans2 = styled.img`
  height: 100%;
  width: 15%;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 13%;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 100%;
    width: 12%;
  }
`;
const Mans3 = styled.img`
  height: 100%;
  width: 15%;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 13%;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 100%;
    width: 12%;
  }
`;
const Mans4 = styled.img`
  height: 100%;
  width: 15%;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 13%;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 100%;
    width: 12%;
  }
`;
const Mans5 = styled.img`
  height: 100%;
  width: 15%;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 13%;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 100%;
    width: 12%;
  }
`;
const Mans6 = styled.img`
  height: 100%;
  width: 15%;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 13%;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 100%;
    width: 12%;
  }
`;
const Blogdetail = () => {
  const { id } = useParams();
  return (
    <>
      <Blogdiv></Blogdiv>
      <Nextdiv>
        <Img src={rect} />
        <Textdiv>
          <Dwayane>Dwayne Bernhard</Dwayane>
          <Dates>Last updated: Jul 18, 2022</Dates>
        </Textdiv>
      </Nextdiv>

      <Lorem>
        Semper at tempus amet magna feugiat cursus. Elementum odio arcu mauris
        quis accumsan ac diam sed tellus. Nulla pellentesque ac sed lacus
        accumsan diam elementum quam. Etiam tempus id in varius. Lacus tortor,
        velit, vel ut imperdiet dui dictum vitae. Egestas turpis viverra
        condimentum orci massa consequat at. Lorem tellus consequat, malesuada
        et massa, diam nisl. Augue enim sapien, fusce vel eget a viverra odio.
        Purus amet tortor feugiat adipiscing feugiat volutpat. Ut iaculis quis
        morbi massa.
      </Lorem>

      <One>1. Habitant convallis enim, placerat in adipiscing blandit</One>

      <Boat src={boat} />
      <Lorem>
        Semper at tempus amet magna feugiat cursus. Elementum odio arcu mauris
        quis accumsan ac diam sed tellus. Nulla pellentesque ac sed lacus
        accumsan diam elementum quam. Etiam tempus id in varius. Lacus tortor,
        velit, vel ut imperdiet dui dictum vitae. Egestas turpis viverra
        condimentum orci massa consequat at. Lorem tellus consequat, malesuada
        et massa, diam nisl. Augue enim sapien, fusce vel eget a viverra odio.
        Purus amet tortor feugiat adipiscing feugiat volutpat. Ut iaculis quis
        morbi massa.
      </Lorem>
      <Orci>orci massa consequat at. Lorem tellus consequat, malesuada</Orci>
      <Table>
        <Ul>
          <Li>massa consequat at. Lorem tellus consequat, malesuada</Li>
          <Li>massa consequat at. Lorem tellus consequat, malesuada</Li>
          <Li>massa consequat at. Lorem tellus consequat, malesuada</Li>
          <Li>massa consequat at. Lorem tellus consequat, malesuada</Li>
          <Li>massa consequat at. Lorem tellus consequat, malesuada</Li>
        </Ul>
      </Table>
      <Lorem>
        Semper at tempus amet magna feugiat cursus. Elementum odio arcu mauris
        quis accumsan ac diam sed tellus. Nulla pellentesque ac sed lacus
        accumsan diam elementum quam. Etiam tempus id in varius. Lacus tortor,
        velit, vel ut imperdiet dui dictum vitae. Egestas turpis viverra
        condimentum orci massa consequat at. Lorem tellus consequat, malesuada
        et massa, diam nisl. Augue enim sapien, fusce vel eget a viverra odio.
        Purus amet tortor feugiat adipiscing feugiat volutpat. Ut iaculis quis
        morbi massa.
      </Lorem>
      <One>2. Habitant convallis enim, placerat in adipiscing blandit</One>
      <Boat src={boat1} />
      <Lorem1>
        Encircled amid the towering cliffs and sculpted rocks, Zion National
        Park is nothing less than a treat for every traveller. Inhabited by
        several species of animals like mule deer, coyotes, beavers and more,
        this park also houses close to 900 plants, including cactus and yucca,
        pines on the plateaus, and cottonwoods along the river shores.
      </Lorem1>
      <Lorem1>
        While here, visit the Snow Canyon State Park located 80 km west of Zion,
        if you want to experience adventure at its best. The park also offers
        stunning views of the red-rock scenery, black-lava rocks, sandstone
        cliffs & breath-taking views of the towering mountains. Those seeking
        quietude may visit the Cedar Breaks National Monument which boasts of
        stunning glimpses of the 4.8 km wide amphitheater, dreamy sunsets, and
        small lakes.
      </Lorem1>
      <Thing>Thing to Do at Zion:</Thing>
      <Lorem2>
        {" "}
        Backpacking | Bicycling | Canyoneering | Day Hiking | Ranger-led
        Activities | River Trips | Rock Climbing | Sunset and Stargazing |
        Wildlife | Subway and Narrow Trails | Horse Riding
      </Lorem2>
      <One>3. Habitant convallis enim, placerat in adipiscing blandit</One>
      <Birdsdiv>
        <Birds1 src={birds} />
        <Birds1 src={birds1} />
      </Birdsdiv>
      <Lorem>
        Semper at tempus amet magna feugiat cursus. Elementum odio arcu mauris
        quis accumsan ac diam sed tellus. Nulla pellentesque ac sed lacus
        accumsan diam elementum quam. Etiam tempus id in varius. Lacus tortor,
        velit, vel ut imperdiet dui dictum vitae. Egestas turpis viverra
        condimentum orci massa consequat at. Lorem tellus consequat, malesuada
        et massa, diam nisl. Augue enim sapien, fusce vel eget a viverra odio.
        Purus amet tortor feugiat adipiscing feugiat volutpat. Ut iaculis quis
        morbi massa.
      </Lorem>
      <More>MORE BLOGS</More>

      <Nextdivs style={{cursor:'pointer'}}>
        <Right src={right} />
        <Mans1 src={man1} />
        <Mans2 src={man2} />
        <Mans3 src={man3} />
        <Mans4 src={man44} />
        <Mans5 src={man5} />
        <Mans6 src={man6} />
        <Left src={left} />
      </Nextdivs>
      <Footer />
    </>
  );
};

export default Blogdetail;
