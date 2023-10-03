import React, { useState } from 'react'
import GlobalVariables from '../json/variables.json';

export default function Link() {
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

  return (
    <div className='link-component'>
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
    </div>
  )
}
