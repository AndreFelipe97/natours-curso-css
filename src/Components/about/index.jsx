import { SectionAbout, Composition } from "./styles";
import { BtnText } from "../../styles/buttons";
import {
  HeadingSecondary,
  HeadingTertiary,
  Paragraph,
} from "../../styles/typography";
import {
  UCenterText,
  UMarginBottomSmall,
  UMarginBottomBig,
} from "../../styles/utilities";

import { Nat1, Nat1Large, Nat2, Nat2Large, Nat3, Nat3Large } from "../../assets/img";

export function About() {
  return (
    <main id="about">
      <SectionAbout>
        <UCenterText>
          <UMarginBottomBig>
            <HeadingSecondary>
              Exciting tours for adventures people
            </HeadingSecondary>
          </UMarginBottomBig>
        </UCenterText>
        <div className="row">
          <div className="col-1-of-2">
            <HeadingTertiary>
              <UMarginBottomSmall>
                You're going to fall in love with nature
              </UMarginBottomSmall>
            </HeadingTertiary>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              eveniet corrupti voluptatibus voluptates nostrum? Soluta
              provident, praesentium id sunt autem dolore delectus. Beatae esse
              mollitia numquam vel doloremque ipsam corporis?
            </Paragraph>

            <HeadingTertiary>
              <UMarginBottomSmall>
                Live adventures like you never have before
              </UMarginBottomSmall>
            </HeadingTertiary>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nulla deserunt voluptatum nam.
            </Paragraph>
            <BtnText href="#">Learn more &rarr;</BtnText>
          </div>
          <div className="col-1-of-2">
            <Composition>
              {[[Nat1, Nat1Large], [Nat2, Nat2Large], [Nat3, Nat3Large]].map((image, index) => (
                <img
                  srcSet={`${image[0]} 300w, ${image[1]} 1000w`}
                  src={image[1]}
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
                  alt={`${index + 1}`}
                  key={index}
                  className={`composition__photo composition__photo--p${
                    index + 1
                  }`}
                />
              ))}
            </Composition>
          </div>
        </div>
      </SectionAbout>
    </main>
  );
}
