const FormData = {
  charSetup: {
    purchasing: [
      { FullName: "Choice Points", ShortName: "CP", amount: 1000, icons: null },
      { FullName: "Item Points", ShortName: "IP", amount: 3, icons: null },
    ],
    setting: "Another world...",
  },
  styling: {
    colors: {
      maintext: `#000000`,
      bgA: "#620046",
      bgB: "#2E0015",
      mainBorder: "#1F34B7",
      mainHighlight: "#AAAA0F",
      charBgA: "#902337",
      charBgB: "#3726A4",
      charText: "#162406",
      charBorder: "#43CC00",
    },
    layout: {
      sidebarWidth: "380px",
      sidebarWidthDeskSm: "120px",
      sidebarWidthMobSm: "60px",
    },
    cyoa: {
      backgroundImgObjectFit: "cover",
      backgroundGradient: `yellow, orange, red`, // String, list of choices as per css linear-gradient spec
    },
    themeing: {
      fontName: "Arial",
      fontScaling: 1.21, // adjust font size
      sectionCornerRadius: "3px", //for curved corners, use 5~20px, for straight user 0px
      bordersWidth: "3px",
      borderStyle: "dashed",
    },
  },
  cyoa: {
    header: {
      title: "CYOA - Example",
      subHeader: "Welcome to the app!!",
      author: "You",
    },
    intro: {
      title: "Welcome to the example",
      introText: "lorem epsum df hsd fhsd fklsd fhaldksfh asf dfv jhasf ghs j",
      appendTitle: "You start with 1000 MP, choose wisely",
      appendText: "Pick from the choices below",
    },
    selections: [
      {
        name: "1/ Origin",
        description: "Example, place of birth",
        style: "lines",
        buy: {
          unique: true,
          max: 1,
        },
        choices: [
          {
            name: "Earth",
            description: "The bluey green orb",
            effect: {
              cost: [50],
              "body-race": "Human",
            },
          },
          {
            name: "Mars",
            description: "Red warm orb",
            effect: {
              cost: [100],
              "body-race": "Martian",
            },
          },
        ],
      },
    ],
  },
};

export default FormData;
