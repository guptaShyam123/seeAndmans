import React from "react";
import styled from "styled-components";
import img from "../../assets/sightphone.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdLocationPin } from "react-icons/md";
import "swiper/css";
import mobile from "../../assets/portphone.avif";
import mobile1 from "../../assets/phonehavelock.avif";
import mobile2 from "../../assets/neilphone.avif"
import mobile3 from "../../assets/bartangphone.avif"
import {baseURL} from "../../Components/Apibaseurl"

const Image = styled.img`
  width: 100vw;
  background-position: center;
  object-fit: cover;
`;

const Sightseeinglist = () => {
  const Sight = styled.p`
    color: #145843;
    font-size: 22px;
    font-weight: 700;
    font-family: Poppins;
    text-align: center;
    margin-top: 30px;
  `;
  const Stexts = styled.p`
    font-size: 15px;
    color: #000000;
    font-weight: 500;
    text-align: justify;
    padding: 2% 5%;
  `;
  const Port = styled.p`
    font-size: 22px;
    margin-top: 20px;
    color: #145843;
    font-weight: 700;
    text-align: center;
  `;
  const Maindiv = styled.div`
    /* background:red; */
    /* padding:0 20px; */

    /* background-sc */
    /* overflow: hid; */
    /* height:fit-content; */
    /* margin-top: 1px; */
    width: 100vw;
    /* background-color:lightgrey; */
    /* margin-bottom: 100px; */
  `;
  const Card = styled.div`
    box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
    /* height:150px; */
    /* height:00px; */

    background-color: #ffffff;
    margin-left: 20px;
    /* align-items: center; */
    /* display: flex; */
    /* height:fit-content; */
    width: 220px;
    /* height:fit-content; */
    /* padding: 10px px; */
    /* height:200px; */
    /* flex-direction: column; */
    /* width:fit-content; */
    margin-top: 40px;
    margin-bottom: 50px;
    /* height:20vh; */
    /* box-sizing: border-box; */
    border-radius: 20px;
    /* overflow-x: hidden; */
  `;

  const Mobile = styled.img`
    /* height:; */

    height: 23vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    /* object-fit: cover; */
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  `;
  const Whitediv = styled.div`
    /* background: red; */

    /* border-radius: 5px; */
    width: 91.8%;

    display: flex;
    flex-direction: column;
    /* flex-direction: column; */
    /* align-items: center; */
    /* background:pink; */
    /* height:20px; */
    /* width:300px; */
    padding: 3px 4px;
    gap: 2px;
    /* height:120px; */
    /* text-align:center; */
  `;
  const Power = styled.p`
    font-size: 12px;
    color: black;
    font-weight: 600;
    font-family: Poppins;
    padding-left: 10px;
    text-align: left;
  `;
  const Book = styled.p`
    font-size: 12px;
    color: black;
    font-weight: 500;
    font-family: Poppins;
    text-align: left;

    /* width:90%; */
    margin-left: 10px;
    /* padding-left:10px; */
  `;
  const Booknow = styled.p`
    color: black;
    text-align: right;
    font-size: 14px;
    font-weight: 700;
    text-align: left;
    padding-left: 10px;

    /* margin-right: 12px;; */
  `;
  const Locationdiv = styled.div`
    padding: 1% 2%;
    display: flex;
    align-items: center;
  `;
  const Loc = styled(MdLocationPin)``;
  const Location = styled.p`
    font-size: 17px;
    color: #145843;
    font-weight: 600;
    font-family: Poppins;
  `;
  const Have = styled.p`
    font-size: 22px;
    margin-top: 5px;
    color: #145843;
    font-weight: 700;
    text-align: center;
  `;
   const Neil = styled.p`
   font-size: 22px;
   margin-top: 5px;
   color: #145843;
   font-weight: 700;
   text-align: center;
 `;
  const Bar = styled.p`
  font-size: 22px;
  margin-top: 5px;
  color: #145843;
  font-weight: 700;
  text-align: center;
`;
  return (
    <>
      <Image src={img} />
      <Sight>SIGHTSEEING IN ANDMAN</Sight>
      <Stexts>
        Massa risus ornare nunc phasellus dui. Dui tempus quis viverra risus.
        Pretium ut amet, quis porta dolor. Aliquam euismod pellentesque a, risus
        ut. Vestibulum tellus et accumsan, aliquam proin non. Risus non in
        rutrum nisi, duis tristique sed adipiscing in. Tincidunt placerat morbi
        lacus nibh fames. Porttitor sit elit at nulla donec malesuada
        consectetur faucibus integer.
      </Stexts>
      <Port>PORT BLAIR</Port>

      <Maindiv>
        <Swiper
          spaceBetween={120}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="next">
            <Card>
              <Mobile src={mobile} />
              <Whitediv>
                <Booknow>Ross Island</Booknow>
                <Locationdiv>
                  <Loc />
                  <Location>Port Blair</Location>
                </Locationdiv>
              </Whitediv>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="next">
            <Card>
              <Mobile src={mobile} />
              <Whitediv>
              <Booknow>Ross Island</Booknow>
                <Locationdiv>
                  <Loc />
                  <Location>Port Blair</Location>
                </Locationdiv>
              </Whitediv>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="next">
            <Card>
              <Mobile src={mobile} />
              <Whitediv>
              <Booknow>Ross Island</Booknow>
                <Locationdiv>
                  <Loc />
                  <Location>Port Blair</Location>
                </Locationdiv>
              </Whitediv>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="next">
            <Card>
              <Mobile src={mobile} />
              <Whitediv>
              <Booknow>Ross Island</Booknow>
                <Locationdiv>
                  <Loc />
                  <Location>Port Blair</Location>
                </Locationdiv>
              </Whitediv>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="next">
            <Card>
              <Mobile src={mobile} />
              <Whitediv>
              <Booknow>Ross Island</Booknow>
                <Locationdiv>
                  <Loc />
                  <Location>Port Blair</Location>
                </Locationdiv>
              </Whitediv>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="next">
            <Card>
              <Mobile src={mobile} />
              <Whitediv>
              <Booknow>Ross Island</Booknow>
                <Locationdiv>
                  <Loc />
                  <Location>Port Blair</Location>
                </Locationdiv>
              </Whitediv>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Mobile src={mobile} />
              <Whitediv>
              <Booknow>Ross Island</Booknow>
                <Locationdiv>
                  <Loc />
                  <Location>Port Blair</Location>
                </Locationdiv>
              </Whitediv>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Mobile src={mobile} />
              <Whitediv>
              <Booknow>Ross Island</Booknow>
                <Locationdiv>
                  <Loc />
                  <Location>Port Blair</Location>
                </Locationdiv>
              </Whitediv>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Mobile src={mobile} />
              <Whitediv>
              <Booknow>Ross Island</Booknow>
                <Locationdiv>
                  <Loc />
                  <Location>Port Blair</Location>
                </Locationdiv>
              </Whitediv>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Mobile src={mobile} />
              <Whitediv>
              <Booknow>Ross Island</Booknow>
                <Locationdiv>
                  <Loc />
                  <Location>Port Blair</Location>
                </Locationdiv>
              </Whitediv>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Mobile src={mobile} />
              <Whitediv>
              <Booknow>Ross Island</Booknow>
                <Locationdiv>
                  <Loc />
                  <Location>Port Blair</Location>
                </Locationdiv>
              </Whitediv>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <Mobile src={mobile} />
              <Whitediv>
              <Booknow>Ross Island</Booknow>
                <Locationdiv>
                  <Loc />
                  <Location>Port Blair</Location>
                </Locationdiv>
              </Whitediv>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Maindiv>
      <Have>HAVELOCK</Have>

      <Maindiv>
      <Swiper
        spaceBetween={120}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="next">
          <Card>
            <Mobile src={mobile1} />
            <Whitediv>
              <Booknow>Coral Safari</Booknow>
              <Locationdiv>
                <Loc />
                <Location>Port Blair</Location>
              </Locationdiv>
            </Whitediv>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="next">
          <Card>
            <Mobile src={mobile1} />
            <Whitediv>
              <Booknow>Coral Safari</Booknow>
              <Locationdiv>
                <Loc />
                <Location>Port Blair</Location>
              </Locationdiv>
            </Whitediv>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="next">
          <Card>
            <Mobile src={mobile1} />
            <Whitediv>
              <Booknow>Scuba Dving</Booknow>
              <Locationdiv>
                <Loc />
                <Location>Port Blair</Location>
              </Locationdiv>
            </Whitediv>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="next">
          <Card>
            <Mobile src={mobile1} />
            <Whitediv>
              <Booknow>Coral Safari</Booknow>
              <Locationdiv>
                <Loc />
                <Location>Port Blair</Location>
              </Locationdiv>
            </Whitediv>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="next">
          <Card>
            <Mobile src={mobile1} />
            <Whitediv>
              <Booknow>Coral Safari</Booknow>
              <Locationdiv>
                <Loc />
                <Location>Port Blair</Location>
              </Locationdiv>
            </Whitediv>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="next">
          <Card>
            <Mobile src={mobile1} />
            <Whitediv>
              <Booknow>Coral Safari</Booknow>
              <Locationdiv>
                <Loc />
                <Location>Port Blair</Location>
              </Locationdiv>
            </Whitediv>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Mobile src={mobile1} />
            <Whitediv>
              <Booknow>Coral Safari</Booknow>
              <Locationdiv>
                <Loc />
                <Location>Port Blair</Location>
              </Locationdiv>
            </Whitediv>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Mobile src={mobile1} />
            <Whitediv>
              <Booknow>Coral Safari</Booknow>
              <Locationdiv>
                <Loc />
                <Location>Port Blair</Location>
              </Locationdiv>
            </Whitediv>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Mobile src={mobile1} />
            <Whitediv>
              <Booknow>Coral Safari</Booknow>
              <Locationdiv>
                <Loc />
                <Location>Port Blair</Location>
              </Locationdiv>
            </Whitediv>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Mobile src={mobile1} />
            <Whitediv>
              <Booknow>Coral Safari</Booknow>
              <Locationdiv>
                <Loc />
                <Location>Port Blair</Location>
              </Locationdiv>
            </Whitediv>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Mobile src={mobile1} />
            <Whitediv>
              <Booknow>Coral Safari</Booknow>
              <Locationdiv>
                <Loc />
                <Location>Port Blair</Location>
              </Locationdiv>
            </Whitediv>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <Mobile src={mobile1} />
            <Whitediv>
              <Booknow>Coral Safari</Booknow>
              <Locationdiv>
                <Loc />
                <Location>Port Blair</Location>
              </Locationdiv>
            </Whitediv>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Maindiv>
    <Neil>NEIL</Neil>

    <Maindiv>
    <Swiper
      spaceBetween={120}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="next">
        <Card>
          <Mobile src={mobile2} />
          <Whitediv>
            <Booknow> Shaeed Dweep</Booknow>
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="next">
        <Card>
          <Mobile src={mobile2} />
          <Whitediv>
          <Booknow> Shaeed Dweep</Booknow>
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="next">
        <Card>
          <Mobile src={mobile2} />
          <Whitediv>
          <Booknow> Shaeed Dweep</Booknow>
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="next">
        <Card>
          <Mobile src={mobile2} />
          <Whitediv>
          <Booknow> Shaeed Dweep</Booknow>
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="next">
        <Card>
          <Mobile src={mobile2} />
          <Whitediv>
          <Booknow> Shaeed Dweep</Booknow>
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="next">
        <Card>
          <Mobile src={mobile2} />
          <Whitediv>
          <Booknow> Shaeed Dweep</Booknow>
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <Mobile src={mobile2} />
          <Whitediv>
          <Booknow> Shaeed Dweep</Booknow>
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <Mobile src={mobile2} />
          <Whitediv>
          <Booknow> Shaeed Dweep</Booknow>
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <Mobile src={mobile2} />
          <Whitediv>
          <Booknow> Shaeed Dweep</Booknow>
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <Mobile src={mobile2} />
          <Whitediv>
          <Booknow> Shaeed Dweep</Booknow>
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <Mobile src={mobile2} />
          <Whitediv>
          <Booknow> Shaeed Dweep</Booknow>
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <Mobile src={mobile2} />
          <Whitediv>
          <Booknow> Shaeed Dweep</Booknow>
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
    </Swiper>
  </Maindiv>
  <Bar>BARTANG</Bar>

  <Maindiv>
  <Swiper
    spaceBetween={120}
    slidesPerView={2}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide className="next">
      <Card>
        <Mobile src={mobile3} />
        <Whitediv>
          <Booknow> Shaeed Dweep</Booknow>
          <Locationdiv>
            <Loc />
            <Location>Port Blair</Location>
          </Locationdiv>
        </Whitediv>
      </Card>
    </SwiperSlide>
    <SwiperSlide className="next">
      <Card>
        <Mobile src={mobile3} />
        <Whitediv>
        <Booknow> Shaeed Dweep</Booknow>
          <Locationdiv>
            <Loc />
            <Location>Port Blair</Location>
          </Locationdiv>
        </Whitediv>
      </Card>
    </SwiperSlide>
    <SwiperSlide className="next">
      <Card>
        <Mobile src={mobile3} />
        <Whitediv>
        <Booknow> Shaeed Dweep</Booknow>
          <Locationdiv>
            <Loc />
            <Location>Port Blair</Location>
          </Locationdiv>
        </Whitediv>
      </Card>
    </SwiperSlide>
    <SwiperSlide className="next">
      <Card>
        <Mobile src={mobile3} />
        <Whitediv>
        <Booknow> Shaeed Dweep</Booknow>
          <Locationdiv>
            <Loc />
            <Location>Port Blair</Location>
          </Locationdiv>
        </Whitediv>
      </Card>
    </SwiperSlide>
    <SwiperSlide className="next">
      <Card>
        <Mobile src={mobile3} />
        <Whitediv>
        <Booknow> Shaeed Dweep</Booknow>
          <Locationdiv>
            <Loc />
            <Location>Port Blair</Location>
          </Locationdiv>
        </Whitediv>
      </Card>
    </SwiperSlide>
    <SwiperSlide className="next">
      <Card>
        <Mobile src={mobile3} />
        <Whitediv>
        <Booknow> Shaeed Dweep</Booknow>
          <Locationdiv>
            <Loc />
            <Location>Port Blair</Location>
          </Locationdiv>
        </Whitediv>
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card>
        <Mobile src={mobile3} />
        <Whitediv>
        <Booknow> Shaeed Dweep</Booknow>
          <Locationdiv>
            <Loc />
            <Location>Port Blair</Location>
          </Locationdiv>
        </Whitediv>
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card>
        <Mobile src={mobile3} />
        <Whitediv>
        <Booknow> Shaeed Dweep</Booknow>
          <Locationdiv>
            <Loc />
            <Location>Port Blair</Location>
          </Locationdiv>
        </Whitediv>
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card>
        <Mobile src={mobile3} />
        <Whitediv>
        <Booknow> Shaeed Dweep</Booknow>
          <Locationdiv>
            <Loc />
            <Location>Port Blair</Location>
          </Locationdiv>
        </Whitediv>
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card>
        <Mobile src={mobile3} />
        <Whitediv>
        <Booknow> Shaeed Dweep</Booknow>
          <Locationdiv>
            <Loc />
            <Location>Port Blair</Location>
          </Locationdiv>
        </Whitediv>
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card>
        <Mobile src={mobile3} />
        <Whitediv>
        <Booknow> Shaeed Dweep</Booknow>
          <Locationdiv>
            <Loc />
            <Location>Port Blair</Location>
          </Locationdiv>
        </Whitediv>
      </Card>
    </SwiperSlide>
    <SwiperSlide>
      <Card>
        <Mobile src={mobile3} />
        <Whitediv>
        <Booknow> Shaeed Dweep</Booknow>
          <Locationdiv>
            <Loc />
            <Location>Port Blair</Location>
          </Locationdiv>
        </Whitediv>
      </Card>
    </SwiperSlide>
  </Swiper>
</Maindiv>
    </>
  );
};

export default Sightseeinglist;
