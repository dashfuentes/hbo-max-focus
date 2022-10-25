import React, { FC, useRef } from "react";
import Lottie from "lottie-react";
import ghostAnimation from "../../../assets/ghost-animation.json";
import {lottie} from './styles'

interface Props {}

const Loading: FC<Props> = (props) => {
    const interactivity : any = {
        mode: "scroll",
        actions: [
            
            ]
      };
      
	return (
        <Lottie
			animationData={ghostAnimation}
            autoPlay
            style={lottie}
            interactivity= {interactivity}
		/>
	);
};

export default Loading;
