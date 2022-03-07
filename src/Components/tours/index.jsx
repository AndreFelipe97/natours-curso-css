import { useState } from "react";
import {
  UCenterText,
  UMarginBottomBig,
  UMarginTopHuge,
} from "../../styles/utilities";
import { HeadingSecondary } from "../../styles/typography";
import { usePopup } from "../../contexts/popupContext";

import {
  SectionTours,
  Card,
  CardPicture,
  CardHeading,
  CardDetails,
  CardCta,
  PriceBox,
  PriceOnly,
  PriceValue,
  BtnCard,
  BtnAllTours,
} from "./styles";
import { Popup } from "../popup";

export function Tours() {
  const { popup, popupOpen } = usePopup();

  return (
    <>
      <SectionTours id="tours">
        <UCenterText>
          <UMarginBottomBig>
            <HeadingSecondary>Most popular tours</HeadingSecondary>
          </UMarginBottomBig>
        </UCenterText>
        <div className="row">
          <div className="col-1-of-3">
            <Card card="secondary">
              <div className="card__side card__side--front">
                <CardPicture card="secondary" />
                <CardHeading card="secondary">
                  <span>The sea explorer</span>
                </CardHeading>
                <CardDetails>
                  <ul>
                    <li>3 day tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </CardDetails>
              </div>
              <div className="card__side card__side--back">
                <CardCta>
                  <PriceBox>
                    <PriceOnly>Only</PriceOnly>
                    <PriceValue>$297</PriceValue>
                  </PriceBox>
                  <BtnCard onClick={popupOpen} href="#tours">
                    Book now!
                  </BtnCard>
                </CardCta>
              </div>
            </Card>
          </div>
          <div className="col-1-of-3">
            <Card card="primary">
              <div className="card__side card__side--front">
                <CardPicture card="primary" />
                <CardHeading card="primary">
                  <span>The Forest Hiker</span>
                </CardHeading>
                <CardDetails>
                  <ul>
                    <li>7 day tours</li>
                    <li>Up to 40 people</li>
                    <li>6 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: medium</li>
                  </ul>
                </CardDetails>
              </div>
              <div className="card__side card__side--back">
                <CardCta>
                  <PriceBox>
                    <PriceOnly>Only</PriceOnly>
                    <PriceValue>$497</PriceValue>
                  </PriceBox>
                  <BtnCard onClick={popupOpen} href="#tours">
                    Book now!
                  </BtnCard>
                </CardCta>
              </div>
            </Card>
          </div>
          <div className="col-1-of-3">
            <Card card="tertiary">
              <div className="card__side card__side--front">
                <CardPicture card="tertiary" />
                <CardHeading card="tertiary">
                  <span>The snow Adventurer</span>
                </CardHeading>
                <CardDetails>
                  <ul>
                    <li>5 day tours</li>
                    <li>Up to 15 people</li>
                    <li>3 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: hard</li>
                  </ul>
                </CardDetails>
              </div>
              <div className="card__side card__side--back">
                <CardCta>
                  <PriceBox>
                    <PriceOnly>Only</PriceOnly>
                    <PriceValue>$897</PriceValue>
                  </PriceBox>
                  <BtnCard onClick={popupOpen} href="#tours">
                    Book now!
                  </BtnCard>
                </CardCta>
              </div>
            </Card>
          </div>
        </div>
        <UCenterText>
          <UMarginTopHuge>
            <BtnAllTours href="#">Discover all tours</BtnAllTours>
          </UMarginTopHuge>
        </UCenterText>
      </SectionTours>

      {popup ? <Popup /> : <></>}
    </>
  );
}
