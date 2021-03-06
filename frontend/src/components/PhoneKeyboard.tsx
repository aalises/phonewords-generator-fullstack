import * as React from 'react';
import styled from "styled-components";

//Orbit imports
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Button from "@kiwicom/orbit-components/lib/Button";
import Card from "@kiwicom/orbit-components/lib/Card";
import CardSection from "@kiwicom/orbit-components/lib/Card/CardSection";
import CardSectionHeader from "@kiwicom/orbit-components/lib/Card/CardSection/CardSectionHeader";
import CardSectionContent from "@kiwicom/orbit-components/lib/Card/CardSection/CardSectionContent";

const numbers = ['1','2','3', '4','5','6', '7','8','9', 'Back','0','Clear'];


interface PhoneKeyboardProps {
  handleClick: Function
}

const KeyboardPhoneWrapper = styled.div`
  margin: 1rem 0rem
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 80%
`

export default ({handleClick} : PhoneKeyboardProps) => {
    return (
      <KeyboardPhoneWrapper>
        <Card>
          <CardSection expandable dataTest="keyboard-phone-card">
            <CardSectionHeader>
              <Heading type="title3" element="h3">Show/Hide Phone Keyboard </Heading>
            </CardSectionHeader>
            <CardSectionContent>
              <Grid>
              {numbers.map(el => 
                <Button type="secondary" dataTest={`keyboard-phone-element-${el}`} onClick={() => handleClick(el)} key={el}>{el}</Button>
              )}
              </Grid>
            </CardSectionContent>
          </CardSection>
        </Card>
      </KeyboardPhoneWrapper>
    )
}
