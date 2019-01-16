import * as React from 'react';
import styled from "styled-components";
import PhonewordForm from "./components/PhonewordForm";
import Heading from "@kiwicom/orbit-components/lib/Heading";

const MainView = styled.div`
  padding: 3rem 3rem
  min-height: 100%
`

export default () => {
  return (
    <MainView>
      <Heading type="display" element="h1">Phonewords Generator</Heading>
      <PhonewordForm />
    </MainView>
  )
}
