import React, { useEffect, useState } from 'react'
import {mappedGlobalVariables, displayOptions, borderStyleOptions, textalignOptions} from './utils';
import formElementsJson from '../json/form-elements.json';

export default function Input() {
    const [inputStyles, setInputStyles] = useState(formElementsJson);

    let {
        inputBorderWidth, inputBorderStyle, inputBorderColor, padding, color, fontSize, lineHeight, margin, boxShadowType, 
        boxShadowXoffset, boxShadowYoffset, boxShadowBlur, boxShadowSpread, boxShadowColor,
        checkboxDisplay, checkboxHeight, checkboxWidth, checkboxFontSize, checkboxBackgroundColor, 
        checkboxBorderRadius, checkboxMarginRight, checkboxBorderWidth, checkboxBorderStyle, checkboxBorderColor, 
        checkboxTextAlign, checkboxCheckedBackgroundColor, checkboxCheckedColor, checkboxCheckedUnicodeContent,
        radioDisplay, radioWidth, radioHeight, radioBorderRadius, radioMarginRight, 
        radioBorderWidth, radioBorderStyle, radioBorderColor, radioTextAlign, radioCheckedBackgroundColor
    } = inputStyles;

    // function triggered on input of button properties
    let updateStylesOnChange = (e) => {
        const {name, value} = e.target;
        setInputStyles({...inputStyles, [name]: value});
    };
    
    const createTemplate = (styles) => {

        let {
            inputBorderWidth, inputBorderStyle, inputBorderColor,padding, color, fontSize, lineHeight, margin, boxShadowType, 
            boxShadowXoffset, boxShadowYoffset, boxShadowBlur, boxShadowSpread, boxShadowColor,
            checkboxDisplay, checkboxHeight, checkboxWidth, checkboxFontSize, checkboxBackgroundColor,
            checkboxBorderRadius, checkboxMarginRight, checkboxBorderWidth, checkboxBorderStyle, checkboxBorderColor, 
            checkboxTextAlign, checkboxCheckedBackgroundColor, checkboxCheckedColor, checkboxCheckedUnicodeContent,
            radioDisplay, radioWidth, radioHeight, radioBorderRadius, radioMarginRight, 
            radioBorderWidth, radioBorderStyle, radioBorderColor, radioTextAlign, radioCheckedBackgroundColor
        } = styles;

        let formScss = `@import "./utilities/mixin";

.form-control {
    border: ${inputBorderWidth} ${inputBorderStyle} ${inputBorderColor};
    padding: ${padding};
    color: ${color};
    box-shadow: ${boxShadowType} ${boxShadowXoffset} ${boxShadowYoffset} ${boxShadowBlur} ${boxShadowSpread} ${boxShadowColor};
    margin: ${margin};
    @include fontsize(${fontSize}, ${lineHeight});
}

input[type="checkbox"] {
    // Hide default checkbox
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;

    // Style the custom checkbox
    &::before {
        content: "";
        display: ${checkboxDisplay};
        width: ${checkboxWidth};
        height: ${checkboxHeight};
        font-size: ${checkboxFontSize};
        background-color: ${checkboxBackgroundColor};
        border-radius: ${checkboxBorderRadius};
        margin-right: ${checkboxMarginRight};
        border: ${checkboxBorderWidth} ${checkboxBorderStyle} ${checkboxBorderColor};
        text-align: ${checkboxTextAlign};
    }

    // Style the custom checkbox when checked
    &:checked::before {
        content: "${checkboxCheckedUnicodeContent}"; 
        background-color: ${checkboxCheckedBackgroundColor};
        color: ${checkboxCheckedColor};
    }
}

input[type="radio"] {
	// Hide the default radio button 
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	outline: none;
  
	// Style the custom radio button
	&::before {
		content: "";
		display: ${radioDisplay};
		width: ${radioWidth};
		height: ${radioHeight};
		border-radius: ${radioBorderRadius};
		border: ${radioBorderWidth} ${radioBorderStyle} ${radioBorderColor};
		margin-right: ${radioMarginRight};
		text-align: ${radioTextAlign};
	}
	
	// Style the custom radio button when checked
	&:checked::before {
		background-color: ${radioCheckedBackgroundColor};
	}
}`

        fetch(
            'http://localhost:6001/form',
            {
              method: 'POST',
              headers: {
                "Content-Type": 'application/json'
              },
              body: JSON.stringify(styles)
            },
        );
        fetch(
            'http://localhost:6001/form',
            {
              method: 'POST',
              headers: {
                "Content-Type": 'text/plain'
              },
              body: formScss
            },
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTemplate(inputStyles);
    }

    useEffect(() => {
        setInputStyles(formElementsJson);
    }, []);

  return (
    <div className='input-component my-3'>
        <h3>Form Elements</h3>
        <form onSubmit={handleSubmit}>
            <div className='input-type-text'>
                <h4>input[type=text] .form-control</h4>
                <div>
                    <div className='mb-2'>
                        <label htmlFor="inputBorder">Border Bottom</label>
                        <input required type="text" className='mx-2' name='inputBorderWidth' id='inputBorderWidth' value={inputBorderWidth} placeholder='Border width' onChange={updateStylesOnChange} />
                        <select required className='mx-2' name="inputBorderStyle" id="inputBorderStyle" value={inputBorderStyle} onChange={updateStylesOnChange}>
                            {borderStyleOptions()}
                        </select>
                        <select required className='mx-2' name="inputBorderColor" id="inputBorderColor" value={inputBorderColor} onChange={updateStylesOnChange}>
                            <option value='' disabled>Border Color</option>
                            {mappedGlobalVariables}
                            <option value='transparent'>transparent</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="padding">Padding</label>
                        <input required type="text" className='mx-2' name='padding' id='padding' value={padding} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="color">Color</label>
                        <select required className='mx-2' name="color" id="color" value={color} onChange={updateStylesOnChange}>
                            <option value=''>Select</option>
                            {mappedGlobalVariables}
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="fontSize">Font Size</label>
                        <input required type="text" className='mx-2' name='fontSize' id='fontSize' value={fontSize} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="lineHeight">Line Height</label>
                        <input required type="text" className='mx-2' name='lineHeight' id='lineHeight' value={lineHeight} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="margin">Margin</label>
                        <input required type="text" className='mx-2' name='margin' id='margin' value={margin} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="boxshadow">Box Shadow</label>
                        <select required className='mx-2' name="boxShadowType" id="boxShadowType" value={boxShadowType} onChange={updateStylesOnChange}>
                            <option value='' disabled>Select</option>
                            <option value='inset'>Inset</option>
                            <option value='outset'>Outset</option>
                        </select>
                        <input required type="text" className='mx-2' name='boxShadowXoffset' id='boxShadowXoffset' placeholder='X offset' value={boxShadowXoffset} onChange={updateStylesOnChange} />
                        <input required type="text" className='mx-2' name='boxShadowYoffset' id='boxShadowYoffset' placeholder='Y offset' value={boxShadowYoffset} onChange={updateStylesOnChange} />
                        <input required type="text" className='mx-2' name='boxShadowBlur' id='boxShadowBlur' placeholder='Blur' value={boxShadowBlur} onChange={updateStylesOnChange} />
                        <input required type="text" className='mx-2' name='boxShadowSpread' id='boxShadowSpread' placeholder='Spread' value={boxShadowSpread} onChange={updateStylesOnChange} />
                        <select required className='mx-2' name="boxShadowColor" id="boxShadowColor" value={boxShadowColor} onChange={updateStylesOnChange}>
                            <option value='' disabled>Box Shadow Color</option>
                            {mappedGlobalVariables}
                            <option value='transparent'>transparent</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="input-type-checkbox">
                <h4>input[type=checkboox]</h4>
                <p>Default Checkbox Hidden</p>
                <div>
                    <h4>input[type=checkbox]::before</h4>
                    <div className='mb-2'>
                        <label htmlFor="checkboxDisplay">Display</label>
                        <select required className='mx-2' name="checkboxDisplay" id="checkboxDisplay" value={checkboxDisplay} onChange={updateStylesOnChange}>
                            {displayOptions()}
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="checkboxWidth">Width</label>
                        <input required type="text" className='mx-2' name='checkboxWidth' id='checkboxWidth' value={checkboxWidth} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="checkboxHeight">Height</label>
                        <input required type="text" className='mx-2' name='checkboxHeight' id='checkboxHeight' value={checkboxHeight} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="checkboxFontSize">Font Size</label>
                        <input required type="text" className='mx-2' name='checkboxFontSize' id='checkboxFontSize' value={checkboxFontSize} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="checkboxBackgroundColor">Background Color</label>
                        <select required className='mx-2' name="checkboxBackgroundColor" id="checkboxBackgroundColor" value={checkboxBackgroundColor} onChange={updateStylesOnChange}>
                            <option value=''>Select</option>
                            {mappedGlobalVariables}
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="checkboxBorderRadius">Border Radius</label>
                        <input required type="text" className='mx-2' name='checkboxBorderRadius' id='checkboxBorderRadius' value={checkboxBorderRadius} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="checkboxMarginRight">Margin Right</label>
                        <input required type="text" className='mx-2' name='checkboxMarginRight' id='checkboxMarginRight' value={checkboxMarginRight} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="checkboxBorder">Border</label>
                        <input required type="text" className='mx-2' name='checkboxBorderWidth' id='checkboxBorderWidth' placeholder='Border width' value={checkboxBorderWidth} onChange={updateStylesOnChange} />
                        <select required className='mx-2' name="checkboxBorderStyle" id="checkboxBorderStyle" value={checkboxBorderStyle} onChange={updateStylesOnChange}>
                            {borderStyleOptions()}
                        </select>
                        <select required className='mx-2' name="checkboxBorderColor" id="checkboxBorderColor" value={checkboxBorderColor} onChange={updateStylesOnChange}>
                            <option value='' disabled>Border Color</option>
                            {mappedGlobalVariables}
                            <option value='transparent'>transparent</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="checkboxTextAlign">text-align</label>
                        <select required className='mx-2' name="checkboxTextAlign" id="checkboxTextAlign" value={checkboxTextAlign} onChange={updateStylesOnChange}>
                            {textalignOptions()}
                        </select>
                    </div>
                    <h4>input[type=checkbox]:checked::before</h4>
                    <div className='mb-2'>
                        <label htmlFor="checkboxCheckedUnicodeContent">Unicode Content</label>
                        <input required type="text" className='mx-2' name='checkboxCheckedUnicodeContent' id='checkboxCheckedUnicodeContent' value={checkboxCheckedUnicodeContent} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="checkboxCheckedBackgroundColor">Background Color</label>
                        <select required className='mx-2' name="checkboxCheckedBackgroundColor" id="checkboxCheckedBackgroundColor" value={checkboxCheckedBackgroundColor} onChange={updateStylesOnChange}>
                            <option value=''>Select</option>
                            {mappedGlobalVariables}
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="checkboxCheckedColor">Color</label>
                        <select required className='mx-2' name="checkboxCheckedColor" id="checkboxCheckedColor" value={checkboxCheckedColor} onChange={updateStylesOnChange}>
                            <option value=''>Select</option>
                            {mappedGlobalVariables}
                        </select>
                    </div>
                </div>
            </div>
            <div className='input-type-radio'>
                <h4>input[type=radio]</h4>
                <p>Default Radio Hidden</p>
                <div>
                    <h4>input[type=radio]::before</h4>
                    <div className='mb-2'>
                        <label htmlFor="radioDisplay">Display</label>
                        <select required className='mx-2' name="radioDisplay" id="radioDisplay" value={radioDisplay} onChange={updateStylesOnChange}>
                            {displayOptions()}
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="radioWidth">Width</label>
                        <input required type="text" className='mx-2' name='radioWidth' id='radioWidth' value={radioWidth} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="radioHeight">Height</label>
                        <input required type="text" className='mx-2' name='radioHeight' id='radioHeight' value={radioHeight} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="radioBorderRadius">Border Radius</label>
                        <input required type="text" className='mx-2' name='radioBorderRadius' id='radioBorderRadius' value={radioBorderRadius} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="radioMarginRight">Margin Right</label>
                        <input required type="text" className='mx-2' name='radioMarginRight' id='radioMarginRight' value={radioMarginRight} onChange={updateStylesOnChange} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="radioBorder">Border</label>
                        <input required type="text" className='mx-2' name='radioBorderWidth' id='radioBorderWidth' placeholder='Border width' value={radioBorderWidth} onChange={updateStylesOnChange} />
                        <select required className='mx-2' name="radioBorderStyle" id="radioBorderStyle" value={radioBorderStyle} onChange={updateStylesOnChange}>
                            {borderStyleOptions()}
                        </select>
                        <select required className='mx-2' name="radioBorderColor" id="radioBorderColor" value={radioBorderColor} onChange={updateStylesOnChange}>
                            <option value='' disabled>Border Color</option>
                            {mappedGlobalVariables}
                            <option value='transparent'>transparent</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="radioTextAlign">text-align</label>
                        <select required className='mx-2' name="radioTextAlign" id="radioTextAlign" value={radioTextAlign} onChange={updateStylesOnChange}>
                            {textalignOptions()}
                        </select>
                    </div>
                    <h4>input[type=radio]:checked::before</h4>
                    <div className='mb-2'>
                        <label htmlFor="radioCheckedBackgroundColor">Background Color</label>
                        <select required className='mx-2' name="radioCheckedBackgroundColor" id="radioCheckedBackgroundColor" value={radioCheckedBackgroundColor} onChange={updateStylesOnChange}>
                            <option value=''>Select</option>
                            {mappedGlobalVariables}
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
  )
}
