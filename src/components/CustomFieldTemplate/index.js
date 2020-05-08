import React, { useState } from "react";
import styled from "styled-components";

const CustomFieldTemplate = ({
  id,
  classNames,
  label,
  help,
  required,
  description,
  errors,
  children,
}) => {
  const [showEffects, setShowEffects] = useState(false);
  const OpenEffects = () => {
    setShowEffects(true);
  };
  const HideEffects = () => {
    setShowEffects(false);
  };

  return (
    <div className={classNames}>
      <LineWrap>
        {showEffects ? (
          <HideBtn onClick={HideEffects}>Hide</HideBtn>
        ) : (
          <ShowBtn onClick={OpenEffects}>Show</ShowBtn>
        )}

        <legend>Set the effects of taking this choice</legend>
      </LineWrap>

      {description}
      {showEffects && children}
      {showEffects && <HideBtn onClick={HideEffects}>Hide Choice Effects</HideBtn>}
      {errors}
      {help}
    </div>
  );
};

const LineWrap = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
`;
const Btn = styled.div`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  padding: 4px 8px;
`;
const ShowBtn = styled(Btn)`
  color: white;
  background: green;
`;
const HideBtn = styled(Btn)`
  color: white;
  background: darkred;
  width: fit-content;
  margin: 4px;
`;

export default CustomFieldTemplate;
