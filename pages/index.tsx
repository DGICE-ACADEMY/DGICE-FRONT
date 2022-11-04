
import type { NextPage } from 'next'
import ErrorPage from '../components/errorPage'
import LoadingPage from '../components/LoadingPage'
import { NavBar } from '../components/NavBar'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Example to add an icon in your component
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
  return (
    <>
      <NavBar></NavBar>
      {/* <ErrorPage></ErrorPage> */}
      <LoadingPage></LoadingPage>
    </>
  )
}

export default Home;
