import React from "react";
import Form from "@rjsf/core";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false },
  },
};
const CyoaForm = () => (
  <Form
    schema={schema}
    onChange={() => console.log("changed")}
    onSubmit={(evt) => console.log("submitted", evt)}
    onError={console.log("errors")}
  />
);

export default CyoaForm;
