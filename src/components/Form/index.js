import React, { useState } from "react";
import Form from "@rjsf/core";
import { createFile, runJSONFromUpload, isEmptyObj } from "../../utils";
import BuildTextObj from "../../filebreakdown";

import uiSchema from "./uischema";
import FormData from "./defaultFormData";
import ChoiceSection from "./choiceSectionForm";
import StylingSection from "./stylingSectionSchema";
import CharSection from "./charSetupSectionSchema";

import {
  PadWrapper,
  InputStyled,
  FancyBtn,
  HiddenBtn,
  Header3,
} from "../StyledItems";

const BackupString = {
  backup: "backup",
  build: "build",
};
const formId = "cyoaform";

const schema = {
  title: "CYOA Form",
  type: "object",
  properties: {
    charSetup: CharSection,
    cyoa: ChoiceSection,
    styling: StylingSection,
  },
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
  const setError = (err) => {
    window.alert('Errors:' + err.map(item => item.stack));
  };

  const [defaultFormData, setDefaultFormData] = useState(FormData);
  const importData = () => {
    console.log("file uploaded;");
    runJSONFromUpload(importID, setDefaultFormData);
  };

  let submitAction = "build";
  const buildJson = () => {
    submitAction = BackupString.backup;
    document.getElementById("formSubmitBtn").click();
  };
  const buildSite = () => {
    submitAction = BackupString.build;
    document.getElementById("formSubmitBtn").click();
  };

  const ContructApp = (data, e) => {
    console.log('dd--', data);
    if (submitAction === "build") {
      const form = CleanJson(data.formData);
      const newTitle =
        data.formData.cyoa.header.title +
        " | " +
        data.formData.cyoa.header.author;
      const decodedPre = window.atob(BuildTextObj.pre);
      const decodedData =
        decodedPre.replace("CYOA - DarkWood", newTitle) +
        JSON.stringify(form) +
        window.atob(BuildTextObj.post);

      createFile(
        decodedData,
        `${data.formData.cyoa.header.title}.html`,
        "text/html"
      );
    } else if (submitAction === "backup") {
      ExportJson(data);
    }
  };

  return (
    <>
      <Form
        id={formId}
        schema={schema}
        uiSchema={uiSchema}
        formData={defaultFormData}
        onSubmit={ContructApp}
        onError={setError}
      >
        <HiddenBtn type="submit" id="formSubmitBtn" />
        <PadWrapper>
          <FancyBtn onClick={buildSite}>Build Website</FancyBtn>
          <FancyBtn onClick={buildJson}>Backup as .json</FancyBtn>
        </PadWrapper>
      </Form>
      <Header3>{"To apply backup, choose file below & hit import."}</Header3>
      <PadWrapper>
        <InputStyled type="file" id={importID} />
        <FancyBtn onClick={importData}>Import Backup From File</FancyBtn>
      </PadWrapper>
    </>
  );
};

export default CyoaForm;
