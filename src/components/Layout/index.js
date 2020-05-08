import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import BackgroundGradient from "../Background";
import CyoaForm from "../Form";
import Header from "../Header";

const Layout = () => (
  <>
    <BackgroundGradient />
    <Template>
      <Header />
      <CyoaForm />
    </Template>
  </>
);

const Template = styled.div`
  display: flex;
  flex-direction: column;
  padding: calc(1rem + 2vw) calc(1rem + 1vw);
`;

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
