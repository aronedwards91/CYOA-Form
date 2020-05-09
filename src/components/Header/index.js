import React from "react";
import styled from "styled-components";

const Header = () => (
  <>
    <Headline>CYOA Form </Headline>
    <Intro>
      {
        "This Form is a simply way to custom build your own CYOA html page apps, the resulting page will be entirely self-contained and can be shared as a file or hosted on a webpage(as can this form if downloaded from it's github page ). The form is ready with some example values for guidance, and so that it can immediately be tested. At the bottom of this page you can also backup & reimport your work as a .json file."
      }
    </Intro>
    <SmLink
      href="https://github.com/aronedwards91/CYOA-Form/releases"
      target="_blank"
    >
      Github Page
    </SmLink>
  </>
);

const Headline = styled.h1`
  color: white;
`;
const Intro = styled.p`
  font-size: calc(0.7rem + 0.6vw);
  color: white;
  max-width: 70%;
  line-height: 1.6;
  margin-bottom: 32px;
`;
const SmLink = styled.a`
  color: aliceblue;
  width: fit-content;
  margin-bottom: 32px;
`;
export default Header;
