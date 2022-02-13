// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, getOnlyOne} = props
  const {suggestion} = item

  const getValue = () => {
    getOnlyOne(suggestion)
  }

  return (
    <li className="list-item">
      <h1 className="list-name">{suggestion}</h1>
      <button type="button" className="button" onClick={getValue}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="image2"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
