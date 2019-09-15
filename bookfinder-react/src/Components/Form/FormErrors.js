import React from 'react';

export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <span class="text-white" key={i}>{fieldName} {formErrors[fieldName]}</span>
        )        
      } else {
        return '';
      }
    })}
  </div>