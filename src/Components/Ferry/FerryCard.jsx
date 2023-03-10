import React from "react";
import useSWR from "swr";
import styled from "styled-components";
import { ferrylist } from "./ferrylist";
import tick from "../../assets/doc.png";
import whitetick from "../../assets/whitetick.png";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../assets/w6.webp";
import {baseURL} from "../../Components/Apibaseurl"

const CardMainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60vmax;
  height: 18vmax;
  padding: 0 2% 0 2%;

  background: #ffffff;
  box-shadow: 10px 11px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (min-width: 992px) and (max-width: 1025px) {
    width: 60vmax;
    /* background:red; */
  }
`;
const ImageDiv = styled.div``;
const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;
const DetailsMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  /* background: blue;; */
  padding: 0 0% 0 3%;
  width: 26%;
  /* background-color: red; */

  margin: 3% 0% 0 1%;

  height: 16vmax;
  justify-content: space-around;
  /* align-items: center; */
`;
const FerryNameDiv = styled.div`
  display: flex;
  gap: 1vmax;
  font-size: 1rem;
  font-weight: 600;
`;
const FerryText = styled.p`
  font-weight: 600;
`;
const GreenText = styled.p`
  color: rgba(0, 173, 111, 1);
`;
const DepartureText = styled.p``;
const DerpartureArrivalWrapper = styled.div`
  display: flex;
  width: 15vmax;
  justify-content: space-around;
  font-size: 1.2rem;
  font-weight: 400;

  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 15px;
    /* background-color:red; */
    margin-left: -2%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    font-size: 17px;
    /* background:red; */
    width: 17vmax;
    margin-left: -4%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 18px;
    /* background:red; */
    width: 17vmax;
    margin-left: -5%;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 19px;
    /* background:red; */
    width: 17vmax;
    margin-left: -7%;
  }
`;
const TimeDiv = styled.div`
  display: flex;
  gap: 4vmax;
  font-size: 1.2rem;
  font-weight: 400;
  /* background-color:red; */
  width:120%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 15px;
    /* background-color:red; */
  }
`;
const LoactionDiv = styled.div`
  display: flex;
  gap: 4vmax;
  font-size: 1rem;
  font-weight: 600;
  /* background-color: red; */
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vmax;
  /* background-color: red; */
  margin-top: 10vmax;
  width: 27%;
  /* align-items: right; */
  justify-content: right;
  text-align: right;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
`;
const PriceText = styled.p`
  color: #b80000;
  font-weight: 600;
  font-size: 1.5rem;
  margin-left: 1vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;
const Button = styled.button`
  background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  color: white;
  width: 8vmax;
  height: 2.5vmax;
  border: none;
  outline: none;
  /* justify-content:flex-end;
  align-items:flex-end; */
  margin-left: 50%;
  cursor: pointer;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 18px;
  }
`;

//  select ferry component->

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vmax;
  width: 40vmax;
`;
const SliderWrapper = styled.div``;
const SelectSeatText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;
const SeatWrapper = styled.div`
  display: flex;
  gap: 3vmax;
  margin-top: 2vmax;
`;
const Economy = styled.div`
  display: flex;
  gap: 1vmax;
`;
const Luxury = styled.div`
  display: flex;
  gap: 1vmax;
`;
const Royal = styled.div`
  display: flex;
  gap: 1vmax;
`;
const RoyalText = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;
const LuxuryText = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;
const EconomyText = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;
const AmenetiesText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

const StyledHrTag = styled.hr`
  width: 65vmax;
  margin-top: -3vmax;
  @media (min-width: 375px) and (max-width: 420px) {
    margin-left: 0;
    width: 70vmax;
  }
`;

const AmenetiesWrapper = styled.div`
  display: flex;
  gap: 14vmax;
  margin-left: 55vmax;
`;

const GridWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vmax;
  margin-left: -50vmax;
`;
const GridWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vmax;
`;
const TickImage = styled.img`
  height: 1.7vmax;
  width: 1.7vmax;
`;
const DeckDiv = styled.div`
  display: flex;
  gap: 1vmax;
`;
const HighSpeedDiv = styled.div`
  display: flex;
  gap: 1vmax;
`;

const AirConditionedDiv = styled.div`
  display: flex;
  gap: 1vmax;
`;

const CafetaeriaDiv = styled.div`
  gap: 1vmax;
  display: flex;
`;
const PermiumDiv = styled.div`
  display: flex;
  gap: 1vmax;
`;
const ExtraLegSpace = styled.div`
  display: flex;
`;
const ExclusiveDiv = styled.div`
  display: flex;
`;
const Snacks = styled.div`
  display: flex;
`;
const MealIncluded = styled.div`
  display: flex;
`;
const TextStyled = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;
const TwoButtonWrapper = styled.div`
  display: flex;
  gap: 6vmax;
  margin-left: 20vmax;
`;
const CloseText = styled.p`
  color: #636363;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;
const ProceedButton = styled.button`
  background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  color: white;
  width: 26vmax;
  height: 2.5vmax;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 13px;
`;

const Arrivaldiv = styled.div`
  display: flex;
  gap: 1vmax;
  width: 16vmax;
  /* justify-content:space-evenly; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
`;
const Arrival = styled.p`
  font-size: 18px;
  font-family: Poppins;
  font-weight: 600;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
`;
const Departure = styled.p`
  font-size: 18px;
  font-family: Poppins;
  font-weight: 600;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
`;
const FerryCard = () => {
  const { id } = useParams();

  const [selected, setSelected] = React.useState(null);
  const [selectSeat, setSelectSeat] = React.useState("Economy");

  const navigate = useNavigate();
  const clicks = () => {
    navigate(`/ferrydetail`);
  };

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `${baseURL}/api/user/get/ferry`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  console.log(data);
  const Data = JSON.parse(sessionStorage.getItem("ferrylist"));
  console.log(Data, "fery data fetched in myc");

  function SelectFerry() {
    return (
      <>
        <MainWrapper>
          <SelectSeatText>
            Select your seat type:
            <SeatWrapper>
              <Economy>
                <input
                  style={{ cursor: "pointer" }}
                  type="radio"
                  name="package"
                  value="Economy"
                  checked={selectSeat === "Economy"}
                  onChange={() => setSelectSeat("Economy")}
                />
                <EconomyText>Economy($230)</EconomyText>
              </Economy>
              <Luxury>
                <input
                  style={{ cursor: "pointer" }}
                  type="radio"
                  name="package"
                  value="Luxury"
                  checked={selectSeat === "Luxury"}
                  onChange={() => setSelectSeat("Luxury")}
                />
                <LuxuryText>Luxury($350)</LuxuryText>
              </Luxury>
              <Royal>
                <input
                  style={{ cursor: "pointer" }}
                  type="radio"
                  name="package"
                  value="Royal"
                  checked={selectSeat === "Royal"}
                  onChange={() => setSelectSeat("Royal")}
                />
                <RoyalText>Royal($550)</RoyalText>
              </Royal>
            </SeatWrapper>
          </SelectSeatText>

          <AmenetiesText>Amenities - Economy</AmenetiesText>
          <StyledHrTag />
          <AmenetiesWrapper>
            <GridWrapper1>
              <DeckDiv>
                <TickImage src={tick} />
                <TextStyled>Open Deck Access</TextStyled>
              </DeckDiv>
              <HighSpeedDiv>
                <TickImage src={tick} />
                <TextStyled>High-Speed Ferry</TextStyled>
              </HighSpeedDiv>
              <AirConditionedDiv>
                <TickImage src={tick} />
                Air Conditioned
              </AirConditionedDiv>
              <CafetaeriaDiv>
                <TickImage src={tick} />
                Cafeteria
              </CafetaeriaDiv>
              <PermiumDiv>
                <TickImage src={whitetick} />
                <TextStyled>Premium Seating</TextStyled>
              </PermiumDiv>
            </GridWrapper1>
            <GridWrapper2>
              <PermiumDiv>
                <TickImage src={whitetick} />
                <TextStyled>Premium Seating</TextStyled>
              </PermiumDiv>
              <PermiumDiv>
                <TickImage src={whitetick} />
                <TextStyled>Premium Seating</TextStyled>
              </PermiumDiv>
              <PermiumDiv>
                <TickImage src={whitetick} />
                <TextStyled>Premium Seating</TextStyled>
              </PermiumDiv>
            </GridWrapper2>
          </AmenetiesWrapper>
          <TwoButtonWrapper>
            <CloseText onClick={() => setSelected(null)}>Close</CloseText>
            <ProceedButton onClick={() => clicks(`/ferrydetail`)}>
              Proceed with {selectSeat}
            </ProceedButton>
          </TwoButtonWrapper>
        </MainWrapper>
      </>
    );
  }

  return (
    <>
      {ferrylist.map((value, index) => {
        return (
          <>
            <CardMainContainer key={value.id}>
              <ImageDiv>
                <Image src={value.image} />
              </ImageDiv>
              <DetailsMainWrapper>
                <FerryNameDiv>
                  <FerryText>Ferry:</FerryText>
                  <GreenText>{value.name}</GreenText>
                </FerryNameDiv>
                
                <Arrivaldiv>
                  <Arrival>Arrival</Arrival>
                  <Departure>Departure</Departure>
                </Arrivaldiv>
                <TimeDiv>
                  <p>{value.dtime} AM </p>
                  <p>{value.atime} PM</p>
                </TimeDiv>
                <LoactionDiv>
                  <p>{value.location}</p>
                </LoactionDiv>
              </DetailsMainWrapper>
              <PriceWrapper>
                <PriceText>$400</PriceText>
                <Button
                  onClick={() => setSelected(index === selected ? null : index)}
                >
                  Select Seats
                </Button>
              </PriceWrapper>
            </CardMainContainer>
            {selected === index && <SelectFerry />}
          </>
        );
      })}
    </>
  );
};

export default FerryCard;
