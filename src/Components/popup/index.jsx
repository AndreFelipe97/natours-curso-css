import { Nat8, Nat9 } from "../../assets/img";
import { FiX } from "react-icons/fi";
import { BtnBooking } from "../../styles/buttons";
import { HeadingSecondary, HeadingTertiary } from "../../styles/typography";
import { UMarginBottomSmall } from "../../styles/utilities";
import {
  Popup as PopupStyled,
  PopupContent,
  PopupLeft,
  PopupRight,
  PopupImg,
  ClosePopup,
  PopupText,
} from "./styles";
import { usePopup } from "../../contexts/popupContext";

export function Popup() {
  const { popupOpen } = usePopup();
  const imgs = [Nat8, Nat9];

  return (
    <PopupStyled>
      <PopupContent>
        <PopupLeft>
          {imgs.map((img, index) => (
            <PopupImg src={img} alt="tour" key={index} />
          ))}
        </PopupLeft>
        <PopupRight>
          <ClosePopup onClick={popupOpen} href="#tours">
            <FiX size={25} />
          </ClosePopup>
          <UMarginBottomSmall>
            <HeadingSecondary>Start booking now</HeadingSecondary>
          </UMarginBottomSmall>
          <UMarginBottomSmall>
            <HeadingTertiary>
              Important &ndash; Please read these terms before booking
            </HeadingTertiary>
          </UMarginBottomSmall>
          <PopupText>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </PopupText>
          <BtnBooking href="#">Book Now</BtnBooking>
        </PopupRight>
      </PopupContent>
    </PopupStyled>
  );
}
