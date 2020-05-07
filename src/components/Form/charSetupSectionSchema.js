export default {
  type: "object",
  title: "CYOA Character Setup",
  properties: {
    purchasing: {
      type: "array",
      minItems: 1,
      uniqueItems: true,
      description:
        "An array of purchasing points, requires min 1, more than 4 may break mobile styling",
      items: {
        type: "object",
        title: "Purchsing Points type",
        properties: {
          amount: {
            type: "number",
            minimum: 1,
            maximum: 1000000,
            multipleOf: 1,
            title: "Starting value",
            default: 1000,
          },
          FullName: {
            type: "string",
            title: "Full Name",
            default: "Choice Points",
          },
          ShortName: {
            type: "string",
            title: "Short Name",
            default: "CP",
          },
          icon: {
            type: "string",
            format: "data-url",
            title: "Points Icon",
            description:
              "Can use icon for points, recommend ~100x100, .png required for transparency",
          },
        },
      },
    },
    setting: {
      type: "string",
      title: "Summary of setting",
    },
  },
};
