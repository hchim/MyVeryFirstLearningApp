import React from "react";
import { Dimensions } from "react-native";
import Platform from "../utils/Platform";
import { Header } from 'react-navigation';

class ResponsiveComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            orientation: Platform.getOrientation(),
            deviceType: Platform.getDeviceType(),
            rootViewSize: this._getRootviewSize(),
        };

        // Event Listener for orientation changes
        Dimensions.addEventListener("change", () => {

            this.setState({
                orientation: Platform.getOrientation(),
                rootViewSize: this._getRootviewSize(),
            });
        });
    }

    _getRootviewSize() {
        const dim = Platform.getScreenSize();
        return { width: dim.width, height: dim.height - Header.HEIGHT};
    }
}

export default ResponsiveComponent;