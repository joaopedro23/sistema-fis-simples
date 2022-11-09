import React from 'react'
import ResumeItem from '../ResumeItem'
import * as C from './styled'

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from "react-icons/fa"




const Resume = ({icome, expense, total}) => {
  return (
    <C.Container>
      <ResumeItem  title="Entradas" Icon={FaRegArrowAltCircleUp} value={icome}/>
      <ResumeItem  title="saidas" Icon={FaRegArrowAltCircleDown} value={expense} />
      <ResumeItem title="total" Icon={FaDollarSign} value={total} />
    </C.Container>
  )
}

export default Resume
