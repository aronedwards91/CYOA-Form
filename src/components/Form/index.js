import React, { useState } from "react";
import Form from "@rjsf/core";
import { createFile, runJSONFromUpload, isEmptyObj } from "../../utils";
import BuildTextObj from "../../filebreakdown";

import uiSchema from "./uischema";
import FormData from "./defaultFormData";
import ChoiceSection from "./choiceSectionForm";
import StylingSection from "./stylingSectionSchema";
import CharSection from "./charSetupSectionSchema";

import { PadWrapper, InputStyled, ImportBtn } from "../StyledItems";

const schema = {
  title: "CYOA Form",
  type: "object",
  properties: {
    charSetup: CharSection,
    cyoa: ChoiceSection,
    styling: StylingSection,
  },
};

const ContructApp = (data, eventData) => {

  if (eventData.nativeEvent.submitter.value === "build") {
    const form = CleanJson(data.formData);

    const decodedData =
      window.atob(BuildTextObj.pre) +
      JSON.stringify(form) +
      window.atob(BuildTextObj.post);

    createFile(
      decodedData,
      `${data.formData.cyoa.header.title}.html`,
      "text/html"
    );
  } else if (eventData.nativeEvent.submitter.value === "backup") {
    ExportJson(data);
  }
};

const CleanJson = (data) => {
  const ChoicesData = data.cyoa.selections;

  ChoicesData.forEach((choiceType) => {
    choiceType.choices.forEach((choice) => {
      Object.keys(choice.effect).forEach((key) => {
        const Effect = choice.effect[key];
        // removes empty arrays
        if (key === "inv-items" && choice.effect["inv-items"].length === 0) {
          delete choice.effect["inv-items"];
          // removes empty objects as cause bugs
        } else if (
          typeof Effect === "object" &&
          !Array.isArray(Effect) &&
          isEmptyObj(Effect)
        ) {
          delete choice.effect[key];
        }
      });
    });
  });
  return data;
};

const importID = "importJump";
const ExportJson = (data) => {
  createFile(
    JSON.stringify(data.formData),
    `${data.formData.cyoa.header.title}.bkup.json`,
    "application/json"
  );
};

const CyoaForm = () => {
  const [defaultFormData, setDefaultFormData] = useState(FormData);
  const importData = () => {
    console.log("file uploaded;");
    runJSONFromUpload(importID, setDefaultFormData);
  };
  return (
    <>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={defaultFormData}
        onSubmit={ContructApp}
        onError={(evt) => console.log("errors", evt)}
      >
        <button type="submit" name="submitButton" value="build">
          Build Webpage
        </button>
        <button type="submit" name="submitButton" value="backup">
          Backup as .json
        </button>
      </Form>
      <PadWrapper>
        <InputStyled type="file" id={importID} />
        <ImportBtn onClick={importData}>Import Data</ImportBtn>
      </PadWrapper>
    </>
  );
};

export default CyoaForm;
