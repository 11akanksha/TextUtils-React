import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case", "success");
    }

    const handleExClick = () => {
        const regex = /[0-9/ /]/g;
        const digits = text.match(regex);
        const newText = digits.join('');
        setText(newText);
        props.showAlert("Extracted Number", "success");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared Text", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Cases Removed", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{
                        backgroundColor: props.mode === 'light' ? '#B2C8DF' : '#2C2E43',
                        color: props.mode === 'light' ? 'black' : '#FBC7F7'
                    }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn primary mx-1" style={{ color: props.mode === 'light' ? 'black' : '#FBB454' }} onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn primary mx-1" style={{ color: props.mode === 'light' ? 'black' : '#FBB454' }} onClick={handleLowClick}>Convert to Lower Case</button>
                <button className="btn primary mx-1" style={{ color: props.mode === 'light' ? 'black' : '#FBB454' }} onClick={handleExClick}>Extract Numbers</button>
                <button className="btn primary mx-1" style={{ color: props.mode === 'light' ? 'black' : '#FBB454' }} onClick={handleCopy}>Copy Text</button>
                <button className="btn primary mx-1" style={{ color: props.mode === 'light' ? 'black' : '#FBB454' }} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn primary mx-1" style={{ color: props.mode === 'light' ? 'black' : '#FBB454' }} onClick={handleClearClick}>Clear Text</button>

            </div>
            <div className="container my-3">
                <h3 style={{ color: props.mode === 'light' ? 'black' : '#BAFFB4' }}>Your Text Summary:</h3>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text.split(" ").length} words and {text.length} characters.</p>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{0.008 * text.split(" ").length} minutes read.</p>
                <h4 style={{ color: props.mode === 'light' ? 'black' : '#BAFFB4' }}>Preview:</h4>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text.length > 0 ? text : "Enter something in the text box above to preview it here!"}</p>
            </div>
        </>
    )
}
