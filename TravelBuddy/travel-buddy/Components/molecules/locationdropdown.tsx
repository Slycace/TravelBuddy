import React from "react";
import {
 Select
} from '@chakra-ui/react'
import { FaRegListAlt } from 'react-icons/fa'



export default function LocationDrownDown() {

  return (
    <Select placeholder='Select City' w={'35%'}>
    <option value='option1'>Option 1</option>
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
    </Select>
  )
}