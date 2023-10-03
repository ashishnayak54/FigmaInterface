import React, { useState } from "react";
import VariablesForm from "./VariablesForm";
import figmaJsonData from "../tokens/tokens.json";
import defaultJsonData from "../tokens/defaultColors.json";

export default function DisplayForm() {
  let [jsonData, setJsonData] = useState(null);

  let fetchFigmaData = (e) => {
    setJsonData(figmaJsonData);
  };
  let fetchDefaultData = (e) => {
    setJsonData(defaultJsonData);
  };

  return (
    <div className=''>
      <button className="button fetch_figma_btn" onClick={fetchFigmaData}>
        Fetch Figma Tokenisations
      </button>
      <button className="button fetch_default_btn" onClick={fetchDefaultData}>
        Fetch Default Colors
      </button>
      {jsonData && <VariablesForm color={jsonData.global} />}
    </div>
  );
}
