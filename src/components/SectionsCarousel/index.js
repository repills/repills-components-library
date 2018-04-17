import React from 'react';
import SectionPreview from '../SectionPreview';
import {
  func,
  arrayOf,
  shape
} from 'prop-types';
import styled from 'styled-components';
import { Swiper, Slide } from 'react-dynamic-swiper'
import 'react-dynamic-swiper/lib/styles.css'
import Button from '../Button';
import { SM, MD, XL, query } from '../../config/breakpoints';
import {
  base,
  actions
} from './style';


const BaseStyle = styled.div`${base}`;
const ActionsStyle = styled.div`${actions}`;

// @TODO create a default settings and allow to pass options as props
const settings = {
  slidesPerView: 5.25,
  spaceBetween: 24,
  breakpoints: {
    [query[SM].minWidth]: {
      slidesPerView: 1.25,
      spaceBetween: 12
    },
    [query[MD].minWidth]: {
      slidesPerView: 2.25
    },
    [query[XL].minWidth]: {
      slidesPerView: 3.25
    }
  }
};

class SectionsCarousel extends React.Component {

  static propTypes = {
    navigateTo: func,
    sections: arrayOf(shape(SectionPreview.propTypes)).isRequired
  };

  /*
  constructor(props) {
    super(props);
    this.slider = null;
  }
  */

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
        <Swiper
          navigation={false}
          pagination={false}
          // ref={e => (this.slider = e.swiper())}
          swiperOptions={settings}
        >
          {sections.map(section => (
            <Slide key={section.id}>
              <SectionPreview
                navigateTo={() => navigateTo(section.path)}
                {...section}
              />
            </Slide>
          ))}
        </Swiper>
        {
          /*
           <ActionsStyle>
             <Button
               autoWidth
               disabled={this.slider && this.slider.isBeginning}
               label="Prev"
               onClick={() => this.slider.slidePrev()}
               skin="outline"
             />
             <Button
               autoWidth
               disabled={this.slider && this.slider.isEnd}
               label="Next"
               onClick={() => this.slider.slideNext()}
               skin="outline"
             />
           </ActionsStyle>
           */
        }
      </BaseStyle>
    );
  }
}

export default SectionsCarousel;
