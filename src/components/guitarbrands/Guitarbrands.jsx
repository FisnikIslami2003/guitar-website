import React from 'react'
import'./Guitarbrands.scss'
import { Topcontent } from './topcontent'
import { Bestbrands } from './bestbrands'
import { Whysection } from './whysection'
import { Browsesection } from './browsesection'
import { Footer } from './footer'

export const Guitarbrands = () => {
  return (
    <div>
      <Topcontent/>
            <Bestbrands/>
            <Whysection/>
            <Browsesection/>
            <Footer/>

    </div>
  )
}
