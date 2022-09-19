
import type { NextPage } from 'next'
import NavBar from '../components/navBar'
import Faq from '../components/FaqSection/Faq'


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Example to add an icon in your component
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
  return (
<>
    <NavBar></NavBar>
    <Faq/>

</>
  )
}

export default Home;
