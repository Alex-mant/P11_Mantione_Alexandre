import aboutBanner from '../../assets/images/about-banner.jpg'

const Banner = ({page}) => {

  return(
    <div className={page === "about" ? "banner banner-about-responsive ": "banner"}>
      <img className='banner-img' src={aboutBanner} alt="bannière" />
    <div className='banner-filter'></div>
  </div>
  )

}

export default Banner;
