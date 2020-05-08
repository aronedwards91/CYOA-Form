import CustomField from "../CustomFieldTemplate";
import CustomWidgets from "../CustomWidgets";

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
    cyoa: {
      backgroundImg: { "ui:widget": CustomWidgets.ImgFileWidget },
    },
    themeing: {
      fontIsLink: { "ui:widget": "hidden" },
    },
  },
  charSetup: {
    setting: { "ui:widget": "textarea" },
    purchasing: {
      items: {
        icon: { "ui:widget": CustomWidgets.ImgFileWidget },
      },
    },
  },
  cyoa: {
    header: {
      logo: { "ui:widget": CustomWidgets.ImgFileWidget },
    },
    intro: {
      introText: { "ui:widget": "textarea" },
      appendText: { "ui:widget": "textarea" },
    },
    selections: {
      items: {
        choices: {
          items: {
            img: { "ui:widget": CustomWidgets.ImgFileWidget },
            effect: {
              "ui:FieldTemplate": CustomField,
              "char-profimg": { "ui:widget": CustomWidgets.ImgFileWidget },
            },
          },
        },
      },
    },
  },
};

export default uiSchema;
