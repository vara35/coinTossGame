// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  getOnlyOne = value => {
    this.setState({searchInput: value})
  }

  getUserInput = event => {
    const value = event.target.value.toLowerCase()
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachOne =>
      eachOne.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div className="bg-container1">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="image1"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-bar"
              value={searchInput}
              onChange={this.getUserInput}
            />
          </div>
          <ul className="ul-list">
            {searchResult.map(eachOne => (
              <SuggestionItem
                item={eachOne}
                key={eachOne.id}
                getOnlyOne={this.getOnlyOne}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
