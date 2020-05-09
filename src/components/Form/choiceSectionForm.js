export default {
  type: "object",
  title: "Choices Setup",
  description: "Setup the list of player choices.",
  properties: {
    header: {
      title: "App Header",
      type: "object",
      description: "Settings for the Page Header.",
      properties: {
        logo: {
          type: "string",
          format: "data-url",
          description: "Give the page a logo.",
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
      description: "Describe the world, the Sub-section is optional.",
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
      title: "Choices",
      description: "The types of choices a player can take.",
      items: {
        type: "object",
        title: "Choice-type Settings",
        properties: {
          name: {
            type: "string",
            title: "Name",
          },
          description: {
            type: "string",
            title: "Description",
          },
          style: {
            type: "string",
            title: "Presentation Style",
            description:
              "Sets the style of the options, 'lines' are very wide and good for long descriptions, 'boxes' is for smaller options, and 'small boxes', is for very small options.",
            enum: ["lines", "boxes", "smallboxes"],
            enumNames: ["Lines", "Boxes", "Small Boxes"],
          },
          buy: {
            type: "object",
            title: "Purchase Options",
            description:
              "unique; means a choice may only be taken once. Max taken of type; limits how many in total can be taken of this type of choice.",
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
                title: "Max taken of type",
                default: 1000,
              },
            },
          },
          choices: {
            type: "array",
            minItems: 2,
            uniqueItems: true,
            title: "Options",
            description: "The options available to choose.",
            items: {
              type: "object",
              title: "Option Settings",
              properties: {
                name: {
                  type: "string",
                  title: "Name",
                },
                description: {
                  type: "string",
                  title: "Description",
                },
                img: {
                  type: "string",
                  format: "data-url",
                  title: "Image",
                },
                effect: {
                  type: "object",
                  title: "Effects",
                  description:
                    "Here you will set what picking an option does, whether that's updating a profile image or how much it costs to take the option. Options not set will be ignored.",
                  required: ["cost"],
                  properties: {
                    cost: {
                      type: "array",
                      title: "Option Cost",
                      minItems: 1,
                      description:
                        "As a CYOA can have multiple types of purchase points (as set earlier), below you can set the cost for each, the first applying to the first purchase points type, the second box the second purchase points type. Any not given a value will default to 0.",
                      default: [10],
                      items: {
                        type: "integer",
                      },
                    },
                    "char-profimg": {
                      type: "string",
                      format: "data-url",
                      title: "New Character Profile Image.",
                    },
                    "body-race": {
                      type: "string",
                      title: "New Race",
                    },
                    "char-background": {
                      type: "string",
                      title: "Character's Background/Origin",
                    },
                    "char-challenge": {
                      type: "object",
                      title: "New Character Challenge/goal",
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
                      title: "Add Character Ability'",
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
                      title: "Add Character Advantage & Drawback'",
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
                      title: "Add Character Drawback",
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
                      title: "Add Character Allies",
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
                      title: "Give Items to Character",
                      type: "array",
                      uniqueItems: true,
                      description: "Multiple items can be given for each choice. An icon can be used, the best format is .png as they can be transparent, around 100x100 is a good size.",
                      items: {
                        type: "object",
                        title: "Item",
                        properties: {
                          name: {
                            type: "string",
                            title: "Name",
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
                      title: "Add Character Custom Attribute",
                      description: "Here a custom attribute can be added.",
                      properties: {
                        key: {
                          type: "string",
                          title: "Attribute Key",
                          description:
                            "All attributes with same key will be shown together.",
                        },
                        name: {
                          type: "string",
                          title: "Name",
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
