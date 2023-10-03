import React, { useState } from 'react'
import GlobalVariables from '../json/variables.json';

export default function Buttons() {
    const [buttonStyles, setButtonStyles] = useState({});

    const mappedGlobalVariables = Object.entries(GlobalVariables).map(variable => {
        return <option key={variable[0]} value={'$' + variable[0].toLowerCase()}>{variable[0]}</option>
    });

    // function triggered on input of button properties
    let updateStylesOnChange = (e) => {
        let key = e.target["id"];
        let value = e.target.value;
        setButtonStyles({...buttonStyles, [key]: value});
    };

    const textTransformOptions = () => {
        return (
            <>
                <option value=''>Select</option>
                <option value="uppercase">uppercase</option>
                <option value="capitalize">capitalize</option>
                <option value="lowercase">lowercase</option>
            </>
        )
    }
  return (
    <div className='button-component'>
        <div className='btn-section'>
            <h4 className=''>
                .btn
            </h4>
            <div className=''>
                <div className='mb-2'>
                    <label htmlFor="padding">Padding</label>
                    <input required type="text" className='mx-2' name='padding' id='padding' onChange={updateStylesOnChange} />
                </div>
                <div className='mb-2'>
                    <label htmlFor="fontSize">Font Size</label>
                    <input required type="text" className='mx-2' name='fontSize' id='fontSize' onChange={updateStylesOnChange} />
                </div>
                <div className='mb-2'>
                    <label htmlFor="lineHeight">Line Height</label>
                    <input required type="text" className='mx-2' name='lineHeight' id='lineHeight' onChange={updateStylesOnChange} />
                </div>
                <div className='mb-2'>
                    <label htmlFor="letterSpacing">Letter Spacing</label>
                    <input required type="text" className='mx-2' name='letterSpacing' id='letterSpacing' onChange={updateStylesOnChange} />
                </div>
                <div className='mb-2'>
                    <label htmlFor="borderRadius">Border Radius</label>
                    <input required type="text" className='mx-2' name='borderRadius' id='borderRadius' onChange={updateStylesOnChange} />
                </div>
                <div className='mb-2'>
                    <label htmlFor="textTransform">text-transform</label>
                    <select required className='mx-2' name="textTransform" id="textTransform" onChange={updateStylesOnChange}>
                        {textTransformOptions()}
                    </select>
                </div>
            </div>
        </div>
        <div className='btn-primary-section'>
            <h4 className=''>
                .btn-primary
            </h4>
            <div className=''>
                <div className='mb-2'>
                    <label htmlFor="primaryColor">Color</label>
                    <select required className='mx-2' name="primaryColor" id="primaryColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="primaryBackgroundColor">Background Color</label>
                    <select required className='mx-2' name="primaryBackgroundColor" id="primaryBackgroundColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="primaryBorderColor">Border Color</label>
                    <select required className='mx-2' name="primaryBorderColor" id="primaryBorderColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="primaryHoverColor">Hover Color</label>
                    <select required className='mx-2' name="primaryHoverColor" id="primaryHoverColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="primaryHoverBackgroundColor">Hover Background Color</label>
                    <select required className='mx-2' name="primaryHoverBackgroundColor" id="primaryHoverBackgroundColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="primaryHoverBorderColor">Hover Border Color</label>
                    <select required className='mx-2' name="primaryHoverBorderColor" id="primaryHoverBorderColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="primaryDisabledColor">Disabled Color</label>
                    <select required className='mx-2' name="primaryDisabledColor" id="primaryDisabledColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="primaryDisabledBackgroundColor">Disabled Background Color</label>
                    <select required className='mx-2' name="primaryDisabledBackgroundColor" id="primaryDisabledBackgroundColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="primaryDisabledBorderColor">Disabled Border Color</label>
                    <select required className='mx-2' name="primaryDisabledBorderColor" id="primaryDisabledBorderColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
            </div>
        </div>
        <div className='btn-secondary-section'>
            <h4 className=''>
                .btn-secondary
            </h4>
            <div className=''>
                <div className='mb-2'>
                    <label htmlFor="secondaryColor">Color</label>
                    <select required className='mx-2' name="secondaryColor" id="secondaryColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="secondaryBackgroundColor">Background Color</label>
                    <select required className='mx-2' name="secondaryBackgroundColor" id="secondaryBackgroundColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="secondaryBorderColor">Border Color</label>
                    <select required className='mx-2' name="secondaryBorderColor" id="secondaryBorderColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="secondaryHoverColor">Hover Color</label>
                    <select required className='mx-2' name="secondaryHoverColor" id="secondaryHoverColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="secondaryHoverBackgroundColor">Hover Background Color</label>
                    <select required className='mx-2' name="secondaryHoverBackgroundColor" id="secondaryHoverBackgroundColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="secondaryHoverBorderColor">Hover Border Color</label>
                    <select required className='mx-2' name="secondaryHoverBorderColor" id="secondaryHoverBorderColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="secondaryDisabledColor">Disabled Color</label>
                    <select required className='mx-2' name="secondaryDisabledColor" id="secondaryDisabledColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="secondaryDisabledBackgroundColor">Disabled Background Color</label>
                    <select required className='mx-2' name="secondaryDisabledBackgroundColor" id="secondaryDisabledBackgroundColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="secondaryDisabledBorderColor">Disabled Border Color</label>
                    <select required className='mx-2' name="secondaryDisabledBorderColor" id="secondaryDisabledBorderColor" onChange={updateStylesOnChange}>
                        <option value=''>Select</option>
                        {mappedGlobalVariables}
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}
