// Code Keypad Component Here
// your ImageSlider code here!
import React from 'react'

export default class Keypad extends React.Component{

  password = () => console.log('Entering password...')

  render(){
    return(
      <input type="password" onkeyUp={this.password} />
    )
  }
}
