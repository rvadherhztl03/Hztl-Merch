import { FunctionComponent } from 'react'
// import { useOcSelector } from '../ordercloud/redux/ocStore'
// import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import Description from '../components/Description'
import Shoe from '../components/Shoe'
import Design from '../components/Design'
import Benefits from '../components/Benefits'
import TeamMembers from '../components/TeamMembers'
import StandOut from '../components/StandOut'
import Footer from '../components/Footer'
import React from 'react'

const Home: FunctionComponent = () => {
  // const user = useOcSelector((s) => s.ocUser.user)

  return (
    <>
      <HeroBanner />
      <Description />
      <Design />
      <Shoe />
      <Benefits />
      <TeamMembers />
      <StandOut />
      <Footer />
      {/* {user && (
        <pre className={styles.code}>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      )} */}
    </>
  )
}

export default Home
