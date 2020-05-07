import React from "react";
import Form from "@rjsf/core";
import uiSchema from "./uischema";

const schema = {
  title: "CYOA Form",
  type: "object",
  // required: ["styling.colors"],
  properties: {
    styling: {
      type: "object",
      title: "CYOA App Styling",
      properties: {
        colors: {
          type: "object",
          title: "App Color Styling",
          description: "Color selection",
          properties: {
            maintext: {
              type: "string",
              title: "Main text color",
              default: "#020202",
            },
            bgA: {
              type: "string",
              title: "Background gradient A",
              default: "#628746",
            },
            bgB: {
              type: "string",
              title: "Background gradient B",
              default: "#2E4E15",
            },
            mainBorder: {
              type: "string",
              title: "Main border color",
              default: "#1A3407",
            },
            mainHighlight: {
              type: "string",
              title: "Main Highlight color",
              default: "#BCFA0F",
            },
            charBgA: {
              type: "string",
              title: "Character panel gradient A",
              default: "#90A437",
            },
            charBgB: {
              type: "string",
              title: "Character panel gradient B",
              default: "#E7F6A4",
            },
            charText: {
              type: "string",
              title: "Character panel text color",
              default: "#1f2406",
            },
            charBorder: {
              type: "string",
              title: "Character panel border color",
              default: "#435200",
            },
          },
        },
        layout: {
          type: "object",
          title: "App layout",
          description:
            "Sets sidebar width via css widths eg; '60px', '12rem', '40%'...",
          properties: {
            sidebarWidth: {
              type: "string",
              title: "Sidebar width on Desktop size",
              default: "380px",
            },
            sidebarWidthDeskSm: {
              type: "string",
              title: "Sidebar width collapsed on desktop",
              default: "120px",
            },
            sidebarWidthMobSm: {
              type: "string",
              title: "Sidebar height collapsed mobile",
              default: "60px",
            },
          },
        },
        cyoa: {
          type: "object",
          title: "Background styling",
          description:
            "Sets cyoa options area background, if image is false, uses gradient instead",
          properties: {
            backgroundImg: {
              type: "string",
              format: "data-url",
              title: "Import an image for use as the background.",
            },
            backgroundImgObjectFit: {
              type: "string",
              title: "Object-fit",
              description: "CSS object-fit setting for images",
              default: "cover",
            },
            backgroundGradient: {
              type: "string",
              title: "Gradient colors",
              description:
                "list gradient colors as per css linear-gradient spec",
              default: "darkgreen, green, lightgreen",
            },
          },
        },
        themeing: {
          type: "object",
          title: "App themeing",
          description: "Sets cyoa theme elements such as font & look",
          properties: {
            fontName: {
              type: "string",
              title: "Font name",
              default: "None",
            },
            fontIsLink: {
              type: "boolean",
              title: "Hidden",
              default: false,
            },
            font: {
              type: "string",
              format: "data-url",
              title: ".TTF font file",
            },
            fontScaling: {
              type: "number",
              minimum: 0.5,
              maximum: 2.5,
              multipleOf: 0.1,
              title: "Font scaling",
              default: 1.1,
            },
            sectionCornerRadius: {
              type: "string",
              title: "corner radius",
              description: "use css values; 10px, 0.4rem, 30%...",
              default: "10px",
            },
            bordersWidth: {
              type: "string",
              title: "Main border width",
              description: "use css values; 10px, 0.4rem, 30%...",
              default: "6px",
            },
            borderStyle: {
              type: "string",
              title: "CSS Border style",
              description:
                "use; none, hidden ,dotted, dashed, solid, double, groove, ridge, inset, outset.",
              default: "double",
            },
          },
        },
      },
    },
  },
};

const CyoaForm = () => (
  <Form
    schema={schema}
    uiSchema={uiSchema}
    onChange={() => console.log("changed")}
    onSubmit={(evt) => console.log("submitted", evt)}
    onError={console.log("errors")}
  />
);

export default CyoaForm;
