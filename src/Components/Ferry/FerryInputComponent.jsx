import React from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Ferrydetail from "./Feerydetail";
import boat from "../../assets/bigboats.png";
import { useNavigate } from "react-router-dom";
import FerryLists from "./FerryLists";
import Footer from "../Home/Footer";
import BannerInput from "../cab/BannerInput";
import axios from "axios";
import moment from "moment";
import Iconsferry from "../../Components/Iconsferry";

const HeaderImage = styled.img`
  width: 100%;
  height: 30vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 160%;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 160%;
  }
`;

const GreenWrapper = styled.div`
  width: 100%;
  background-color: #145843;
  display: flex;
  justify-content: space-evenly;
  height: 5vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 160%;
    height: 10vh;
    text-align: center;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 160%;
    height: 10vh;
    text-align: center;
  }
`;
const GreenWrapperMain = styled.div`
  position: absolute;
  margin-top: -2vmax;
  width: 100%;
`;
const TextWrapper = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 2vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-top: 3vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-top: 3vh;
  }
`;
const CheckBoxWrapper = styled.div`
  margin-top: 5vmax;
  display: flex;
  gap: 2vmax;
  margin-left: 80%;
`;

const WrapperBox = styled.div`
  display: flex;
  gap: 1vmax;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vmax;
  margin-left: 10%;
  box-shadow: 10px 10px 32px rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  width: 80%;
  /* height: 38vmax; */
  @media (min-width: 320px) and (max-width: 375px) {
    box-shadow: none;
    width: 150vw;
    margin-left: 5%;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    box-shadow: none;
    width: 150vw;
    margin-left: 5%;
  }
`;

const PasssangersWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 8vmax;
  margin: 4% 0 0 0;
  /* background: red; */
  height: 10vmax;
  padding: 2% 2% 0 2%;

  @media (min-width: 320px) and (max-width: 375px) {
    gap: 9vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    gap: 9vw;
  }
`;
const PassangersText = styled.p`
  font-size: 1rem;
  font-weight: 700;

  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 1rem;
    font-weight: 700;
    margin-left: 5vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 1rem;
    font-weight: 700;
    margin-left: 5vw;
  }
`;
const AdlutText = styled.p`
  font-size: 1rem;
  font-weight: 700;

  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 18px;
    font-weight: 500;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 18px;
    font-weight: 500;
  }
`;

const InfantsText = styled.p`
  font-size: 1rem;
  font-weight: 700;

  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 18px;
    font-weight: 500;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 18px;
    font-weight: 500;
  }
`;

const AdultsSelectWrapper = styled.div`
  display: grid;
  gap: 3vmax;
`;
const InfantsSelectWrapper = styled.div`
  display: grid;
  gap: 3vmax;
`;

const InputWrapperMain = styled.div`
z-index:1px;
  @media (min-width: 320px) and (max-width: 375px) {
  }
`;

const InputWrapper = styled.div`
  display: flex;
  width: 15vmax;
  gap: 3vmax;
  /* z-index: 1; */
  height: 3vmax;
  /* background: pink; */
  border-radius: 5px;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 55vw;
    height: 9vh;
    margin-left: -5vw;
    gap: 1vw;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 55vw;
    height: 9vh;
    margin-left: -5vw;
    gap: 1vw;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonNegative = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 0.5vmax;
  margin-left: 2vmax;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 2rem;
    margin-left: 4vw;
    margin-top: 2vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 2rem;
    margin-left: 4vw;
    margin-top: 2vh;
  }
`;
const ButtonPositive = styled.span`
  font-size: 1.4rem;
  margin-top: 0.5vmax;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 2rem;
    margin-top: 2vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 2rem;
    margin-top: 2vh;
  }
`;

const InputValue = styled.input`
  border: none;
  outline: none;
  /* height:100%; */
  /* width:100%; */
  background: transparent;
  /* background:red; */
  /* z-index:1; */
  width: 1.4vmax;
  /* text-align: center; */
  /* padding-left: 20px; */
  /* font-size: 1rem; */
  /* color:red; */
  :placeholder {
  color:black;
  font-size: 2vmax;
  }
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 1.5rem;
    width: 16vw;
    margin-left: 8vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 1.5rem;
    width: 16vw;
    margin-left: 8vw;
  }
`;

//
const SelectTripText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 2vmax;
  /* background-color: red; */
  width: 12vmax;
  text-align: right;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-top: 10vh;
    font-size: 1rem;
    font-weight: 700;
    margin-left: 2vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-top: 10vh;
    font-size: 1rem;
    font-weight: 700;
    margin-left: 2vw;
  }
`;

const TripText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 2vmax;
  /* background-color: red; */
  width: 7.5vmax;
  text-align: right;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-top: 5vh;
    font-size: 1rem;
    font-weight: 700;
    margin-left: 2vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-top: 5vh;
    font-size: 1rem;
    font-weight: 700;
    margin-left: 2vw;
  }
`;
// form container->

const FormMainContainer = styled.div`
  display: grid;
`;

const FormContainer = styled.div`
  display: flex;
  gap: 8vmax;
  margin-top: 3vmax;
  margin-left: 6vmax;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 2vw;
    gap: 3vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: 2vw;
    gap: 3vw;
  }
`;
const FromWrapper = styled.div`
  display: grid;
  gap: 1vmax;
`;
const StyledText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 1rem;
    font-weight: 500;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 1rem;
    font-weight: 500;
  }
`;
const FromSelect = styled.input`
  width: 14vmax;
  height: 3vmax;
  border: none;
  outline: none;
  background: #f2f2f2;
  border-radius: 5px;
  padding-left: 1vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 43vw;
    height: 7vh;
    font-size: 1rem;
    font-weight: 700;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 43vw;
    height: 7vh;
    font-size: 1rem;
    font-weight: 700;
  }
`;

const DateInput = styled.input`
  width: 14vmax;
  height: 3vmax;
  outline: none;
  border: none;
  background: #f2f2f2;
  border-radius: 5px;
  padding: 0 3% 0 3%;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 34vw;
    height: 7vh;
    margin-top: 0vh;
    font-size: 1rem;
    font-weight: 700;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 34vw;
    height: 7vh;
    margin-top: 0vh;
    font-size: 1rem;
    font-weight: 700;
  }
`;
const AddTrip = styled.div`
  display: flex;
  gap: 2vmax;
  margin-top: 3vmax;
  margin-left: 12vmax;
  /* background-color:red; */
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 0;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: 0;
  }
`;
const AddTripText = styled.div`
  font-size: 1rem;
  font-weight: 700;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-top: 2vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-top: 2vh;
  }
`;

const AddIcon = styled(AiFillPlusCircle)`
  color: #145843;
  /* height: fit-content;
  width: fit-content; */
  cursor: pointer;
  margin-top: 0.4%;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 30vw;
    height: 6vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 30vw;
    height: 6vh;
  }
`;

const IconWraper = styled.div`
  display: flex;
  gap: 60vmax;
`;
const CloseIcon = styled(AiOutlineClose)`
  margin-top: 3vmax;
  cursor: pointer;
`;
const SearchButton = styled.button`
  background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  color: white;
  width: 9vmax;
  height: 2.5vmax;
  border: none;
  outline: none;
  margin-left: 13.8vmax;
  margin-top: 5vmax;
  margin-bottom: 1vmax;
  font-size: 1vmax;
  font-weight: 600;
  cursor: pointer;
  margin-left: 35vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 30vw;
    height: 6vh;
    margin-left: 3vw;
    margin-top: 0;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 30vw;
    height: 6vh;
    margin-left: 3vw;
    margin-top: 0;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 1.5rem;
  }
`;

const StyledHrTag = styled.hr`
  width: 65vmax;
  margin-left: 13vmax;
  margin-top: 1vmax;
  @media (min-width: 375px) and (max-width: 420px) {
    margin-left: 0;
    width: 70vmax;
  }
`;
const Img = styled.img`
  height: 38vmax;
  width: 100%;
  background-size: cover;
`;

const FerryInputComponent = () => {
  const [show, setShow] = React.useState(false);



  const handleSet = () => {
    setRoundTrip(roundTrip + 1);
  };

  const handleClose = () => {
    setRoundTrip(roundTrip - 1);
  };

  const [state, setState] = React.useState({
    from: "",
    to: "",
    NewDate: "",
  });

  const token =
    "U2FsdGVkX18+C0I4ZhgBMSVZsfLEi283MaeP/dYefwAw4dfUe6KHLowIHRSC07dEN7RcLU3KRa1fHWQaXQLgCFURlMLMhzYjVTGLIkdTwBE";
  const userName = "SeeAndamans";

  

  const [value, setValue] = React.useState(1);
  const [value2, setValue2] = React.useState(1);
  const increment = () => {
    setValue(value + 1);
    console.log(value)
  };
  const decrement = () => {
    if (value <= 1) return;
    setValue(value - 1);
    console.log(value)
  };
  const increment2 = () => {
    setValue2(value2 + 1);
  };
  const decrement2 = () => {
    if (value2 <= 1) return;
    setValue2(value2 - 1);
  };

  const [roundTrip, setRoundTrip] = React.useState(0);

  const navigate = useNavigate();

  const click = ()=>{
    navigate("/ferrylist")
  }

  return (
    <>
      <Img src={boat} />
      <GreenWrapperMain>
        <GreenWrapper>
          <TextWrapper>Book Your Ferry</TextWrapper>
        </GreenWrapper>
      </GreenWrapperMain>
      <form >
        <MainContainer>
          <PasssangersWrapper>
            <PassangersText>Select Passengers</PassangersText>
            <AdultsSelectWrapper>
              <AdlutText>Adults (Above 1 Year)</AdlutText>
              <InputWrapperMain>
              <InputWrapper>
                <ButtonNegative>
                  <AiOutlineMinus onClick={decrement} />
                </ButtonNegative>
                <InputValue value={value} />
                <ButtonPositive>
                  <AiOutlinePlus onClick={increment} />
                </ButtonPositive>
              </InputWrapper>
            </InputWrapperMain>
            </AdultsSelectWrapper>
            <InfantsSelectWrapper>
              <InfantsText>Infants (Below 12 months)</InfantsText>
              <InputWrapper>
              <ButtonNegative>
                <AiOutlineMinus onClick={decrement2} />
              </ButtonNegative>
              <InputValue value={value2} />
              <ButtonPositive>
                <AiOutlinePlus onClick={increment2} />
              </ButtonPositive>
            </InputWrapper>
            </InfantsSelectWrapper>
          </PasssangersWrapper>
          <SelectTripText>Select Trip(s)</SelectTripText>

          <FormMainContainer>
            <TripText>Trip 1</TripText>
            <StyledHrTag />

            <FormContainer>
              <FromWrapper>
                <StyledText>From</StyledText>
                <FromSelect
               
                  type="text"
                  placeholder="Enter Location"
                  defaultValue={"Port Blair"}
                  required
                />
              </FromWrapper>
              <FromWrapper>
                <StyledText>To</StyledText>
                <FromSelect
             
                  type="text"
                  defaultValue={"Swaraj Dweep"}
                  placeholder="Enter Location"
                  required
                />
              </FromWrapper>
              <FromWrapper>
                <StyledText>Date of Journey</StyledText>
                <DateInput
                
                  type="date"
                
                />
              </FromWrapper>
            </FormContainer>
          </FormMainContainer>
          {Array.from({ length: roundTrip }, (unused, index) => index + 1).map(
            (data) => {
              return (
                <>
                  <FormMainContainer>
                    <IconWraper>
                      <TripText>Trip {data + 1}</TripText>
                      <CloseIcon onClick={handleClose} />
                    </IconWraper>
                    <StyledHrTag />
                    <FormContainer>
                      <FromWrapper>
                        <StyledText>From</StyledText>
                        <FromSelect
                        
                          type="text"
                          placeholder="Enter Location"
                          required
                        />
                      </FromWrapper>
                      <FromWrapper>
                        <StyledText>To</StyledText>
                        <FromSelect
                         
                          type="text"
                          placeholder="Enter Location"
                          required
                        />
                      </FromWrapper>
                      <FromWrapper>
                        <StyledText>Date of Journey</StyledText>
                        <DateInput
                        
                          type="date"
                         
                        />
                      </FromWrapper>
                    </FormContainer>
                  </FormMainContainer>
                </>
              );
            }
          )}

          <AddTrip>
            <AddIcon onClick={handleSet} />
            <AddTripText>ADD ROUND TRIP</AddTripText>
            <SearchButton onClick={click}>Search</SearchButton>
          </AddTrip>
        </MainContainer>
      </form>
      <Iconsferry />
      <Ferrydetail />
      <Footer />
    </>
  );
};

export default FerryInputComponent;
