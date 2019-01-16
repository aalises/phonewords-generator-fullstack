import React, { PureComponent } from 'react';
import styled from "styled-components";
import PhonewordForm from "./components/PhonewordForm";
import PhonewordList from "./components/PhonewordList";
import Heading from "@kiwicom/orbit-components/lib/Heading";

const MainView = styled.div`
  padding: 3rem 3rem
  min-height: 100%
  display: flex

  @media (max-width: 768px) {
    flex-direction: column
  }

`

const Column = styled.div`
  flex-direction: column
  width: ${props => props.half ? '50%' : 'auto'}

  @media (max-width: 768px) {
    padding-bottom: 3rem
  }

`

interface MainState {
  number: string
}

export default class Main extends PureComponent<MainState,any>{

  state = {
    number: ''
  }

  handleSubmit(values){
    this.setState({number: values.number});
  }

  render(){
    return (
      <MainView>
        <Column half>
          <Heading spaceAfter="largest" type="display" element="h1">Phonewords Generator</Heading>
          <PhonewordForm onSubmit={(values) => this.handleSubmit(values)} />
        </Column>
        <Column half>
          <PhonewordList number={this.state.number} />
        </Column>
      </MainView>
    )
  }
}
