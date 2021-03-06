import * as React from 'react'
import styled from "styled-components"

import Heading from "@kiwicom/orbit-components/lib/Heading";
import Separator from "@kiwicom/orbit-components/lib/Separator";
import Alert from "@kiwicom/orbit-components/lib/Alert";
import { ClipLoader } from "react-spinners";

interface PhonewordListProps {
    number: string,
    data: PhoneWordResponse,
    isSubmitting: boolean
}

const Number = styled.span`
  border: ${props => props.number.length ? '1px solid #D3D3D3' : 'none'}
  border-radius: 3px
  padding: 0rem 0.3rem 0.3rem 0.3rem
  color: #666666
  cursor: default
`

const WordTag = styled.div`
  font-size: 14px
  margin: 0.1rem 0.1rem
  cursor: default
  display: inline-block
  border: 1px solid
  padding: 6px 8px
  border-radius: 3px
  color: white
  background: #666666
  font-weight: 500
`

export default ({number, data, isSubmitting} : PhonewordListProps) => {
  const {success, phonewords, error} = data

  //Different alerts for errors on the request or no words
  const Alerts = () => {
    if(number){
      if(!phonewords.length) return <Alert title={null} icon>There are no words matching your request</Alert>
      if(!success) return <Alert type="critical" title={null} icon>{error ? error : 'Unknown Error'}</Alert>     
    }
    return null
  }

  return (
    <div>
        <Heading dataTest='heading-phoneword-list' element="h2" type="title2" spaceAfter="medium">
          {number ? 
            <React.Fragment>List of Phone Words for the number: <Number data-test='phoneword-number' number={number}>{number}</Number></React.Fragment> : 
            <React.Fragment>Submit a Phone Number to display the list of its possible phone words</React.Fragment>
          }
        </Heading>
        <Separator />
        {isSubmitting ? 
          <ClipLoader size={20} color={'grey'} /> : 
          <React.Fragment> 
            {phonewords.map(word => <WordTag data-test={`word-tag-${word}`} key={word}>{word}</WordTag>)}
            <Alerts/>
          </React.Fragment>
        }
    </div>
  )
}
