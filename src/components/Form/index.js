import React from "react";
import Form from "@rjsf/core";
import { createFile } from "../../utils";
import BuildTextObj from "../../filebreakdown";

import uiSchema from "./uischema";
import FormData from "./defaultFormData";
import ChoiceSection from "./choiceSectionForm";
import StylingSection from "./stylingSectionSchema";
import CharSection from "./charSetupSectionSchema";

const schema = {
  title: "CYOA Form",
  type: "object",
  properties: {
    styling: StylingSection,
    charSetup: CharSection,
    cyoa: ChoiceSection,
  },
};

const ContructApp = (data) => {
  data.appData = { appversion: 2 };
  console.log("json", data);
  const decodedData =
    window.atob(BuildTextObj.pre) +
    JSON.stringify(data.formData) +
    window.atob(BuildTextObj.post);

  createFile(
    decodedData,
    `${data.formData.cyoa.header.title}.html`,
    "	text/html"
  );
};

const CyoaForm = () => (
  <Form
    schema={schema}
    uiSchema={uiSchema}
    formData={FormData}
    onChange={() => console.log("changed")}
    onSubmit={ContructApp}
    onError={console.log("errors")}
  />
);

export default CyoaForm;
