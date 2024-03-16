import { FunctionComponent, useEffect } from 'react'
// import { useOcSelector } from '../ordercloud/redux/ocStore'
// import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import Video from '../components/Video'
import Description from '../components/Description'
import Shoe from '../components/Shoe'
import Design from '../components/Design'
import Benefits from '../components/Benefits'
import TeamMembers from '../components/TeamMembers'
import UserReviews from '../components/UserReviews'
import StandOut from '../components/StandOut'
import Footer from '../components/Footer'
import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';

const Home: FunctionComponent = () => {
  // const user = useOcSelector((s) => s.ocUser.user)

useEffect(() => {
  let scroll: LocomotiveScroll;
  import("locomotive-scroll").then((locomotiveModule) => {
    scroll = new locomotiveModule.default();
  });
  return () => {
    if (scroll) scroll.destroy();
  };
});

  return (
    <>
      <HeroBanner />
      <Video />
      <Description />
      <Design />
      <Shoe />
      <Benefits />
      <TeamMembers />
      <UserReviews />
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
