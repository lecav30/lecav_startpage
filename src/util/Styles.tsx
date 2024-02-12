import Bluewers from "../images/bluewers.jpg";
import Statue from "../images/statue.jpg";
import Mountain from "../images/mountain.png";
// import BookWeed from "../images/book-weed.jpg";
import WhiteFlower from "../images/white_flwr.jpeg";
import Kojiro from "../images/Kojiro.png";
import Navigate from "../images/navigate.png";
import Rolling from "../images/rolling.jpg";
// import JapanGirl from "../images/japon.png";
import HimenoCigarrete from "../images/himeno_c.jpg";

export type Style = {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  darkColor: string;
  lightColor: string;
  alertColor: string;
  backgroundImage: string;
  message: string;
  darkMode?: boolean;
};

export const myStyles: { [key: string]: Style } = {
  BlueFlower: {
    name: "BlueFlower",
    primaryColor: "#264364",
    secondaryColor: "#47647c",
    darkColor: "#1c1d1c",
    lightColor: "#5e87b4",
    alertColor: "#1d528c",
    backgroundImage: Bluewers,
    message: "Most beautiful flower is blue",
    darkMode: false,
  },
  Statue: {
    name: "Statue",
    primaryColor: "#846944",
    secondaryColor: "#938268",
    darkColor: "#433f35",
    lightColor: "#f3f4fb",
    alertColor: "#747c73",
    backgroundImage: Statue,
    message: "Majestic of Rome",
    darkMode: false,
  },
  Mountain: {
    name: "Mountain",
    primaryColor: "#747974",
    secondaryColor: "#586260",
    darkColor: "#262c2b",
    lightColor: "#aca9a2",
    alertColor: "#474d4b",
    backgroundImage: Mountain,
    message: "On top of everything",
    darkMode: false,
  },
  // BookWeed: {
  //   name: "BookWeed",
  //   primaryColor: "#8b9683",
  //   secondaryColor: "#6d6b52",
  //   darkColor: "#424e3a",
  //   lightColor: "#d9e5dc",
  //   alertColor: "#aebcb7 ",
  //   backgroundImage: BookWeed,
  //   message: "High to understand",
  //   darkMode: false,
  // },
  WhiteFlower: {
    name: "WhiteFlower",
    primaryColor: "#44493e",
    secondaryColor: "#717061",
    darkColor: "#13160f",
    lightColor: "#7a8583",
    alertColor: "#8c8765",
    backgroundImage: WhiteFlower,
    message: "Purity is beauty",
    darkMode: false,
  },
  Kojiro: {
    name: "Kojiro",
    primaryColor: "#837f6a",
    secondaryColor: "#67665d",
    darkColor: "#383535",
    lightColor: "#e5d6af",
    alertColor: "#b4a484",
    backgroundImage: Kojiro,
    message: "We are all infinite",
    darkMode: false,
  },
  Navigate: {
    name: "Navigate",
    primaryColor: "#d8721c",
    secondaryColor: "#6b3f20",
    darkColor: "#1c1d1c",
    lightColor: "#f3d191",
    alertColor: "#4a4f4b ",
    backgroundImage: Navigate,
    message: "New seas to discover",
    darkMode: false,
  },
  Rolling: {
    name: "Rolling",
    primaryColor: "#6b5a51",
    secondaryColor: "#4e514d",
    darkColor: "#1c0a06",
    lightColor: "#a79697",
    alertColor: "#422f25",
    backgroundImage: Rolling,
    message: "Smoking weed to know me",
    darkMode: false,
  },
  // JapanGirl: {
  //   name: "JapanGirl",
  //   primaryColor: "#84706e",
  //   secondaryColor: "#4f4647",
  //   darkColor: "#1b181b",
  //   lightColor: "#918f9f",
  //   alertColor: "#444c4c",
  //   backgroundImage: JapanGirl,
  //   message: "Kunoichi",
  //   darkMode: false,
  // },
  HimenoCigarrete: {
    name: "HimenoCigarrete",
    primaryColor: "#688a8c",
    secondaryColor: "#0cc3be",
    darkColor: "#191c20",
    lightColor: "#eff2f0",
    alertColor: "#688a8c",
    backgroundImage: HimenoCigarrete,
    message: "Easy revenge",
    darkMode: false,
  },
};

export const stylesNames = [
  "BlueFlower",
  "Statue",
  "Mountain",
  "BookWeed",
  "WhiteFlower",
  "Kojiro",
  "Navigate",
  "Rolling",
  "JapanGirl",
  "HimenoCigarrete",
];
