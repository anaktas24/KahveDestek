import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import NewsletterBox from '../components/NewsletterBox'
import OurPolicy from '../components/OurPolicy'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <OurPolicy/>
      <NewsletterBox/>
      <Footer/>
    </div>
  )
}

export default Home