import React from 'react'
import ClassComp from './ClassComp'

export default function FuncComp(property) {
    console.log(property);
    return (
        <div>
            <h1>FuncComp  компонент - функция(в параметр передан массив names=[{property.names.join(',')}]) </h1> 
             
        </div>
    )
}
