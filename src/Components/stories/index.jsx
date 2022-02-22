import { UCenterText, UMarginBottomBig, UMarginBottomSmall, UMarginTopHuge } from '../../styles/utilities';
import { BtnText } from '../../styles/buttons';
import { HeadingSecondary, HeadingTertiary } from '../../styles/typography';
import { SectionStories, Story, Shape, StoryText, BgVideo } from './styles';
import { Nat8, Nat9, Video, VideoWebm } from '../../assets/img';

export function Stories() {
  return (
    <SectionStories>
      <BgVideo>
        <video className='bg-video__content' autoPlay={true} muted={true} loop={true}>
          <source src={Video} type="video/mp4" />
          <source src={VideoWebm} type="video/webm" />
          Your broweser is not supported!
        </video>
      </BgVideo>
      <UCenterText>
        <UMarginBottomBig>
          <HeadingSecondary>
            We make people genuinely happy
          </HeadingSecondary>
        </UMarginBottomBig>
      </UCenterText>
      <div className="row">
        <Story>
          <Shape>
            <img className='img' src={Nat8} alt="Person on a tour" />
            <figcaption className='caption'>
              Mary Smith
            </figcaption>
          </Shape>
          <StoryText>
            <UMarginBottomSmall>
              <HeadingTertiary>I had best week ever with my family</HeadingTertiary>
            </UMarginBottomSmall>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nostrum quos, perferendis excepturi quidem facere veniam provident sunt velit distinctio. Deleniti, exercitationem consequatur eveniet quasi aspernatur cupiditate itaque ipsam quia.
            </p>
          </StoryText>
        </Story>
      </div>

      <div className="row">
        <Story>
          <Shape>
            <img className='img' src={Nat9} alt="Person on a tour" />
            <figcaption className='caption'>
              jack Wilson
            </figcaption>
          </Shape>
          <StoryText>
            <UMarginBottomSmall>
              <HeadingTertiary>WOW! My lisfe is completely different now</HeadingTertiary>
            </UMarginBottomSmall>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nostrum quos, perferendis excepturi quidem facere veniam provident sunt velit distinctio. Deleniti, exercitationem consequatur eveniet quasi aspernatur cupiditate itaque ipsam quia.
            </p>
          </StoryText>
        </Story>
      </div>
      <UCenterText>
        <UMarginTopHuge>
          <BtnText href='#'>
            Read all stories &rarr;
          </BtnText>
        </UMarginTopHuge>
      </UCenterText>
    </SectionStories>
  );
}