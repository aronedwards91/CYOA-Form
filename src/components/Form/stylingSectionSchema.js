export default {
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
        },
        bgA: {
          type: "string",
          title: "Background gradient A",
        },
        bgB: {
          type: "string",
          title: "Background gradient B",
        },
        mainBorder: {
          type: "string",
          title: "Main border color",
        },
        mainHighlight: {
          type: "string",
          title: "Main Highlight color",
        },
        charBgA: {
          type: "string",
          title: "Character panel gradient A",
        },
        charBgB: {
          type: "string",
          title: "Character panel gradient B",
        },
        charText: {
          type: "string",
          title: "Character panel text color",
        },
        charBorder: {
          type: "string",
          title: "Character panel border color",
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
        },
        sidebarWidthDeskSm: {
          type: "string",
          title: "Sidebar width collapsed on desktop",
        },
        sidebarWidthMobSm: {
          type: "string",
          title: "Sidebar height collapsed mobile",
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
        },
        backgroundGradient: {
          type: "string",
          title: "Gradient colors",
          description: "list gradient colors as per css linear-gradient spec",
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
          multipleOf: 0.01,
          title: "Font scaling",
        },
        sectionCornerRadius: {
          type: "string",
          title: "corner radius",
          description: "use css values; 10px, 0.4rem, 30%...",
        },
        bordersWidth: {
          type: "string",
          title: "Main border width",
          description: "use css values; 10px, 0.4rem, 30%...",
        },
        borderStyle: {
          type: "string",
          title: "CSS Border style",
          description:
            "use; none, hidden ,dotted, dashed, solid, double, groove, ridge, inset, outset.",
        },
      },
    },
  },
};
