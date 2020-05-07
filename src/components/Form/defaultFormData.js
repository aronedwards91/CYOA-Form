const FormData = {
  charSetup: {
    purchasing: [
      { FullName: "Choice Points", ShortName: "CP", amount: 1000, icons: null },
      { FullName: "Item Points", ShortName: "IP", amount: 3, icons: null },
    ],
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
            },
          },
          {
            name: "Mars",
            description: "Red warm orb",
            effect: {
              cost: [100],
            },
          },
        ],
      },
    ],
  },
};

export default FormData;
