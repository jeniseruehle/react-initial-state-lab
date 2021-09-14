import React from 'react';

export default class ImageSlider extends React.Component {
    constructor() {
        super();
        this.state = {
            currentSlideIndex: 0,
        }
    }

    increment = () => {
        const CURRENT_SLIDE = this.state.currentSlideIndex + 1;
        this.setState({
            currentSlideIndex: CURRENT_SLIDE,
        })
    }


    render() {
        return <div>I am on slide {this.state.currentSlideIndex}</div>
    }
    
}