import React, {useState} from 'react';




const TextForm = (props) => {
    const [text, setText] = useState('');
    const handleClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Text has been changed to Upper Case.");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const resetText = () => {
        setText("");
    }
    const handleCopy = () => {
        let text = document.getElementById('textBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied.");
    }
    const handleExtraSpaces = (event) => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces has been removed.");
    }
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6 w-75">
            <div className="border border-secondary rounded p-4" style={{backgroundColor: '#2b2f32'}}>
                <div className="mb-3">
                <h3 className="text-center text-light mb-4">{props.heading}</h3>
                <textarea className="form-control" rows="8" value={text} onChange={handleOnChange} placeholder="" id="textBox"></textarea>
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-primary m-1" onClick={handleClick}>Upper Case</button>
                <button type="submit" className="btn btn-primary m-1" onClick={handleCopy}>Copy</button>
                <button type="submit" className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button type="reset" className="btn btn-primary m-1" onClick={resetText}>Reset</button>
                </div>
                <div className="flex text-light text-center fw-bold"><p>Words: {text.length===0? "0":text.split(" ").length}, Characters: {text.length}</p></div>
                <div className="flex text-light text-center"><p>Average time to read: {0.008 * (text.length===0? 0:text.split(" ").length)} minutes</p></div>
            </div>
            </div>
        </div>
    );
}

export default TextForm;