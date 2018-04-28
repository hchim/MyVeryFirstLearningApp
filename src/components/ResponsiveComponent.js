import React from "react";
import { Dimensions } from "react-native";
import Platform from "../utils/Platform";

class ResponsiveComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            orientation: Platform.getOrientation(),
            deviceType: Platform.getDeviceType()
        };

        // Event Listener for orientation changes
        Dimensions.addEventListener("change", () => {
            this.setState({
                orientation: Platform.getOrientation()
            });
        });
    }
}

export default ResponsiveComponent;