import './index.css'

const ThumbnailImage = props => {
  const {eachImage, onImageSelect} = props
  const {thumbnailUrl, id} = eachImage
  const onImageClick = () => {
    onImageSelect(id)
  }
  return (
    <li>
      <button onClick={onImageClick} className="thumbnail-btn" type="button">
        <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailImage
