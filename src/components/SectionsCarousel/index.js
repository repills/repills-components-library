import React from 'react';
import SectionPreview from '../SectionPreview';
import {
  func,
  arrayOf,
  shape,
  object
} from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../Button';
import { SM, MD, LG, XL, query } from '../../config/breakpoints';
import {
  base,
  items,
  item
} from './style';


const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;

// @TODO create a default settings and allow to pass options as props
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4.5,
  //slidesToScroll: 4,
  slidesToScroll: 1,
  mobileFirst: true,
  initialSlide: 0,
  respondTo: 'slider',
  responsive: [
    {
      breakpoint: query[XL].minWidth,
      settings: {
        slidesToShow: 3.25,
        //slidesToScroll: 3
      }
    },
    {
      breakpoint: query[MD].minWidth,
      settings: {
        slidesToShow: 2.25,
        //slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: query[SM].minWidth,
      settings: {
        slidesToShow: 1.25,
        //slidesToScroll: 1
      }
    }
  ]
};

class SectionsCarousel extends React.Component {

  static propTypes = {
    navigateTo: func,
    sections: arrayOf(shape(SectionPreview.propTypes)).isRequired
  };

  next = () => {
    this.slider.slickNext();
  };

  previous = () => {
    this.slider.slickPrev();
  };

  render() {
    const {
      sections,
      navigateTo,
      ...others
    } = this.props;

    return (
      <BaseStyle
        {...others}
      >
        <div  style={{ margin: '0 -8px' }}>
          <Slider
            ref={c => (this.slider = c)}
            {...settings}
          >
            {sections.map(section => (
              <div>
                <div style={{padding: '0 8px'}}>
                  <SectionPreview
                    key={section.id}
                    navigateTo={() => navigateTo(section.path)}
                    {...section}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div style={{ textAlign: "center", marginTop: '32px' }}>
          <Button
            autoWidth
            label="Prev"
            onClick={this.previous}
            skin="outline"
          />
          <Button
            autoWidth
            label="Next"
            onClick={this.next}
            skin="outline"
          />
        </div>
      </BaseStyle>
    );
  }
}

export default SectionsCarousel;
