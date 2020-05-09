const FormData = {
  appData: { appversion: 2 },
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
      bgA: "#d395d3",
      bgB: "#70BA65",
      mainBorder: "#520135",
      mainHighlight: "#C4DAC2",
      charBgA: "#36C2A3",
      charBgB: "#409575",
      charText: "#160006",
      charBorder: "#43CC00",
    },
    layout: {
      sidebarWidth: "380px",
      sidebarWidthDeskSm: "120px",
      sidebarWidthMobSm: "60px",
    },
    cyoa: {
      backgroundImgObjectFit: "cover",
      backgroundGradient: `#fc98cd, #66abce, #98cdfe`, // String, list of choices as per css linear-gradient spec
    },
    themeing: {
      fontName: "Arial",
      fontScaling: 1.21, // adjust font size
      sectionCornerRadius: "8px", //for curved corners, use 5~20px, for straight user 0px
      bordersWidth: "3px",
      borderStyle: "solid",
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
              "char-background": "Is from England",
            },
          },
          {
            name: "Mars",
            description: "Red warm orb",
            effect: {
              cost: [100],
              "body-race": "Martian",
              "char-background": "From north mars",
            },
          },
        ],
      },
      {
        name: "2/ Challenge",
        description: "Uh Oh..",
        style: "boxes",
        buy: {
          unique: true,
          max: 1,
        },
        choices: [
          {
            name: "Asteroid",
            description: "An asteroid is coming",
            effect: {
              cost: [-50],
              "char-challenge": {
                name: "asteroid",
                desc: "destruction.",
              },
              "body-ability": {
                name: "Loud Scream",
                desc: "Scream loudly.",
              },
            },
          },
          {
            name: "Plague",
            description: "The black plague reawakens",
            effect: {
              cost: [-100],
              "char-challenge": {
                name: "Plague",
                desc: "death and horror.",
              },
              "char-advdrawback": {
                name: "Plague doctor",
                adv: "Cool mask",
                drawback: "A lot of death",
              },
              "inv-items": [
                {
                  name: "Plague Mask",
                  desc: "Nice beak.",
                  quantity: 1,
                },
              ],
            },
          },
        ],
      },
      {
        name: "3/ Items",
        description: "Stuff",
        style: "smallboxes",
        buy: {
          unique: false,
          max: 3,
        },
        choices: [
          {
            name: "Buddies",
            description: "Bring ya buddies",
            effect: {
              cost: [0, 1],
              "char-allies": {
                name: "Buddies",
                desc: "Somewhat helpful.",
                quantity: 5,
              },
              "char-drawback": {
                name: "Nuisance",
                desc: "Your buddies make numerous poor desicions.",
              },
            },
          },
          {
            name: "Guns",
            description: "Guns are cool",
            effect: {
              cost: [0, 1],
              "inv-items": [
                {
                  name: "Guns",
                  desc: "Big guns.",
                  quantity: 2,
                },
              ],
            },
          },
          {
            name: "Knowledge",
            description: "You know stuff",
            effect: {
              cost: [0, 1],
              misc: {
                key: "knowledge",
                name: "Guns",
                desc: "Big guns.",
                quantity: 2,
              },
            },
          },
        ],
      },
    ],
  },
};

export default FormData;
