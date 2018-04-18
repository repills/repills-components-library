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
import {
  base,
  items,
  item
} from './style';


const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;

const defaultSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4.5,
  slidesToScroll: 1,
  mobileFirst: true,
  initialSlide: 0,
  respondTo: 'slider'
};

class SectionsCarousel extends React.Component {

  static propTypes = {
    navigateTo: func,
    sections: arrayOf(shape(SectionPreview.propTypes)).isRequired,
    settings: object
  };

  constructor(props) {
    super(props);
    this.settings = this.props.settings ? Object.assign({}, defaultSettings, this.props.settings) : defaultSettings;
  }

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
        <ItemsStyle>
          <Slider
            ref={c => (this.slider = c)}
            {...this.settings}
          >
            {sections.map(section => (
              <div>
                <ItemStyle>
                  <SectionPreview
                    key={section.id}
                    navigateTo={() => navigateTo(section.path)}
                    {...section}
                  />
                </ItemStyle>
              </div>
            ))}
          </Slider>
        </ItemsStyle>
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
