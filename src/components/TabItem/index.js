// Write your code here
import './index.css'

const TabItem = props => {
  const {tabList, updateActiveTabId, isActiveTabId} = props
  const {displayText, tabId} = tabList

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }
  const tabItemClassName = isActiveTabId ? 'tab-heading active' : 'tab-heading'
  return (
    <li className="tab">
      <button
        type="button"
        className={tabItemClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
