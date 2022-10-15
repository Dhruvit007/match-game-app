import './index.css'

const TabComponent = props => {
  const {eachTabDetails, onTabChange, selectedTabId} = props
  const {displayText, tabId} = eachTabDetails

  const selectedClsss = selectedTabId === tabId ? 'selected-tab' : ''

  const onTabSelect = () => {
    onTabChange(tabId)
  }

  return (
    <li className="tab-list-item">
      <button
        type="button"
        onClick={onTabSelect}
        className={`tab-item ${selectedClsss}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabComponent
