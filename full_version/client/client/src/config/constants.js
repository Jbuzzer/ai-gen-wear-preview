import { swatch, fileIcon, ai, logoShirt, stylishShirt, tshirt_male, tshirt_female, hoodie, dress } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};


export const ProductTypes = [
  {
    name: "tshirt_male",
    icon: tshirt_male,
  },
  {
    name: "tshirt_female",
    icon: tshirt_female,
  },
  {
    name: "hoodie",
    icon: hoodie,
  },
  {
    name: "dress",
    icon: dress,
  },
];