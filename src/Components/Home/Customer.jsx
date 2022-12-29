import React from "react";
import styled from "styled-components";
import man1 from "../../assets/man1.png";
import man2 from "../../assets/man2.png";
import man3 from "../../assets/man3.png";
import man4 from "../../assets/man4.png";
import star from "../../assets/star.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { customerdata } from "./customerdata";

const Maindiv = styled.div`
  display: flex;
  margin-top: 1vmax;
  gap: 2vmax;
`;
const Man1 = styled.img`
  height: 12vmax;
  width: 13vmax;
  padding-top: 20vmax;
  object-fit: cover;

  @media (min-width: 335px) and (max-width: 421px) {
    height: 28vmax;
    width: 18vmax;
    margin-top: -16vmax;
    padding-left: 0.5vmax;
  }
`;
const Man2 = styled.img`
  height: 12vmax;
  width: 13vmax;
  padding-top: 20vmax;
  object-fit: cover;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 28vmax;
    width: 18vmax;
    margin-top: -16vmax;
  }
`;
const Man3 = styled.img`
  height: 12vmax;
  width: 13vmax;
  padding-top: 20vmax;
  object-fit: cover;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 28vmax;
    width: 18vmax;
    margin-top: -16vmax;
  }
`;
const Man4 = styled.img`
  height: 28vmax;
  width: 21vmax;
  padding-top: 4vmax;
  object-fit: cover;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 28vmax;
    width: 18vmax;
  }
`;
const Textdiv = styled.div`
  display: grid;
  padding: 0;
  @media (min-width: 335px) and (max-width: 421px) {
    display: none;
  }
`;
const Berner = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 2vmax;
  color: rgba(0, 0, 0, 1);
  padding-top: 7vmax;
`;
const Consult = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3vmax;
  margin-top: -2.2vmax;
`;
const Stard = styled.div`
  display: flex;
  margin-top: -1.9vmax;
  gap: 0.5vmax;
`;
const Star = styled.img`
  height: 1vmax;
  width: 1vmax;
`;
const Smalld = styled.div`
  width: 28vmax;
`;
const Stext = styled.p`
  font-family: Poppins;

  font-style: normal;
  font-weight: 400;
  font-size: 1vmax; ;
`;
const Icon1 = styled(IoIosArrowDroprightCircle)`
  height: 3vmax;
  width: 3vmax;
  color: rgba(20, 88, 67, 1);
`;
const Customerrevies = styled.p`
  font-family: Poppins;
  font-size: 1.4vmax;
  color: rgba(20, 88, 67, 1);
  text-align: center;
  font-style: normal;
  font-weight: 600;
  margin-top: -3vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    font-size: 4.3vmax;
    margin-top: -3vmax;
    margin-right: -27vmax;
  }
`;
const Bigdata = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Customer = () => {
  const chref = React.useRef();
  const click = () => {
    chref.current.src = man1;
  };
  const click1 = () => {
    chref.current.src = man2;
  };
  const click2 = () => {
    chref.current.src =
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
  };

  return (
    <>
      <Customerrevies>CUSTOMER REVIEWS</Customerrevies>
      <Bigdata>
        <Maindiv>
          <Man1 onClick={click} src={man1} />
          <Man2 onClick={click1} src={man2} />
          <Man3
            onClick={click2}
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          />
          <Man4 ref={chref} src={man4} />
          <Textdiv>
            <Berner>RON BERNIER</Berner>
            <Consult>(consult)</Consult>
            <Stard>
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
            </Stard>
            <Smalld>
              <Stext>
                Vitae vitae arcu mauris nibh felis rutrum. Porta sit porttitor
                justo amet. Malesuada tincidunt molestie augue ullamcorper
                quisque nisi a sed. Ac etiam at sapien, etiam tellus porttitor
                sem vitae cras. Vel volutpat suspendisse quam volutpat non
                suspendisse. Amet sed quam adipiscing mattis imperdiet.
              </Stext>
            </Smalld>
            <Icon1 />
          </Textdiv>
        </Maindiv>
      </Bigdata>
    </>
  );
};

export default Customer;
