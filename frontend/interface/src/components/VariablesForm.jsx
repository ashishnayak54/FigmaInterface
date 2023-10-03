import React, { useState } from 'react'
import Button from './Button'
import GenericColorVariables from '../tokens/genericColorVariables.json'

export default function Variables(props) {
    let [btnComponent, showBtnComponent] = useState(true);
    let colorProp = props.color;
    let mappedColors;
    if (colorProp) {
        let color = colorProp;
        mappedColors = Object.entries(color).map(([x], ind) => (
            <option key={x} value={color[x].value}>{color[x].value}</option>
        ));
    }

    let genericColorVariables = GenericColorVariables.genericColorVariables;

    const handleSubmit = (e) => {
        e.preventDefault();

        let target = e.target;
        let targetArray = Object.entries(target);
        
        let data = {};
        targetArray.map((ele) => {
          if (typeof ele[1]["name"] === "undefined" || ele[1]["type"] === "submit") {
            return true;
          } else {
            let key = ele[1]["name"];
            let value = ele[1].value;
            data[key] = {"value": value};
            return true;
          }
        });
        var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
        xmlhttp.open("POST", "http://localhost:6001/abcd");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify( data ));

        showBtnComponent(true);
    }
  return (
    <>
        <h3>Variables</h3>
        <form onSubmit={handleSubmit} className='my-3 form'>
            {genericColorVariables.map(variable => {
                return (
                    <div key={variable} className='mb-2'>
                        <label htmlFor={variable}>{variable}</label>
                        <select className='mx-2' name={variable} id={variable}>
                            {mappedColors}
                        </select>
                    </div>
                )
            })}
            <input type="submit" value="Submit" />
        </form>
        {btnComponent && <Button />}
    </>
  )
}
