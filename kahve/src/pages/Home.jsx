import Hero from '../components/Hero'
//import LatestCollection from '../components/LatestCollection'
import NewsletterBox from '../components/NewsletterBox'
import OurPolicy from '../components/OurPolicy'
import Presentation from '../components/Presentation'
import Sustainability from '../components/Sustainability'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Presentation/>
      <Sustainability/>
      {/*<LatestCollection/>*/}
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home