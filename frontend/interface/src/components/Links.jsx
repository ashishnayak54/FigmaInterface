import React, { useState, useEffect } from 'react'
import {mappedGlobalVariables, textTransformOptions, displayOptions, textDecorationOptions, borderStyleOptions} from './utils';
import linksJson from '../json/links.json';

export default function Link() {
    const [linkStyles, setLinkStyles] = useState(linksJson);

    let {
        linkPrimaryColor, linkPrimaryTextDecoration, linkPrimaryPaddingBottom, linkPrimaryFontSize, 
        linkPrimaryLineHeight, linkPrimaryDisplay, linkPrimaryHoverTextDecoration,
        linkPrimaryBorderWidth, linkPrimaryBorderStyle, linkPrimaryBorderColor,
        linkPrimaryHoverBorderWidth, linkPrimaryHoverBorderStyle, linkPrimaryHoverBorderColor,
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
    } = linkStyles;

    useEffect(() => {
        setLinkStyles(linksJson);
    }, []);


    // function triggered on input of button properties
    let updateStylesOnChange = (e) => {
        let key = e.target["id"];
        let value = e.target.value;
        setLinkStyles({...linkStyles, [key]: value});
    };

    // create scss template based on submit
    let createTemplate = (styles) => {
        let {
            linkPrimaryColor, linkPrimaryTextDecoration, linkPrimaryPaddingBottom, linkPrimaryFontSize, 
            linkPrimaryLineHeight, linkPrimaryDisplay, linkPrimaryHoverTextDecoration,
            linkPrimaryBorderWidth, linkPrimaryBorderStyle, linkPrimaryBorderColor,
            linkPrimaryHoverBorderWidth, linkPrimaryHoverBorderStyle, linkPrimaryHoverBorderColor,
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
        
        let linksScss = `@import "./utilities/mixin";

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
console.log('createTemplate function');
        fetch(
            'http://localhost:6001/links',
            {
              method: 'POST',
              headers: {
                "Content-Type": 'application/json'
              },
              body: JSON.stringify(styles)
            },
        );
        fetch(
            'http://localhost:6001/links',
            {
              method: 'POST',
              headers: {
                "Content-Type": 'text/plain'
              },
              body: linksScss
            },
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit function');
        createTemplate(linkStyles);
    }

  return (
    <div className='link-component'>
        <h3>Links</h3>
        <div className="d-dlex">
            <form onSubmit={handleSubmit}>
                <div className='link-primary-section'>
                    <h4 className=''>
                        .link-primary
                    </h4>
                    <div className=''>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryDisplay">Display</label>
                            <select required className='mx-2' name="linkPrimaryDisplay" id="linkPrimaryDisplay" value={linkPrimaryDisplay} onChange={updateStylesOnChange}>
                                {displayOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryColor">Color</label>
                            <select required className='mx-2' name="linkPrimaryColor" id="linkPrimaryColor" value={linkPrimaryColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryTextDecoration">Text-Decoration</label>
                            <select required className='mx-2' name="linkPrimaryTextDecoration" id="linkPrimaryTextDecoration" value={linkPrimaryTextDecoration} onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryBorder">Border Bottom</label>
                            <input required type="text" className='mx-2' name='linkPrimaryBorderWidth' id='linkPrimaryBorderWidth' placeholder='Border width' value={linkPrimaryBorderWidth} onChange={updateStylesOnChange} />
                            <select required className='mx-2' name="linkPrimaryBorderStyle" id="linkPrimaryBorderStyle" value={linkPrimaryBorderStyle} onChange={updateStylesOnChange}>
                                {borderStyleOptions()}
                            </select>
                            <select required className='mx-2' name="linkPrimaryBorderColor" id="linkPrimaryBorderColor" value={linkPrimaryBorderColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                                <option value='transparent'>transparent</option>
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryPaddingBottom">Padding Bottom</label>
                            <input required type="text" className='mx-2' name='linkPrimaryPaddingBottom' id='linkPrimaryPaddingBottom' value={linkPrimaryPaddingBottom} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryFontSize">Font Size</label>
                            <input required type="text" className='mx-2' name='linkPrimaryFontSize' id='linkPrimaryFontSize' value={linkPrimaryFontSize} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryLineHeight">Line Height</label>
                            <input required type="text" className='mx-2' name='linkPrimaryLineHeight' id='linkPrimaryLineHeight' value={linkPrimaryLineHeight} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryHoverTextDecoration">Hover Text-Decoration</label>
                            <select required className='mx-2' name="linkPrimaryHoverTextDecoration" id="linkPrimaryHoverTextDecoration" value={linkPrimaryHoverTextDecoration} onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPrimaryHoverBorder">Border Bottom</label>
                            <input required type="text" className='mx-2' name='linkPrimaryHoverBorderWidth' id='linkPrimaryHoverBorderWidth' placeholder='Border width' value={linkPrimaryHoverBorderWidth} onChange={updateStylesOnChange} />
                            <select required className='mx-2' name="linkPrimaryHoverBorderStyle" id="linkPrimaryHoverBorderStyle" value={linkPrimaryHoverBorderStyle} onChange={updateStylesOnChange}>
                                {borderStyleOptions()}
                            </select>
                            <select required className='mx-2' name="linkPrimaryHoverBorderColor" id="linkPrimaryHoverBorderColor" value={linkPrimaryHoverBorderColor} onChange={updateStylesOnChange}>
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
                            <select required className='mx-2' name="linkSecondaryColor" id="linkSecondaryColor" value={linkSecondaryColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkSecondaryTextDecoration">Text-Decoration</label>
                            <select required className='mx-2' name="linkSecondaryTextDecoration" id="linkSecondaryTextDecoration" value={linkSecondaryTextDecoration} onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkSecondaryFontSize">Font Size</label>
                            <input required type="text" className='mx-2' name='linkSecondaryFontSize' id='linkSecondaryFontSize' value={linkSecondaryFontSize} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkSecondaryLineHeight">Line Height</label>
                            <input required type="text" className='mx-2' name='linkSecondaryLineHeight' id='linkSecondaryLineHeight' value={linkSecondaryLineHeight} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkSecondaryTextTransform">text-transform</label>
                            <select required className='mx-2' name="linkSecondaryTextTransform" id="linkSecondaryTextTransform" value={linkSecondaryTextTransform} onChange={updateStylesOnChange}>
                                {textTransformOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkSecondaryHoverTextDecoration">Hover Text-Decoration</label>
                            <select required className='mx-2' name="linkSecondaryHoverTextDecoration" id="linkSecondaryHoverTextDecoration" value={linkSecondaryHoverTextDecoration} onChange={updateStylesOnChange}>
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
                            <select required className='mx-2' name="linkTertiaryColor" id="linkTertiaryColor" value={linkTertiaryColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkTertiaryTextDecoration">Text-Decoration</label>
                            <select required className='mx-2' name="linkTertiaryTextDecoration" id="linkTertiaryTextDecoration" value={linkTertiaryTextDecoration} onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkTertiaryFontSize">Font Size</label>
                            <input required type="text" className='mx-2' name='linkTertiaryFontSize' id='linkTertiaryFontSize' value={linkTertiaryFontSize} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkTertiaryLineHeight">Line Height</label>
                            <input required type="text" className='mx-2' name='linkTertiaryLineHeight' id='linkTertiaryLineHeight' value={linkTertiaryLineHeight} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkTertiaryTextTransform">text-transform</label>
                            <select required className='mx-2' name="linkTertiaryTextTransform" id="linkTertiaryTextTransform" value={linkTertiaryTextTransform} onChange={updateStylesOnChange}>
                                {textTransformOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkTertiaryHoverTextDecoration">Hover Text-Decoration</label>
                            <select required className='mx-2' name="linkTertiaryHoverTextDecoration" id="linkTertiaryHoverTextDecoration" value={linkTertiaryHoverTextDecoration} onChange={updateStylesOnChange}>
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
                            <select required className='mx-2' name="linkInlineColor" id="linkInlineColor" value={linkInlineColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkInlineTextDecoration">Text-Decoration</label>
                            <select required className='mx-2' name="linkInlineTextDecoration" id="linkInlineTextDecoration" value={linkInlineTextDecoration} onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkInlineFontSize">Font Size</label>
                            <input required type="text" className='mx-2' name='linkInlineFontSize' id='linkInlineFontSize' value={linkInlineFontSize} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkInlineLineHeight">Line Height</label>
                            <input required type="text" className='mx-2' name='linkInlineLineHeight' id='linkInlineLineHeight' value={linkInlineLineHeight} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkInlineHoverTextDecoration">Hover Text-Decoration</label>
                            <select required className='mx-2' name="linkInlineHoverTextDecoration" id="linkInlineHoverTextDecoration" value={linkInlineHoverTextDecoration} onChange={updateStylesOnChange}>
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
                            <select required className='mx-2' name="linkPdBannerDisplay" id="linkPdBannerDisplay" value={linkPdBannerDisplay} onChange={updateStylesOnChange}>
                                {displayOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerColor">Color</label>
                            <select required className='mx-2' name="linkPdBannerColor" id="linkPdBannerColor" value={linkPdBannerColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerTextDecoration">Text-Decoration</label>
                            <select required className='mx-2' name="linkPdBannerTextDecoration" id="linkPdBannerTextDecoration" value={linkPdBannerTextDecoration} onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerPaddingBottom">Padding Bottom</label>
                            <input required type="text" className='mx-2' name='linkPdBannerPaddingBottom' id='linkPdBannerPaddingBottom' value={linkPdBannerPaddingBottom} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerFontSize">Font Size</label>
                            <input required type="text" className='mx-2' name='linkPdBannerFontSize' id='linkPdBannerFontSize' value={linkPdBannerFontSize} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerLineHeight">Line Height</label>
                            <input required type="text" className='mx-2' name='linkPdBannerLineHeight' id='linkPdBannerLineHeight' value={linkPdBannerLineHeight} onChange={updateStylesOnChange} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerBorder">Border Bottom</label>
                            <input required type="text" className='mx-2' name='linkPdBannerBorderWidth' id='linkPdBannerBorderWidth' placeholder='Border width' value={linkPdBannerBorderWidth} onChange={updateStylesOnChange} />
                            <select required className='mx-2' name="linkPdBannerBorderStyle" id="linkPdBannerBorderStyle" value={linkPdBannerBorderStyle} onChange={updateStylesOnChange}>
                                {borderStyleOptions()}
                            </select>
                            <select required className='mx-2' name="linkPdBannerBorderColor" id="linkPdBannerBorderColor" value={linkPdBannerBorderColor} onChange={updateStylesOnChange}>
                                <option value=''>Select</option>
                                {mappedGlobalVariables}
                                <option value='transparent'>transparent</option>
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerHoverTextDecoration">Hover Text-Decoration</label>
                            <select required className='mx-2' name="linkPdBannerHoverTextDecoration" id="linkPdBannerHoverTextDecoration" value={linkPdBannerHoverTextDecoration} onChange={updateStylesOnChange}>
                                {textDecorationOptions()}
                            </select>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="linkPdBannerHoverBorder">Hover Border Bottom</label>
                            <input required type="text" className='mx-2' name='linkPdBannerHoverBorderWidth' id='linkPdBannerHoverBorderWidth' placeholder='Border width' value={linkPdBannerHoverBorderWidth} onChange={updateStylesOnChange} />
                            <select required className='mx-2' name="linkPdBannerHoverBorderStyle" id="linkPdBannerHoverBorderStyle" value={linkPdBannerHoverBorderStyle} onChange={updateStylesOnChange}>
                                {borderStyleOptions()}
                            </select>
                            <select required className='mx-2' name="linkPdBannerHoverBorderColor" id="linkPdBannerHoverBorderColor" value={linkPdBannerHoverBorderColor} onChange={updateStylesOnChange}>
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
        </div>
    </div>
  )
}
