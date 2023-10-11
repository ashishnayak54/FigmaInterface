import React, { useState } from "react";
import VariablesForm from "./VariablesForm";
import figmaJsonData from "../tokens/tokens.json";
import defaultJsonData from "../tokens/defaultColors.json";
import Buttons from "./Buttons";
import Links from './Links';
import FormElements from "./FormElements";

export default function DisplayForm() {
  let [jsonData, setJsonData] = useState(null);
  let [globalStylesComponent, showGlobalStylesComponent] = useState(false);

  let fetchFigmaData = (e) => {
    setJsonData(figmaJsonData);
  };
  let fetchDefaultData = (e) => {
    setJsonData(defaultJsonData);
  };
  const handleButtonComponent = (data) => {
    showGlobalStylesComponent(data);
  };

  return (
    <div className=''>
      <button className="button fetch_figma_btn" onClick={fetchFigmaData}>
        Fetch Figma Tokenisations
      </button>
      <button className="button fetch_default_btn" onClick={fetchDefaultData}>
        Fetch Default Colors
      </button>
      {jsonData && <VariablesForm color={jsonData.global} sendDataToParent={handleButtonComponent} />}
      {
        globalStylesComponent && 
        <>
          <Buttons />
          <Links />
          <FormElements />
        </>
      }
    </div>
  );
}
