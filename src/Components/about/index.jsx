import { SectionAbout, Composition } from './styles';
import { BtnText } from '../../styles/buttons';
import { HeadingSecondary, HeadingTertiary, Paragraph } from '../../styles/typography';
import { UCenterText, UMarginBottomSmall, UMarginBottomBig } from '../../styles/utilities';

import { Nat1Large, Nat2Large, Nat3Large } from '../../assets/img';

export function About() {
  return (
    <main>
      <SectionAbout>
        <UCenterText>
          <UMarginBottomBig>
            <HeadingSecondary>
              Exciting tours for adventures people
            </HeadingSecondary>
          </UMarginBottomBig>
        </UCenterText>
        <div className='row'>
          <div className='col-1-of-2'>
            <HeadingTertiary>
              <UMarginBottomSmall>
                You're going to fall in love with nature
              </UMarginBottomSmall>
              </HeadingTertiary>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet corrupti voluptatibus voluptates nostrum? Soluta provident, praesentium id sunt autem dolore delectus. Beatae esse mollitia numquam vel doloremque ipsam corporis?
            </Paragraph>

            <HeadingTertiary>
              <UMarginBottomSmall>
                Live adventures like you never have before
              </UMarginBottomSmall>
            </HeadingTertiary>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
            </Paragraph>
            <BtnText href='#'>
              Learn more &rarr;
            </BtnText>
          </div>
          <div className='col-1-of-2'>
            <Composition>
              <img src={Nat1Large} alt="Photo 1" className="composition__photo composition__photo--p1" />
              <img src={Nat2Large} alt="Photo 2" className="composition__photo composition__photo--p2" />
              <img src={Nat3Large} alt="Photo 3" className="composition__photo composition__photo--p3" />
            </Composition>
          </div>
        </div>
      </SectionAbout>
    </main>
  );
}