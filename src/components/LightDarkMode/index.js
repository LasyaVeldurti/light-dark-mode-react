// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickChangeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
    console.log(this.state)
  }

  render() {
    const {isDarkMode} = this.state
    const modelClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`container ${modelClassName}`}>
          <h1>Click To Change Mode</h1>
          <button
            className="mode-button"
            type="button"
            onClick={this.onClickChangeMode}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
