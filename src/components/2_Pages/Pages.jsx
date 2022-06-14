import About from "./About/About"
import Home from "./Home/Home"

const Pages = () => {

  const currentUrl = window.location.href.split("/")[3];
  console.log(currentUrl);

  return (
    currentUrl === 'About' ? <About /> : <Home />
  )

}

export default Pages;
