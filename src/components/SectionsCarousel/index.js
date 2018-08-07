import React from 'react';
import SectionPreview from '../SectionPreview';
import {
  func,
  arrayOf,
  shape,
  object,
  bool
} from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../Button';
import {
  base,
  items,
  item,
  actions
} from './style';


const BaseStyle = styled.div`${base}`;
const ItemsStyle = styled.div`${items}`;
const ItemStyle = styled.div`${item}`;
const ActionsStyle = styled.div`${actions}`;

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
      showNavigation,
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
              <div key={section.id} >
                <ItemStyle>
                  <SectionPreview
                    navigateTo={() => navigateTo(section.path)}
                    {...section}
                  />
                </ItemStyle>
              </div>
            ))}
          </Slider>
        </ItemsStyle>
        {
          showNavigation &&
          <ActionsStyle>
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
          </ActionsStyle>
        }
      </BaseStyle>
    );
  }
}

SectionsCarousel.displayName = 'SectionsCarousel';

SectionsCarousel.propTypes = {
  navigateTo: func,
  sections: arrayOf(shape(SectionPreview.propTypes)).isRequired,
  settings: object,
  showNavigation: bool
};

export default SectionsCarousel;
