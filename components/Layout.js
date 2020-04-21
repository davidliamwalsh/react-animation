import React, { Component } from 'react'
import Actions from './Actions'
import Footer from '../components/Footer'

class Layout extends Component {
  render () {
    return <div>
      <Actions />
      <Footer />
    </div>
  }
}

export default Layout