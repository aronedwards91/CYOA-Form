import React from "react";
import Form from "@rjsf/core";

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

const CyoaForm = () => (
  <Form
    schema={schema}
    uiSchema={uiSchema}
    formData={FormData}
    onChange={() => console.log("changed")}
    onSubmit={(evt) => console.log("submitted", evt)}
    onError={console.log("errors")}
  />
);

export default CyoaForm;
