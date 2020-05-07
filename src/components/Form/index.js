import React, { useState } from "react";
import Form from "@rjsf/core";
import { createFile, runJSONFromUpload } from "../../utils";
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
    styling: StylingSection,
    charSetup: CharSection,
    cyoa: ChoiceSection,
  },
};

const ContructApp = (data, eventData) => {
  console.log("json", data);
  console.log("event", eventData.nativeEvent.submitter.value);
  if (eventData.nativeEvent.submitter.value === "build") {
    data.formData.appData = { appversion: 2 };

    const decodedData =
      window.atob(BuildTextObj.pre) +
      JSON.stringify(data.formData) +
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

const ExportJson = (data) => {
  createFile(
    JSON.stringify(data.formData),
    `${data.formData.cyoa.header.title}.bkup.json`,
    "application/json"
  );
};
const importID = "importJump";

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
