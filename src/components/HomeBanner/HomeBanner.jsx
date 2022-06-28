import homeBanner from'../../assets/images/home-banner.jpg'

const Banner = () => {

  const homePageBannerText = "Chez vous, partout et ailleurs"

  return (
  <div className='banner'>
    <img className='banner-img' src={homeBanner} alt="bannière" />
    <h3 className='banner-title'>{homePageBannerText}</h3>
    <div className='banner-filter'></div>
  </div>
  )
}

export default Banner;