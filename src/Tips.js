import React, { Component } from "react";
import Slider from "react-slick";

class Tips extends Component {
  constructor(props) {
    super(props)

    this.tips = 'Lorem ipsum dolor sit amet consectetur adipisicing elit | Ipsa consequatur aspernatur, velit praesentium | harum sit vel est suscipit, voluptatem eaque ut | Asperiores aliquam numquam tenetur enim commodi consequuntur id rerum'.split('|')
    this.lessonTips = ''
  }

  componentDidMount() {
    // this.lessonTips = this.tips.split("|")
    // console.log(this.lessonTips)
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div style={{ width: '200px', height: '100px', backgroundColor: 'yellow' }}>
        <div style={{ width: '200px', height: '100px', backgroundColor: 'yellow' }}>
        <h2>Vertical Mode with Swipe To Slide</h2>
        <Slider {...settings}> 
            {
              this.tips.map((tip, key) => (
                <div className="slide-0" style={{ width: '200px', height: '100px' }}>
                  <div key={key}>{tip}</div>
                </div>
              ))
            }
        </Slider>
        </div>
      </div>
    );
  }
}

export default Tips