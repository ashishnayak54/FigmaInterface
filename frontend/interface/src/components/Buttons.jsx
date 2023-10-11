import React, { useEffect, useState } from 'react'
import PreviewButton from './PreviewButton';
import buttonJson from '../json/button.json';
import {mappedGlobalVariables, textTransformOptions} from './utils';

export default function Buttons() {
    const [previewButton, setPreviewButton] = useState(false);
    const [buttonStyles, setButtonStyles] = useState(buttonJson);

    let {
        fontSize, lineHeight, textTransform, letterSpacing, borderRadius, padding,
        primaryColor, primaryBackgroundColor, primaryBorderColor,
        primaryHoverColor, primaryHoverBackgroundColor, primaryHoverBorderColor,
        primaryDisabledColor, primaryDisabledBackgroundColor, primaryDisabledBorderColor,
        secondaryColor, secondaryBackgroundColor, secondaryBorderColor,
        secondaryHoverColor, secondaryHoverBackgroundColor, secondaryHoverBorderColor,
        secondaryDisabledColor, secondaryDisabledBackgroundColor, secondaryDisabledBorderColor,
    } = buttonStyles;

    useEffect(() => {
        setButtonStyles(buttonJson);
    }, []);


    // function triggered on input of button properties
    let updateStylesOnChange = (e) => {
        let key = e.target["id"];
        let value = e.target.value;
        setButtonStyles({...buttonStyles, [key]: value});
    };

    // create scss template based on submit
    let createTemplate = (styles) => {
        let {
            fontSize, lineHeight, textTransform, letterSpacing, borderRadius, padding,
            primaryColor, primaryBackgroundColor, primaryBorderColor,
            primaryHoverColor, primaryHoverBackgroundColor, primaryHoverBorderColor,
            primaryDisabledColor, primaryDisabledBackgroundColor, primaryDisabledBorderColor,
            secondaryColor, secondaryBackgroundColor, secondaryBorderColor,
            secondaryHoverColor, secondaryHoverBackgroundColor, secondaryHoverBorderColor,
            secondaryDisabledColor, secondaryDisabledBackgroundColor, secondaryDisabledBorderColor
        } = styles;
        let buttonScss = `@import "./utilities/mixin";

.btn-custom {
    // font-family: $font-family-GothamMedium;
    @include fontsize(${fontSize}, ${lineHeight});
    padding: rem(${padding.replace(/ /g, ', ')});
    text-transform: ${textTransform};
    letter-spacing: rem(${letterSpacing});
    border-radius: rem(${borderRadius});
}

.btn-primary {
    @include set-button(${primaryColor}, ${primaryBackgroundColor}, ${primaryBorderColor});

    &:not(:disabled),
    &:not(:disabled):not(:disabled) {
        &:hover,
        &:active {
        @include set-button(${primaryHoverColor}, ${primaryHoverBackgroundColor}, ${primaryHoverBorderColor});
        }
    }

    &:disabled,
    &.disabled {
        @include set-button(${primaryDisabledColor}, ${primaryDisabledBackgroundColor}, ${primaryDisabledBorderColor});
        opacity: 0.35;
    }
}

.btn-secondary {
    @include set-button(${secondaryColor}, ${secondaryBackgroundColor}, ${secondaryBorderColor});
  
    &:not(:disabled),
    &:not(:disabled):not(:disabled) {
      &:hover,
      &:active {
        @include set-button(${secondaryHoverColor}, ${secondaryHoverBackgroundColor}, ${secondaryHoverBorderColor});
      }
    }
  
    &:disabled,
    &.disabled {
      @include set-button(${secondaryDisabledColor}, ${secondaryDisabledBackgroundColor}, ${secondaryDisabledBorderColor});
      opacity: 0.35;
    }
}`

        fetch(
            'http://localhost:6001/button',
            {
              method: 'POST',
              headers: {
                "Content-Type": 'application/json'
              },
              body: JSON.stringify(styles)
            },
        );
        fetch(
            'http://localhost:6001/button',
            {
              method: 'POST',
              headers: {
                "Content-Type": 'text/plain'
              },
              body: buttonScss
            },
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createTemplate(buttonStyles);
    }

    const handlePreviewButtonClick = () => {
        setPreviewButton(prevState => !prevState);
    };


  return (
    <div className='button-component'>
        <h3>Buttons</h3>
        <div className='d-flex my-3'>
            <form onSubmit={handleSubmit}>  
                <div className='btn-section'>
                    <h4 className=''>
                        .btn-custom
                    </h4>
                    <div className=''>
                        <div className='mb-2'>
                            <label htmlFor="padding">Padding</label>
                            <input required type="text" className='mx-2' name='padding' id='padding' value={padding} onChange={updateStylesOnChange} />
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
                            <label htmlFor="letterSpacing">Letter Spacing</label>
                            <input required type="text" className='mx-2' name='letterSpacing' id='letterSpacing' value={letterSpacing} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="borderRadius">Border Radius</label>
                            <input required type="text" className='mx-2' name='borderRadius' id='borderRadius' value={borderRadius} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="textTransform">text-transform</label>
                            <select required className='mx-2' name="textTransform" id="textTransform" value={textTransform} onChange={updateStylesOnChange}>
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
                            <select required className='mx-2' name="primaryColor" id="primaryColor" value={primaryColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="primaryBackgroundColor">Background Color</label>
                            <select required className='mx-2' name="primaryBackgroundColor" id="primaryBackgroundColor" value={primaryBackgroundColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="primaryBorderColor">Border Color</label>
                            <select required className='mx-2' name="primaryBorderColor" id="primaryBorderColor" value={primaryBorderColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="primaryHoverColor">Hover Color</label>
                            <select required className='mx-2' name="primaryHoverColor" id="primaryHoverColor" value={primaryHoverColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="primaryHoverBackgroundColor">Hover Background Color</label>
                            <select required className='mx-2' name="primaryHoverBackgroundColor" id="primaryHoverBackgroundColor" value={primaryHoverBackgroundColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="primaryHoverBorderColor">Hover Border Color</label>
                            <select required className='mx-2' name="primaryHoverBorderColor" id="primaryHoverBorderColor" value={primaryHoverBorderColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="primaryDisabledColor">Disabled Color</label>
                            <select required className='mx-2' name="primaryDisabledColor" id="primaryDisabledColor" value={primaryDisabledColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="primaryDisabledBackgroundColor">Disabled Background Color</label>
                            <select required className='mx-2' name="primaryDisabledBackgroundColor" id="primaryDisabledBackgroundColor" value={primaryDisabledBackgroundColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="primaryDisabledBorderColor">Disabled Border Color</label>
                            <select required className='mx-2' name="primaryDisabledBorderColor" id="primaryDisabledBorderColor" value={primaryDisabledBorderColor} onChange={updateStylesOnChange}>
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
                            <select required className='mx-2' name="secondaryColor" id="secondaryColor" value={secondaryColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="secondaryBackgroundColor">Background Color</label>
                            <select required className='mx-2' name="secondaryBackgroundColor" id="secondaryBackgroundColor" value={secondaryBackgroundColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="secondaryBorderColor">Border Color</label>
                            <select required className='mx-2' name="secondaryBorderColor" id="secondaryBorderColor" value={secondaryBorderColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="secondaryHoverColor">Hover Color</label>
                            <select required className='mx-2' name="secondaryHoverColor" id="secondaryHoverColor" value={secondaryHoverColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="secondaryHoverBackgroundColor">Hover Background Color</label>
                            <select required className='mx-2' name="secondaryHoverBackgroundColor" id="secondaryHoverBackgroundColor" value={secondaryHoverBackgroundColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="secondaryHoverBorderColor">Hover Border Color</label>
                            <select required className='mx-2' name="secondaryHoverBorderColor" id="secondaryHoverBorderColor" value={secondaryHoverBorderColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="secondaryDisabledColor">Disabled Color</label>
                            <select required className='mx-2' name="secondaryDisabledColor" id="secondaryDisabledColor" value={secondaryDisabledColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="secondaryDisabledBackgroundColor">Disabled Background Color</label>
                            <select required className='mx-2' name="secondaryDisabledBackgroundColor" id="secondaryDisabledBackgroundColor" value={secondaryDisabledBackgroundColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="secondaryDisabledBorderColor">Disabled Border Color</label>
                            <select required className='mx-2' name="secondaryDisabledBorderColor" id="secondaryDisabledBorderColor" value={secondaryDisabledBorderColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <button type='submit' className='button'>Submit</button>
                </div>
            </form>
            <div>
                <button className='button' onClick={handlePreviewButtonClick}>Click Here To Preview Buttons</button>
                {previewButton && <PreviewButton />}
            </div>
        </div>
    </div>
  )
}
