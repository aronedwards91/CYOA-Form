import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import BackgroundGradient from "../Background";
import CyoaForm from "../Form";

const Layout = () => (
  <>
    <BackgroundGradient />
    <Template>
      <h1>CYOA Form</h1>
      <CyoaForm />
    </Template>
  </>
);

const Template = styled.div`
  display: flex;
  flex-direction: column;
  padding: calc(2rem + 2vw);
`;

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
