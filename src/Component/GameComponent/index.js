import TabComponent from '../TabComponent'
import ThumbnailImage from '../ThumbnailImage'
import './index.css'

const GameComponent = props => {
  const {
    imagesList,
    tabsList,
    selectedTabId,
    onTabChange,
    onImageSelect,
    randomImageId,
  } = props
  const filteredImageList = imagesList.filter(
    imageselected => imageselected.category === selectedTabId,
  )

  console.log(randomImageId)

  const {imageUrl} = imagesList.filter(
    everyImage => everyImage.id === randomImageId,
  )[0]

  return (
    <div className="game-component-container">
      <img src={imageUrl} alt="match" className="main-image" />
      <ul className="tab-list-item">
        {tabsList.map(eachTabDetails => (
          <TabComponent
            onTabChange={onTabChange}
            key={eachTabDetails.tabId}
            eachTabDetails={eachTabDetails}
            selectedTabId={selectedTabId}
          />
        ))}
      </ul>
      <ul className="thumbnail-image-container">
        {filteredImageList.map(eachImage => (
          <ThumbnailImage
            onImageSelect={onImageSelect}
            key={eachImage.id}
            eachImage={eachImage}
          />
        ))}
      </ul>
    </div>
  )
}

export default GameComponent
