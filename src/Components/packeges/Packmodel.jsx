import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import left from "../../assets/leftarrow.svg";
import m1 from "../../assets/modelimg.png";
import star from "../../assets/star.png";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "#D9FFF0",
  boxShadow: 24,
  p: 4,
};

const Modeldiv = styled.div``;
const Greendiv = styled.div`
  background: #145843;
  height: 3vmax;
  width: 60.8vmax;
  margin-top: -2.1vmax;
  padding: 1vmax 1vmax;
  margin-left: -2.1vmax;
  display: flex;
  gap: 4vmax;
  justify-content: space-around;
`;
const Activity = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-family: Poppins;
  color: #ffffff;
  margin-top: 0.6vmax;
  font-size: 1.4vmax;
`;
const Input = styled.input`
  background: #ffffff;
  border-radius: 40px;
  height: 2.4vmax;
  width: 18vmax;
  :placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 0.9vmax;
  }
  border: none;
  outline: none;
  padding-left: 2vmax;
  margin-top: 0.6vmax;
`;
const Thirddiv = styled.div`
  display: flex;

  gap: 0.9vmax;
  margin-top: 0.8vmax;
`;
const Left = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
`;
const Back = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-family: Poppins;
  color: #ffffff;
  font-size: 1vmax;
`;
const Option = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5vmax;
  padding: 0.1vmax 0.1vmax;
  margin-top: 1vmax;
  color: #000000;
`;
const Carddiv = styled.div`
  margin-top: 1vmax;
`;
const Imagediv = styled.div``;
const Img = styled.img`
  height: 15%;
  width: 16.7vmax;
  background-size: cover;
  object-fit: cover;
`;
const White = styled.div`
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  width: 16.7vmax;
  margin-top: -2vmax;
  height: 12.4vmax;
`;
const Coral = styled.p`
  padding: 1vmax 1vmax;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9vmax;
  color: #145843;
  margin-top: 1vmax;
`;
const Loremtext = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.7vmax;
  padding: 1vmax 1vmax;
  margin-top: -1.4vmax;
`;
const Star = styled.div`
  display: flex;
  gap: 0.5vmax;
  padding: 0.8vmax 0.8vmax;
  margin-top: -1vmax;
`;
const Satrimg = styled.img`
  height: 1.1vmax;
  width: 1.1vmax;
`;
const Buttonclose = styled.button`
  margin: 0 auto;
  height: 2vmax;
  width: 5vmax;

  border: 1px solid #145843;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1vmax;
  color: #000000;
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  margin-left: 6.3vmax;
`;
const Maincard = styled.div`
  display: flex;
  gap: 2vmax;
  overflow-y: scroll;
  height: 26vmax;
  flex-wrap: wrap;
  width: 100%;
  position: -webkit-sticky;
`;

export default function Packmodel() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const clicks = () => {
    navigate("/packagedetail");
  };
  return (
    <>
      <center>
        <Modeldiv>
          <Button onClick={handleOpen} className="btn">
            Open modal
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Greendiv>
                <Activity>change Activity </Activity>
                <Input placeholder="Find a activity" />
                <Thirddiv>
                  <Left src={left} />
                  <Back>Back to itinerary</Back>
                </Thirddiv>
              </Greendiv>
              <Option>41 Options Found</Option>
              <Maincard>
                <Carddiv>
                  <Imagediv>
                    <Img src={m1} />
                  </Imagediv>
                  <White>
                    <Coral>Coral Safari Semisubmarine</Coral>
                    <Loremtext>
                      Non libero, ultricies magna ipsum egestas vel nec nunc,
                      sed. Ut enim scelerisque orci in lacinia risus viverra
                      non. Sodales nisl tristique adipiscing tincidun
                    </Loremtext>
                    <Star>
                      <Satrimg src={star} />
                      <Satrimg src={star} />
                      <Satrimg src={star} />
                    </Star>
                    <Buttonclose onClick={clicks}>Chose</Buttonclose>
                  </White>
                </Carddiv>
                <Carddiv>
                  <Imagediv>
                    <Img src={m1} />
                  </Imagediv>
                  <White>
                    <Coral>Coral Safari Semisubmarine</Coral>
                    <Loremtext>
                      Non libero, ultricies magna ipsum egestas vel nec nunc,
                      sed. Ut enim scelerisque orci in lacinia risus viverra
                      non. Sodales nisl tristique adipiscing tincidun
                    </Loremtext>
                    <Star>
                      <Satrimg src={star} />
                      <Satrimg src={star} />
                      <Satrimg src={star} />
                    </Star>
                    <Buttonclose>Chose</Buttonclose>
                  </White>
                </Carddiv>
                <Carddiv>
                  <Imagediv>
                    <Img src={m1} />
                  </Imagediv>
                  <White>
                    <Coral>Coral Safari Semisubmarine</Coral>
                    <Loremtext>
                      Non libero, ultricies magna ipsum egestas vel nec nunc,
                      sed. Ut enim scelerisque orci in lacinia risus viverra
                      non. Sodales nisl tristique adipiscing tincidun
                    </Loremtext>
                    <Star>
                      <Satrimg src={star} />
                      <Satrimg src={star} />
                      <Satrimg src={star} />
                    </Star>
                    <Buttonclose>Chose</Buttonclose>
                  </White>
                </Carddiv>
                <Carddiv>
                  <Imagediv>
                    <Img src={m1} />
                  </Imagediv>
                  <White>
                    <Coral>Coral Safari Semisubmarine</Coral>
                    <Loremtext>
                      Non libero, ultricies magna ipsum egestas vel nec nunc,
                      sed. Ut enim scelerisque orci in lacinia risus viverra
                      non. Sodales nisl tristique adipiscing tincidun
                    </Loremtext>
                    <Star>
                      <Satrimg src={star} />
                      <Satrimg src={star} />
                      <Satrimg src={star} />
                    </Star>
                    <Buttonclose>Chose</Buttonclose>
                  </White>
                </Carddiv>
                <Carddiv>
                  <Imagediv>
                    <Img src={m1} />
                  </Imagediv>
                  <White>
                    <Coral>Coral Safari Semisubmarine</Coral>
                    <Loremtext>
                      Non libero, ultricies magna ipsum egestas vel nec nunc,
                      sed. Ut enim scelerisque orci in lacinia risus viverra
                      non. Sodales nisl tristique adipiscing tincidun
                    </Loremtext>
                    <Star>
                      <Satrimg src={star} />
                      <Satrimg src={star} />
                      <Satrimg src={star} />
                    </Star>
                    <Buttonclose>Chose</Buttonclose>
                  </White>
                </Carddiv>
              </Maincard>
            </Box>
          </Modal>
        </Modeldiv>
      </center>
    </>
  );
}
