export default {
  type: "object",
  title: "Choices Setup",
  properties: {
    header: {
      title: "App Header",
      type: "object",
      description: "Setttings for Header design",
      properties: {
        logo: {
          type: "string",
          format: "data-url",
          title: "Small Header Logo",
        },
        title: {
          type: "string",
          title: "CYOA - Title",
        },
        subHeader: {
          type: "string",
          title: "Sub-Header",
        },
        author: {
          type: "string",
          title: "Author",
        },
      },
    },
    intro: {
      title: "Setup World Introduction",
      type: "object",
      properties: {
        title: {
          type: "string",
          title: "Intro Title",
        },
        introText: {
          type: "string",
          title: "Intro Text",
        },
        appendTitle: {
          type: "string",
          title: "Sub-Section Title",
        },
        appendText: {
          type: "string",
          title: "Sub-Section Text",
        },
      },
    },
    selections: {
      type: "array",
      minItems: 1,
      uniqueItems: true,
      description: "Build a list of player choices",
      items: {
        type: "object",
        title: "Choice Type Data",
        properties: {
          name: {
            type: "string",
            title: "Choice Type Name",
          },
          description: {
            type: "string",
            title: "Choice Type Description",
          },
          style: {
            type: "string",
            title: "Choice Visual Style",
            enum: ["lines", "boxes", "smallboxes"],
            enumNames: ["Lines", "Boxes", "Small Boxes"],
          },
          buy: {
            type: "object",
            title: "Purchase Options",
            properties: {
              unique: {
                type: "boolean",
                title: "Choices are unique",
                default: true,
              },
              max: {
                type: "number",
                minimum: 1,
                maximum: 100,
                multipleOf: 1,
                title: "Max of Type",
                default: 1000,
              },
            },
          },
          choices: {
            type: "array",
            minItems: 2,
            uniqueItems: true,
            description: "Choices available",
            items: {
              type: "object",
              title: "Choice Data",
              properties: {
                name: {
                  type: "string",
                  title: "Choice Name",
                },
                description: {
                  type: "string",
                  title: "Choice Description",
                },
                img: {
                  type: "string",
                  format: "data-url",
                  title: "Choice Img",
                },
                effect: {
                  type: "object",
                  title: "Effects of Choice",
                  properties: {
                    cost: {
                      type: "array",
                      title: "cost",
                      description: "Each entry applies to each purchasing point type, if only fill in first rest will be 0.",
                      default: [10],
                      items: {
                        type: "number",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
