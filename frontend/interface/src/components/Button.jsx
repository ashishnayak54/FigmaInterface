import React, { useState } from 'react';
import GlobalVariables from '../json/variables.json';
import PreviewButton from './PreviewButton';

export default function Button() {
    const [buttonStyles, setButtonStyles] = useState({});
    const [previewButton, setPreviewButton] = useState(false);

    // function triggered on input of button properties
    let updateStylesOnChange = (e) => {
        let key = e.target["id"];
        let value = e.target.value;
        setButtonStyles({...buttonStyles, [key]: value});
    };

    const mappedGlobalVariables = Object.entries(GlobalVariables).map(variable => {
        return <option key={variable[0]} value={'$' + variable[0].toLowerCase()}>{variable[0]}</option>
    });

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

    const displayOptions = () => {
        return (
            <>
                <option value=''>Select</option>
                <option value="block">block</option>
                <option value="none">none</option>
                <option value="flex">flex</option>
                <option value="inline-block">inline-block</option>
                <option value="inline">inline</option>
                <option value="grid">grid</option>
            </>
        )
    }

    const textDecorationOptions = () => {
        return (
            <>
                <option value=''>Select</option>
                <option value="none">none</option>
                <option value="underline">underline</option>
                <option value="overline">overline</option>
                <option value="line-through">line-through</option>
                <option value="blink">blink</option>
            </>
        )
    }

    const borderStyleOptions = () => {
        return (
            <>
                <option value=''>Select</option>
                <option value="none">none</option>
                <option value="hidden">hidden</option>
                <option value="solid">solid</option>
                <option value="dotted">dotted</option>
                <option value="dashed">dashed</option>
                <option value="double">double</option>
                <option value="groove">groove</option>
                <option value="ridge">ridge</option>
            </>
        )
    }

    // create scss template based on submit
    let createTemplate = (styles) => {
        let {
            fontSize, lineHeight, textTransform, letterSpacing, borderRadius, padding,
            primaryColor, primaryBackgroundColor, primaryBorderColor,
            primaryHoverColor, primaryHoverBackgroundColor, primaryHoverBorderColor,
            primaryDisabledColor, primaryDisabledBackgroundColor, primaryDisabledBorderColor,
            linkPrimaryHoverBorderWidth, linkPrimaryHoverBorderStyle, linkPrimaryHoverBorderColor,
            secondaryColor, secondaryBackgroundColor, secondaryBorderColor,
            secondaryHoverColor, secondaryHoverBackgroundColor, secondaryHoverBorderColor,
            secondaryDisabledColor, secondaryDisabledBackgroundColor, secondaryDisabledBorderColor,
            linkPrimaryColor, linkPrimaryTextDecoration, linkPrimaryPaddingBottom, linkPrimaryFontSize, 
            linkPrimaryLineHeight, linkPrimaryDisplay, linkPrimaryHoverTextDecoration,
            linkPrimaryBorderWidth, linkPrimaryBorderStyle, linkPrimaryBorderColor,
            linkSecondaryColor, linkSecondaryTextDecoration, linkSecondaryFontSize, linkSecondaryLineHeight,
            linkSecondaryHoverTextDecoration, linkSecondaryTextTransform,
            linkTertiaryColor, linkTertiaryTextDecoration, linkTertiaryFontSize,
            linkTertiaryLineHeight, linkTertiaryTextTransform, linkTertiaryHoverTextDecoration,
            linkInlineColor, linkInlineTextDecoration, linkInlineFontSize,
            linkInlineLineHeight, linkInlineHoverTextDecoration,
            linkPdBannerDisplay, linkPdBannerColor, linkPdBannerTextDecoration, 
            linkPdBannerPaddingBottom, linkPdBannerFontSize, linkPdBannerLineHeight,
            linkPdBannerHoverTextDecoration, linkPdBannerBorderWidth, linkPdBannerBorderStyle, linkPdBannerBorderColor,
            linkPdBannerHoverBorderWidth, linkPdBannerHoverBorderStyle, linkPdBannerHoverBorderColor
        } = styles;
        let data = `@import "./utilities/mixin";

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
}

.link-primary {
    display: ${linkPrimaryDisplay};
    // font-family: $font-family-GothamMedium;
    color: ${linkPrimaryColor};
    text-decoration: ${linkPrimaryTextDecoration};
    border-bottom: ${linkPrimaryBorderWidth} ${linkPrimaryBorderStyle} ${linkPrimaryBorderColor};
    padding-bottom: rem(${linkPrimaryPaddingBottom});
    @include fontsize(${linkPrimaryFontSize}, ${linkPrimaryLineHeight});

    &:hover {
        text-decoration: ${linkPrimaryHoverTextDecoration};
        border-bottom: ${linkPrimaryHoverBorderWidth} ${linkPrimaryHoverBorderStyle} ${linkPrimaryHoverBorderColor};
    }
}

.link-secondary {
    @include fontsize(${linkSecondaryFontSize}, ${linkSecondaryLineHeight});
    // font-family: $font-family-GothamMedium;
    color: ${linkSecondaryColor};
    text-transform: ${linkSecondaryTextTransform};
    text-decoration: ${linkSecondaryTextDecoration};

    &:hover {
        text-decoration: ${linkSecondaryHoverTextDecoration};
    }
}

.link-tertiary {
    @include fontsize(${linkTertiaryFontSize}, ${linkTertiaryLineHeight});
    // font-family: $font-family-GothamLight;
    color: ${linkTertiaryColor};
    text-transform: ${linkTertiaryTextTransform};
    text-decoration: ${linkTertiaryTextDecoration};

    &:hover {
        text-decoration: ${linkTertiaryHoverTextDecoration};
    }
}

.link-inline {
    @include fontsize(${linkInlineFontSize}, ${linkInlineLineHeight});
    // font-family: $font-family-GothamMedium;
    color: ${linkInlineColor};
    text-decoration: ${linkInlineTextDecoration};

    &:hover {
        text-decoration: ${linkInlineHoverTextDecoration};
    }
}

.link-pd-banner {
    display: ${linkPdBannerDisplay};
    // font-family: $font-family-GothamMedium;
    color: ${linkPdBannerColor};
    text-decoration: ${linkPdBannerTextDecoration};
    border-bottom: ${linkPdBannerBorderWidth} ${linkPdBannerBorderStyle} ${linkPdBannerBorderColor};
    padding-bottom: rem(${linkPdBannerPaddingBottom});
    @include fontsize(${linkPdBannerFontSize}, ${linkPdBannerLineHeight});

    &:hover {
        text-decoration: ${linkPdBannerHoverTextDecoration};
        border-bottom: ${linkPdBannerHoverBorderWidth} ${linkPdBannerHoverBorderStyle} ${linkPdBannerHoverBorderColor};
    }
}`
        var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
        xmlhttp.open("POST", "http://localhost:6001/btn");
        xmlhttp.setRequestHeader("Content-Type", 'text/plain');
        xmlhttp.send(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createTemplate(buttonStyles);
    }

    const handlePreviewButtonClick = () => {
        setPreviewButton(prevState => !prevState);
    };

  return (
    <>
        <h3>Buttons</h3>
        <div className='d-flex my-3 button-component'>
            <form onSubmit={handleSubmit} className='form'>
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
                <div className='link-primary-section'>
                    <h4 className=''>
                        .link-primary
                    </h4>
                    <div className=''>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryDisplay">Display</label>
                            <select required className='mx-2' name="linkPrimaryDisplay" id="linkPrimaryDisplay" onChange={updateStylesOnChange}>
                                {displayOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryColor">Color</label>
                            <select required className='mx-2' name="linkPrimaryColor" id="linkPrimaryColor" onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryTextDecoration">Text-Decoration</label>
                            <select required className='mx-2' name="linkPrimaryTextDecoration" id="linkPrimaryTextDecoration" onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryBorder">Border Bottom</label>
                            <input required type="text" className='mx-2' name='linkPrimaryBorderWidth' id='linkPrimaryBorderWidth' placeholder='Border width' onChange={updateStylesOnChange} />
                            <select required className='mx-2' name="linkPrimaryBorderStyle" id="linkPrimaryBorderStyle" onChange={updateStylesOnChange}>
                                {borderStyleOptions()}
                            </select>
                            <select required className='mx-2' name="linkPrimaryBorderColor" id="linkPrimaryBorderColor" onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                                <option value='transparent'>transparent</option>
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryPaddingBottom">Padding Bottom</label>
                            <input required type="text" className='mx-2' name='linkPrimaryPaddingBottom' id='linkPrimaryPaddingBottom' onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryFontSize">Font Size</label>
                            <input required type="text" className='mx-2' name='linkPrimaryFontSize' id='linkPrimaryFontSize' onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryLineHeight">Line Height</label>
                            <input required type="text" className='mx-2' name='linkPrimaryLineHeight' id='linkPrimaryLineHeight' onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryHoverTextDecoration">Hover Text-Decoration</label>
                            <select required className='mx-2' name="linkPrimaryHoverTextDecoration" id="linkPrimaryHoverTextDecoration" onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryHoverBorder">Border Bottom</label>
                            <input required type="text" className='mx-2' name='linkPrimaryHoverBorderWidth' id='linkPrimaryHoverBorderWidth' placeholder='Border width' onChange={updateStylesOnChange} />
                            <select required className='mx-2' name="linkPrimaryHoverBorderStyle" id="linkPrimaryHoverBorderStyle" onChange={updateStylesOnChange}>
                                {borderStyleOptions()}
                            </select>
                            <select required className='mx-2' name="linkPrimaryHoverBorderColor" id="linkPrimaryHoverBorderColor" onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                                <option value='transparent'>transparent</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='link-secondary-section'>
                    <h4 className=''>
                        .link-secondary
                    </h4>
                    <div className=''>
                        <div className='mb-2'>
                            <label htmlFor="linkSecondaryColor">Color</label>
                            <select required className='mx-2' name="linkSecondaryColor" id="linkSecondaryColor" onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkSecondaryTextDecoration">Text-Decoration</label>
                            <select required className='mx-2' name="linkSecondaryTextDecoration" id="linkSecondaryTextDecoration" onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkSecondaryFontSize">Font Size</label>
                            <input required type="text" className='mx-2' name='linkSecondaryFontSize' id='linkSecondaryFontSize' onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkSecondaryLineHeight">Line Height</label>
                            <input required type="text" className='mx-2' name='linkSecondaryLineHeight' id='linkSecondaryLineHeight' onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkSecondaryTextTransform">text-transform</label>
                            <select required className='mx-2' name="linkSecondaryTextTransform" id="linkSecondaryTextTransform" onChange={updateStylesOnChange}>
                                {textTransformOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkSecondaryHoverTextDecoration">Hover Text-Decoration</label>
                            <select required className='mx-2' name="linkSecondaryHoverTextDecoration" id="linkSecondaryHoverTextDecoration" onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='link-tertiary-section'>
                    <h4 className=''>
                        .link-tertiary
                    </h4>
                    <div className=''>
                        <div className='mb-2'>
                            <label htmlFor="linkTertiaryColor">Color</label>
                            <select required className='mx-2' name="linkTertiaryColor" id="linkTertiaryColor" onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkTertiaryTextDecoration">Text-Decoration</label>
                            <select required className='mx-2' name="linkTertiaryTextDecoration" id="linkTertiaryTextDecoration" onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkTertiaryFontSize">Font Size</label>
                            <input required type="text" className='mx-2' name='linkTertiaryFontSize' id='linkTertiaryFontSize' onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkTertiaryLineHeight">Line Height</label>
                            <input required type="text" className='mx-2' name='linkTertiaryLineHeight' id='linkTertiaryLineHeight' onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkTertiaryTextTransform">text-transform</label>
                            <select required className='mx-2' name="linkTertiaryTextTransform" id="linkTertiaryTextTransform" onChange={updateStylesOnChange}>
                                {textTransformOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkTertiaryHoverTextDecoration">Hover Text-Decoration</label>
                            <select required className='mx-2' name="linkTertiaryHoverTextDecoration" id="linkTertiaryHoverTextDecoration" onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='link-inline-section'>
                    <h4 className=''>
                        .link-inline
                    </h4>
                    <div className=''>
                        <div className='mb-2'>
                            <label htmlFor="linkInlineColor">Color</label>
                            <select required className='mx-2' name="linkInlineColor" id="linkInlineColor" onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkInlineTextDecoration">Text-Decoration</label>
                            <select required className='mx-2' name="linkInlineTextDecoration" id="linkInlineTextDecoration" onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkInlineFontSize">Font Size</label>
                            <input required type="text" className='mx-2' name='linkInlineFontSize' id='linkInlineFontSize' onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkInlineLineHeight">Line Height</label>
                            <input required type="text" className='mx-2' name='linkInlineLineHeight' id='linkInlineLineHeight' onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkInlineHoverTextDecoration">Hover Text-Decoration</label>
                            <select required className='mx-2' name="linkInlineHoverTextDecoration" id="linkInlineHoverTextDecoration" onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='link-pd-banner-section'>
                    <h4 className=''>
                        .link-pd-banner
                    </h4>
                    <div className=''>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerDisplay">Display</label>
                            <select required className='mx-2' name="linkPdBannerDisplay" id="linkPdBannerDisplay" onChange={updateStylesOnChange}>
                                {displayOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerColor">Color</label>
                            <select required className='mx-2' name="linkPdBannerColor" id="linkPdBannerColor" onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerTextDecoration">Text-Decoration</label>
                            <select required className='mx-2' name="linkPdBannerTextDecoration" id="linkPdBannerTextDecoration" onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerPaddingBottom">Padding Bottom</label>
                            <input required type="text" className='mx-2' name='linkPdBannerPaddingBottom' id='linkPdBannerPaddingBottom' onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerFontSize">Font Size</label>
                            <input required type="text" className='mx-2' name='linkPdBannerFontSize' id='linkPdBannerFontSize' onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerLineHeight">Line Height</label>
                            <input required type="text" className='mx-2' name='linkPdBannerLineHeight' id='linkPdBannerLineHeight' onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerBorder">Border Bottom</label>
                            <input required type="text" className='mx-2' name='linkPdBannerBorderWidth' id='linkPdBannerBorderWidth' placeholder='Border width' onChange={updateStylesOnChange} />
                            <select required className='mx-2' name="linkPdBannerBorderStyle" id="linkPdBannerBorderStyle" onChange={updateStylesOnChange}>
                                {borderStyleOptions()}
                            </select>
                            <select required className='mx-2' name="linkPdBannerBorderColor" id="linkPdBannerBorderColor" onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                                <option value='transparent'>transparent</option>
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerHoverTextDecoration">Hover Text-Decoration</label>
                            <select required className='mx-2' name="linkPdBannerHoverTextDecoration" id="linkPdBannerHoverTextDecoration" onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerHoverBorder">Hover Border Bottom</label>
                            <input required type="text" className='mx-2' name='linkPdBannerHoverBorderWidth' id='linkPdBannerHoverBorderWidth' placeholder='Border width' onChange={updateStylesOnChange} />
                            <select required className='mx-2' name="linkPdBannerHoverBorderStyle" id="linkPdBannerHoverBorderStyle" onChange={updateStylesOnChange}>
                                {borderStyleOptions()}
                            </select>
                            <select required className='mx-2' name="linkPdBannerHoverBorderColor" id="linkPdBannerHoverBorderColor" onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                                <option value='transparent'>transparent</option>
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
    </>
  )
}
