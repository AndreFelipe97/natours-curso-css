import { FiGlobe, FiHeart, FiMap, FiMapPin } from 'react-icons/fi';

import { SectionFeatures, FetureBox, Text } from './styles';

import { HeadingTertiary } from '../../styles/typography';

export function Features() {
  return (
    <SectionFeatures>
      <div className="row">
        <div className="col-1-of-4">
          <FetureBox>
            <FiGlobe color="#7ed56f" />
            <HeadingTertiary>Explore the world</HeadingTertiary>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
            </Text>
          </FetureBox>
        </div>
        <div className="col-1-of-4">
          <FetureBox>
            <FiMapPin color="#7ed56f" />
            <HeadingTertiary>Meet nature</HeadingTertiary>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
            </Text>
          </FetureBox>
        </div>
        <div className="col-1-of-4">
          <FetureBox>
            <FiMap color="#7ed56f" />
            <HeadingTertiary>Find your way</HeadingTertiary>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
            </Text>
          </FetureBox>
        </div>
        <div className="col-1-of-4">
          <FetureBox>
            <FiHeart color="#7ed56f" />
            <HeadingTertiary>Live a healthier life</HeadingTertiary>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
            </Text>
          </FetureBox>
        </div>
      </div>
    </SectionFeatures>
  );
}