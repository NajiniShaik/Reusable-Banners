import './index.css'

const BannerCardItems = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={className}>
      <div>
        <h1 className="title">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItems
