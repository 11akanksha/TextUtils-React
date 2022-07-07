import React from 'react';

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#781D42' : '#C4D7E0',
    }
    return (
        <div className="container">
            <h2 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : ' #2C2E43' }}>About Us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently,
                            be it word count, character count, converting to upper case or to lower case,
                            extracting numbers from your text, copying the text to your clipboard,removing extra
                            spaces, or to remove the entire text! All these with just a click of a button!!
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            All these cool features completely free forever!! Now modify your text like a pro!!
                            Just bring in your text from pdf files, excel sheet, books, browser or from any where
                            and easily and seamlessly analyze and modify it in a blink!
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compaitble</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This software works in any browser, be it Chrome, Firefox, Edge, Safari, Opera, etc!!
                            You can now easily use it while posting on Facebook, instagram, Linkedin, twitter, discord...literally anywhere!!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
