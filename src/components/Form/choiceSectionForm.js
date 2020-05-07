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
                  required: ["cost"],
                  properties: {
                    cost: {
                      type: "array",
                      title: "cost",
                      minItems: 1,
                      description:
                        "Each entry applies to each 'Purchasing Point's type, if only fill in first rest will be 0.",
                      default: [10],
                      items: {
                        type: "integer",
                      },
                    },
                    "char-profimg": {
                      type: "string",
                      format: "data-url",
                      title: "Img for Character Profile",
                    },
                    "body-race": {
                      type: "string",
                      title: "Race Name",
                    },
                    "char-background": {
                      type: "object",
                      title: "Character Background",
                      default: null,
                      properties: {
                        name: {
                          type: "string",
                          title: "Background Title",
                        },
                        desc: {
                          type: "string",
                          title: "Background Description",
                        },
                      },
                    },
                    "char-challenge": {
                      type: "object",
                      title: "Character's Challenge/goal",
                      properties: {
                        name: {
                          type: "string",
                          title: "Background Title",
                        },
                        desc: {
                          type: "string",
                          title: "Background Description",
                        },
                      },
                    },
                    "body-ability": {
                      type: "object",
                      title: "Character Add Ability'",
                      properties: {
                        name: {
                          type: "string",
                          title: "Ability Name",
                        },
                        power: {
                          type: "string",
                          title: "Ability Description",
                        },
                      },
                    },
                    "char-advdrawback": {
                      type: "object",
                      title: "Character Advantage & Drawback'",
                      properties: {
                        name: {
                          type: "string",
                          title: "Title",
                        },
                        adv: {
                          type: "string",
                          title: "Advantage",
                        },
                        drawback: {
                          type: "string",
                          title: "Drawback",
                        },
                      },
                    },
                    "char-drawback": {
                      type: "object",
                      title: "Character Drawback",
                      properties: {
                        name: {
                          type: "string",
                          title: "Title",
                        },
                        desc: {
                          type: "string",
                          title: "Description",
                        },
                      },
                    },
                    "char-allies": {
                      type: "object",
                      title: "Character Ally",
                      properties: {
                        name: {
                          type: "string",
                          title: "Title",
                        },
                        desc: {
                          type: "string",
                          title: "Description",
                        },
                        quantity: {
                          type: "integer",
                          minimum: 1,
                          title: "Quantity",
                        },
                      },
                    },
                    "inv-items": {
                      title: "Items",
                      type: "array",
                      uniqueItems: true,
                      description: "Add Items",
                      items: {
                        type: "object",
                        title: "Item",
                        properties: {
                          name: {
                            type: "string",
                            title: "Title",
                          },
                          desc: {
                            type: "string",
                            title: "Description",
                          },
                          quantity: {
                            type: "integer",
                            minimum: 1,
                            title: "Quantity",
                            default: 1,
                          },
                          icon: {
                            type: "string",
                            format: "data-url",
                            title: "Optional: Item Icon",
                          },
                        },
                      },
                    },
                    misc: {
                      type: "object",
                      title: "Character Custom Attribute",
                      properties: {
                        key: {
                          type: "string",
                          title: "Attribute Key",
                          description:
                            "All attributes with same key will be shown together.",
                        },
                        name: {
                          type: "string",
                          title: "Title",
                        },
                        desc: {
                          type: "string",
                          title: "Description",
                        },
                        quantity: {
                          type: "integer",
                          minimum: 1,
                          title: "Quantity",
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
  },
};
