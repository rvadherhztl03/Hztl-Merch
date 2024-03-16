import { FunctionComponent } from 'react'
import { useOcSelector } from '../ordercloud/redux/ocStore'
import styles from '../styles/Home.module.css'
import Shoe from '../components/Shoe';
import HeroBanner from '../components/HeroBanner';

const Home: FunctionComponent = () => {
  const user = useOcSelector((s) => s.ocUser.user)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
<HeroBanner />
<Shoe />
        {user && (
          <pre className={styles.code}>
            <code>{JSON.stringify(user, null, 2)}</code>
          </pre>
        )}
      </main>
    </div>
  )
}

export default Home
