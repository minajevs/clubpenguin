import React from "react";
import Slider from "react-slick";

export default class Carousel extends React.Component {
  swiping = false;
  carouselRef = React.createRef<any>();

  handleMouseDown = (event: any) => {
    event.preventDefault();
  };

  handleMouseUp = () => {
    this.swiping = this.carouselRef.current.innerSlider.state.swiping;
  };

  handleClick = (event: any) => {
    if (this.swiping) {
      event.preventDefault();
    }
  };

  /**
   * @see React.Component.render
   * @return {JSX}
   */
  render() {
    const { children } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <Slider ref={this.carouselRef} {...settings}>
        {React.Children.map(children, child => (
          <div onClickCapture={this.handleClick} onMouseUpCapture={this.handleMouseUp} onMouseDownCapture={this.handleMouseDown}>
            {child}
          </div>
        ))}
      </Slider>
    );
  }
}