import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function SearchDateComponent() {
    const today = new Date()
    const [selectedDate, setSelectedDate] = useState(today)
    return (
        <>
            <DatePicker 
            selected={selectedDate} 
            onChange={date => setSelectedDate(date)}/>
        </>
    )
}
