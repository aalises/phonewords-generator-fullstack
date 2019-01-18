import React from 'react'

const numbers = ['1','2','3', '4','5','6', '7','8','9', 'Back','0','Clear'];


const handleClick = (el : string, setValues : function, resetForm: function) : void => {
  if(el === 'Clear'){
    resetForm()
  }else{
    setValues(el, el === "Back" ? true : false);
  }
}

interface PhoneKeyboardProps {
  setValues: (string, boolean) => void,
  resetForm: void => void
}

export default ({setValues, resetForm} : PhoneKeyboardProps) => {
    return (
      <React.Fragment>
        {numbers.map(el => 
          <button type="button" onClick={() => handleClick(el, setValues, resetForm)} key={el}>{el}</button>
        )}
      </React.Fragment>
    )
  }
}
