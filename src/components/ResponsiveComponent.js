import React from "react";
import { Dimensions } from "react-native";
import Platform from "../utils/Platform";

class ResponsiveComponent extends React.Component {

    constructor() {
        super();

        this.state = {
            orientation: Platform.getOrientation(),
            deviceType: Platform.getDeviceType(),
            rootViewSize: Platform.getRootViewSize(),
        };
        this.onOrientationChange = this.onOrientationChange.bind(this);
    }

    componentDidMount() {
        Dimensions.addEventListener("change", this.onOrientationChange);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.onOrientationChange);
    }

    onOrientationChange() {
        this.setState({
            ...this.state,
            orientation: Platform.getOrientation(),
            rootViewSize: Platform.getRootViewSize(),
        });
    }
}

export default ResponsiveComponent;