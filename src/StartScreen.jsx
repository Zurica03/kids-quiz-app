import React, { useState } from 'react'
import './StartScree.css'
import Categories from './Categories'

const StartScreen = ({onstart}) => {

  return (
    <div className='MainCard'>
        <div className='Card'>
            <h2 className='heading'>Are You Ready To Play?</h2>
            <button className='glow-button' onClick={onstart}>Yes! Let's Go</button>
        </div>
    </div>
  )
}

export default StartScreen