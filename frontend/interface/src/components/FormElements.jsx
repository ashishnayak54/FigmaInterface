import React, { useEffect, useState } from 'react'
import {mappedGlobalVariables, textTransformOptions, displayOptions, textDecorationOptions, borderStyleOptions} from './utils';
import formElementsJson from '../json/form-elements.json';

export default function Input() {
    const [inputStyles, setInputStyles] = useState(formElementsJson);

    let {
        inputBorderWidth, inputBorderStyle, inputBorderColor,
        padding, color, fontSize, lineHeight, margin, boxShadowType, 
        boxShadowXoffset, boxShadowYoffset, boxShadowBlur, boxShadowSpread, boxShadowColor
    } = inputStyles;

    // function triggered on input of button properties
    let updateStylesOnChange = (e) => {
        const {name, value} = e.target;
        setInputStyles({...inputStyles, [name]: value});
    };
    
    const createTemplate = (styles) => {

        let {
            inputBorderWidth, inputBorderStyle, inputBorderColor,
            padding, color, fontSize, lineHeight, margin, boxShadowType, 
            boxShadowXoffset, boxShadowYoffset, boxShadowBlur, boxShadowSpread, boxShadowColor
        } = styles;

        let formScss = `@import "./utilities/mixin";

.form-control {
    border: ${inputBorderWidth} ${inputBorderStyle} ${inputBorderColor};
    padding: ${padding};
    color: ${color};
    box-shadow: ${boxShadowType} ${boxShadowXoffset} ${boxShadowYoffset} ${boxShadowBlur} ${boxShadowSpread} ${boxShadowColor};
    margin: ${margin};
    @include fontsize(${fontSize}, ${lineHeight});
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
                <h4>Input[type=text] .form-control</h4>
                <div>
                    <div className='mb-2'>
                        <label htmlFor="inputBorder">Border Bottom</label>
                        <input required type="text" className='mx-2' name='inputBorderWidth' id='inputBorderWidth' value={inputBorderWidth} placeholder='Border width' onChange={updateStylesOnChange} />
                        <select required className='mx-2' name="inputBorderStyle" id="inputBorderStyle" value={inputBorderStyle} onChange={updateStylesOnChange}>
                            {borderStyleOptions()}
                        </select>
                        <select required className='mx-2' name="inputBorderColor" id="inputBorderColor" value={inputBorderColor} onChange={updateStylesOnChange}>
                            <option value=''>Border Color</option>
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
                            <option value=''>Select</option>
                            <option value='inset'>Inset</option>
                            <option value='outset'>Outset</option>
                        </select>
                        <input required type="text" className='mx-2' name='boxShadowXoffset' id='boxShadowXoffset' placeholder='X offset' value={boxShadowXoffset} onChange={updateStylesOnChange} />
                        <input required type="text" className='mx-2' name='boxShadowYoffset' id='boxShadowYoffset' placeholder='Y offset' value={boxShadowYoffset} onChange={updateStylesOnChange} />
                        <input required type="text" className='mx-2' name='boxShadowBlur' id='boxShadowBlur' placeholder='Blur' value={boxShadowBlur} onChange={updateStylesOnChange} />
                        <input required type="text" className='mx-2' name='boxShadowSpread' id='boxShadowSpread' placeholder='Spread' value={boxShadowSpread} onChange={updateStylesOnChange} />
                        <select required className='mx-2' name="boxShadowColor" id="boxShadowColor" value={boxShadowColor} onChange={updateStylesOnChange}>
                            <option value=''>Box Shadow Color</option>
                            {mappedGlobalVariables}
                            <option value='transparent'>transparent</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* <div className="input-type-radio">
                <h4>Input[type=radio]</h4>
                <div>
                    
                </div>
            </div> */}
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
  )
}
