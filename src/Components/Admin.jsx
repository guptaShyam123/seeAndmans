import React from "react";
import styled from "styled-components";
import admin from "../assets/admin.png";
import search from "../assets/search2.svg";
import ball from "../assets/ball.svg";
import graph from "../assets/graph.svg";

const Maindiv = styled.div`
  background-color: #f9d422;
  width: 100%;
  height: 51vmax;
  display: flex;
  gap: 4vmax;
`;
const Griddiv = styled.div`
  display: grid;
  margin-left: 4vmax;
  margin-top: 2vmax;
  height: auto;
`;
const Flex = styled.div`
  display: flex;
  gap: 2vmax;
  margin-top: 4vmax;
`;
const Img = styled.img`
  height: 3vmax;
  width: 3vmax;
`;
const P = styled.p`
  color: #000000;
  font-family: Lusitana;
  font-style: normal;
  font-weight: 400;
  font-size: 2vmax;
`;
const P1 = styled.p`
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vmax;
  padding-top: 2vmax;
  padding-left: 1vmax;
`;
const Studio = styled.p`
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vmax;
  padding-top: 2vmax;
  padding-left: 1vmax;
`;
const Active = styled.p`
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vmax;
  padding-top: 1vmax;
`;
const Inactive = styled.p`
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vmax;
  padding-top: 1vmax;
`;
const Subscription = styled.p`
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vmax;
  padding-top: 1vmax;
`;
const Query = styled.p`
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vmax;
  padding-top: 1vmax;
`;
const Notification = styled.p`
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vmax;
  padding-top: 1vmax;
`;
const Div1 = styled.div`
  padding-left: 1vmax;
  gap: 4vmax;
`;
const Div2 = styled.div`
  margin-top: 2vmax;
  gap: 2vmax;
  display: grid;
  padding-left: 1vmax;
`;

const Audition = styled.p`
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vmax;
`;
const Promotion = styled.p`
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vmax;
`;
const Management = styled.p`
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2vmax;
`;
const Whitediv = styled.div`
  background: #f3f7fd;
  border-radius: 40px 0px 0px 40px;
  height: 48vmax;
  width: 78vmax;
  margin-top: 2vmax;
`;
const Inputdiv = styled.div`
  display: flex;
  margin-top: 2vmax;
  margin-left: 2vmax;
  gap: 2vmax;
`;
const Searimg = styled.img`
  height: 1vmax;
  width: 1vmax;
  position: absolute;
  padding-top: 0.8vmax;
  margin-left: 2vmax;
`;
const Input = styled.input`
  background: #ffffff;
  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.18);
  border-radius: 5px;
  width: 35vmax;
  height: 2.5vmax;
  border: none;

  padding-left: 5vmax;
`;

const Balldiv = styled.div`
  display: flex;
  padding-left: 3vmax;
  padding-top: vmax;
  gap: 2vmax;
  margin-top: 0.4vmax;
`;

const Ball = styled.img`
  height: 1vmax;
  width: 1vmax;
  position: absolute;
  padding-top: 0.7vmax;
  padding-left: 0.5vmax;
`;
const First = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.18);
  height: 2vmax;
  width: 2vmax;
`;

const Setting = styled.img`
  height: 1vmax;
  width: 1vmax;

  position: absolute;
  padding-left: 4.5vmax;
  padding-top: 0.7vmax;
`;
const Second = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.18);
  height: 2vmax;
  width: 2vmax;
`;

const Graph = styled.img`
  margin-top: 2vmax;
  margin-left: 2vmax;
  height: 32vmax;
`;

const Admin = () => {
  return (
    <>
      <Maindiv>
        <Griddiv>
          <Flex>
            <Img src={admin} />
            <P>Admin</P>
          </Flex>
          <P1>Dashboard</P1>
          <Studio>Studio Section</Studio>
          <Div1>
            <Active>Active User</Active>
            <Inactive>Inactive User</Inactive>
            <Subscription>Subscription</Subscription>
            <Query>Query</Query>
            <Notification>Notification</Notification>
          </Div1>
          <Div2>
            <Audition>Audition Section</Audition>
            <Promotion>Promotion Request</Promotion>
            <Management>Management</Management>
          </Div2>
        </Griddiv>

        <Whitediv>
          <Inputdiv>
            <Searimg src={search} />
            <Input type="text" placeholder="Search here" />
            <Balldiv>
              <First></First>
              <Ball src={ball} />
              <Second></Second>
              <Setting src={ball} />
            </Balldiv>
          </Inputdiv>

          <Graph src={graph} />
        </Whitediv>
      </Maindiv>
    </>
  );
};

export default Admin;
