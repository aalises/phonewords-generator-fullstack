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
    width: 90%
  }

`

interface MainState {
  number: string,
  data: PhoneWordResponse,
  isSubmitting: boolean
}

export default class Main extends PureComponent<any, MainState>{

  state = {
    number: '',
    data: {
      success: false,
      words: [],
      error: ''
    },
    isSubmitting: false
  }

  handleSubmit(values){
    console.log(values.number, this.state.number)
    if(values.number === this.state.number) return; //Do not submit the same number again
    this.setState({number: values.number, isSubmitting: true});
    //Simulate API call (For now...)
    setTimeout(() => this.setState({data: {...this.state.data, success: true, words: ['hey']}, isSubmitting: false}), 1000)
  }

  render(){
    return (
      <MainView>
        <Column half>
          <Heading spaceAfter="largest" type="display" element="h1">Phonewords Generator</Heading>
          <PhonewordForm isSubmitting={this.state.isSubmitting} onSubmit={(values) => this.handleSubmit(values)} />
        </Column>
        <Column half>
          <PhonewordList {...this.state} />
        </Column>
      </MainView>
    )
  }
}
