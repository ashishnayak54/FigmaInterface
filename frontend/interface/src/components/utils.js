import GlobalVariables from '../json/variables.json'

export const mappedGlobalVariables = Object.entries(GlobalVariables).map(variable => {
    return <option key={variable[0]} value={'$' + variable[0].toLowerCase()}>{variable[0]}</option>
});

export const textTransformOptions = () => {
    return (
        <>
            <option value=''>Select</option>
            <option value="uppercase">uppercase</option>
            <option value="capitalize">capitalize</option>
            <option value="lowercase">lowercase</option>
        </>
    )
}

export const displayOptions = () => {
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

export const textDecorationOptions = () => {
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

export const borderStyleOptions = () => {
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
