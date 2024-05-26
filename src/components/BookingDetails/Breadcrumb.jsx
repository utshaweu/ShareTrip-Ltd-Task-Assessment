import React from "react";
import styled from "styled-components";
import Arrow from "../../assets/Vector.svg";

const BreadcrumbDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
`;

const BreadcrumbLink = styled.a`
  font-size: 13px;
  font-weight: 400;
  margin-right: 10px;
  margin-left: ${(props) => (props.$ml ? "0px" : "10px")};
  color: ${(props) => (props.$highlighter ? "#1882FF" : "#5A6573")};
  line-height: 18px;
  paragraph: 8px;
`;

const Breadcrumb = () => {
  return (
    <BreadcrumbDiv>
      <BreadcrumbLink href="#" $ml>
        Home
      </BreadcrumbLink>{" "}
      <img src={Arrow} alt="arrow" /> <BreadcrumbLink href="#">Booking History</BreadcrumbLink> <img src={Arrow} alt="arrow" /> <BreadcrumbLink href="#">Flight</BreadcrumbLink>{" "}
      <img src={Arrow} alt="arrow" />{" "}
      <BreadcrumbLink href="#" $highlighter>
        STFL17121182045413
      </BreadcrumbLink>
    </BreadcrumbDiv>
  );
};

export default Breadcrumb;
