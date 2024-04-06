import React from 'react'
import DeleteIcon from '../../../../../share/svg/Delete';

const CardContainer = ({children}) => {
  return (
    <div className="flex rounded-md h-max bg-white w-full mt-6">
      <div className="py-5 w-full">{children}</div>
      <div className='flex items-center justify-center w-10 bg-red-50 rounded-r-md'><DeleteIcon/></div>
    </div>
  );
}

export default CardContainer