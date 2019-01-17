import React, { Fragment } from 'react'
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
  padding: 0.3rem
  color: #666666
  cursor: default
`

const WordTag = styled.div`
  font-size: 14px
  margin: 1rem 0.1rem
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
  const {success, words, error} = data

  //Different alerts for errors on the request or no words
  const Alerts = () => {
    if(number){
      if(!words.length) return <Alert title={null} icon>There are no words matching your request</Alert>
      if(!success) return <Alert type="critical" title={null} icon>{error ? error : 'Unknown Error'}</Alert>     
    }
    return null
  }

  return (
    <div>
        <Heading element="h2" type="title2" spaceAfter="medium">
          {number ? 
            <Fragment>List of Phone Words for the number: <Number number={number}>{number}</Number></Fragment> : 
            <Fragment>Submit a Phone Number to display the list of its possible phone words</Fragment>
          }
        </Heading>
        <Separator />
        {isSubmitting ? 
          <ClipLoader size={20} color={'grey'} /> : 
          <Fragment> 
            {words.map(word => <WordTag key={word}>{word}</WordTag>)}
            <Alerts/>
          </Fragment>
        }
    </div>
  )
}
