import React, { useState } from 'react'
import {mappedGlobalVariables, textTransformOptions, displayOptions, textDecorationOptions, borderStyleOptions} from './utils';

export default function Input() {
    const [inputStyles, setInputStyles] = useState({});

    // function triggered on input of button properties
    let updateStylesOnChange = (e) => {
        let key = e.target["id"];
        let value = e.target.value;
        setInputStyles({...inputStyles, [key]: value});
    };
    
    const createTemplate = (styles) => {

        let {
            inputBorderWidth, inputBorderStyle, inputBorderColor
        } = styles;

        let data = `@import "./utilities/mixin"

input[type=text] {
    border: ${inputBorderWidth} ${inputBorderStyle} ${inputBorderColor};
    padding-left: 5px;
    padding-right: 5px;
    color: #627686;
    font-size: 13px;
    box-shadow: inset 0 4px 5px 0 #ebebeb;
    margin: 0;
}`
        console.log(data);
        // var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
        // xmlhttp.open("POST", "http://localhost:6001/inputscss");
        // xmlhttp.setRequestHeader("Content-Type", 'text/plain');
        // xmlhttp.send(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTemplate(inputStyles);
    }

  return (
    <div className='input-component'>
        <h3>Form Elements</h3>
        <form onSubmit={handleSubmit}>
            <div className='mb-2'>
                <label htmlFor="inputBorder">Border Bottom</label>
                <input required type="text" className='mx-2' name='inputBorderWidth' id='inputBorderWidth' placeholder='Border width' onChange={updateStylesOnChange} />
                <select required className='mx-2' name="inputBorderStyle" id="inputBorderStyle" onChange={updateStylesOnChange}>
                    {borderStyleOptions()}
                </select>
                <select required className='mx-2' name="inputBorderColor" id="inputBorderColor" onChange={updateStylesOnChange}>
                    <option value=''>Select</option>
                    {mappedGlobalVariables}
                    <option value='transparent'>transparent</option>
                </select>
            </div>
            <div>
                <input type="button" value="Submit" />
            </div>
        </form>
    </div>
  )
}
