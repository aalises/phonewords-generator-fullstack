import React, { PureComponent } from 'react';
import styled from "styled-components";
import PhonewordForm from "./components/PhonewordForm";

import Heading from "@kiwicom/orbit-components/lib/Heading";

const MainView = styled.div`
  padding: 3rem 3rem
  min-height: 100%
`
interface MainState {
  number: string
}

export default class Main extends PureComponent<MainState,any>{

  state = {
    number: ''
  }

  handleSubmit(values){
    console.log(values);
  }

  render(){
    return (
      <MainView>
        <Heading spaceAfter="largest" type="display" element="h1">Phonewords Generator</Heading>
        <PhonewordForm handleSubmit={this.handleSubmit} />
      </MainView>
    )
  }
}
