import react from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/images/bw/img1.png"
                                    secondaryImg="/static/images/img1.png" 
                                    alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/static/images/bw/img2.png"
                                    secondaryImg="/static/images/img2.png" 
                                    alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/static/images/bw/img3.png"
                                    secondaryImg="/static/images/img3.png" 
                                    alt="" />
        </div>
    );
};

export default ImageChangeOnMouseOver;