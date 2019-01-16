import * as React from 'react'

interface PhonewordListProps {
    number: string,
    list: string[]
}

export default ({number, list} : PhonewordListProps) => {
  return (
    <div>
        Placeholder for the list related to the number: {number}    
    </div>
  )
}
