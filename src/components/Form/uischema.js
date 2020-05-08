import CustomField from "../CustomFieldTemplate";

const uiSchema = {
  styling: {
    colors: {
      maintext: {
        "ui:widget": "color",
      },
      bgA: {
        "ui:widget": "color",
      },
      bgB: {
        "ui:widget": "color",
      },
      mainBorder: {
        "ui:widget": "color",
      },
      mainHighlight: {
        "ui:widget": "color",
      },
      charBgA: {
        "ui:widget": "color",
      },
      charBgB: {
        "ui:widget": "color",
      },
      charText: {
        "ui:widget": "color",
      },
      charBorder: {
        "ui:widget": "color",
      },
    },
    themeing: {
      fontIsLink: { "ui:widget": "hidden" },
    },
  },
  charSetup: {
    setting: { "ui:widget": "textarea" },
  },
  cyoa: {
    intro: {
      introText: { "ui:widget": "textarea" },
      appendText: { "ui:widget": "textarea" },
    },
    selections: {
      items: {
        choices: { 
          items: {
            effect: {"ui:FieldTemplate": CustomField}
          }
        },
      },
    },
  },
};

export default uiSchema;
