import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const facilities = () => {
  return (
    <div>
      <Hero heading='Nossas Facilidades' message='Veja como podemos facilitar o dia a dia da sua empresa' />
      <Portfolio />
    </div>
  )
}

export default facilities