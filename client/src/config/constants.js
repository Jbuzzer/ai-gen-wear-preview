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
    name: "productpicker_tshirtmale",
    icon: tshirt_male,
  },
  {
    name: "productpicker_tshirtfemale",
    icon: tshirt_female,
  },
  {
    name: "productpicker_hoodie",
    icon: hoodie,
  },
  {
    name: "productpicker_dress",
    icon: dress,
  },
];