import react, {useState} from "react";

const inputElement = () => {

    const [inputText, setInputText] = useState("");

    return <div>
        <input onChange={(e) => {
        setInputText(e.target.value);
    }} 
    placeholder="Enter some text" /><br/>
    {inputText}
    </div>
};

export default inputElement;