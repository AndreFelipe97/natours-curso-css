import { SectionBook, Book, BookForm, Form, FormGroup, Input, Label, FormRadioGroup, RadioInput, RadioLabel, BtnBooking } from './styles';
import { UCenterText, UMarginBottomMedium } from '../../styles/utilities';
import { HeadingSecondary } from '../../styles/typography';

export function Booking() {
  return (
    <SectionBook id="book">
      <div className="row">
        <Book>
          <BookForm>
            <Form>
              <UCenterText>
                <UMarginBottomMedium>
                  <HeadingSecondary>
                    Start bookinng now
                  </HeadingSecondary>
                </UMarginBottomMedium>
              </UCenterText>
              <FormGroup>
                <Input className='form__input' type="text" placeholder='Full Name' id='name' required />
                <Label htmlFor="name" className="form__label">Full Name</Label>
              </FormGroup>
              <FormGroup>
                <Input className='form__input' type="email" placeholder='Email address' id='email' required />
                <Label htmlFor="email" className="form__label">Email address</Label>
              </FormGroup>
              <UMarginBottomMedium>
                <FormGroup>
                  <FormRadioGroup>
                    <RadioInput type="radio" id="small" name='size' />
                    <RadioLabel htmlFor='small'>
                      <span></span>
                      Small tour group
                    </RadioLabel>
                  </FormRadioGroup>
                  <FormRadioGroup>
                    <RadioInput type="radio" id="large" name='size' />
                    <RadioLabel htmlFor='large'>
                      <span></span>
                      Large tour group
                    </RadioLabel>
                  </FormRadioGroup>
                </FormGroup>
              </UMarginBottomMedium>
              <FormGroup>
                <BtnBooking>Next step &rarr;</BtnBooking>
              </FormGroup>
            </Form>
          </BookForm>
        </Book>
      </div>
    </SectionBook>
  );
}