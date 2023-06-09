import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes, ProductTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, ProductPicker_TshirtMale, ProductPicker_TshirtFemale, ProductPicker_Hoodie, ProductPicker_Dress, Tab } from '../components';

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeProductTab, setActiveProductType] = useState("");
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  })

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker />
      case "aipicker":
        return <AIPicker />
          default:
        return null;
    }
  }

  // show tab content depending on the activeTab
  const generateProductContent = () => {
    switch (activeProductTab) {
      case "productpicker_tshirtmale":
        return <ProductPicker_TshirtMale />
      case "productpicker_tshirtfemale":
        return <ProductPicker_TshirtFemale />
      case "productpicker_hoodie":
        return <ProductPicker_Hoodie  />
      case "productpicker_dress":
        return <ProductPicker_Dress />        
    default:
        return null;
    }
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if(!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
          state.isLogoTexture = !activeFilterTab[tabName];
          setActiveEditorTab("");
          setActiveProductType("");
          break;
      case "stylishShirt":
          state.isFullTexture = !activeFilterTab[tabName];
          setActiveEditorTab("");
          setActiveProductType("");
          break;
      default:
        setActiveEditorTab("");
        setActiveProductType("");
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.header>
              <a href="https://aigenwear.com" className="logo"><img 
              src='./aigenwear_logo_color.png'
              alt="logo"
              className="w-20 h-20 object-contain absolute top-1 left-0 z-20"
              /></a>
          </motion.header>        
          <motion.div
            key="custom1"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton 
              type="filled"
              title="Go Back"
              handleClick={() => state.intro = true}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className='filtertabs-container'
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>

          <motion.div
            key="custom"
            className="absolute top-0 right-0 z-10"
            {...slideAnimation('right')}
          >
            <div className="flex items-center min-h-screen">
              <div className="producttabs-container tabs">
                {ProductTypes.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveProductType(tab.name)}
                  />
                ))}
                {generateProductContent()}

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer