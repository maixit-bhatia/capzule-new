import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import RightPanel from '../components/RightPanel'
import Feed from '../components/Feed'
import FriendsPanel from '../components/FriendsPanel'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.contentWrapper}>
          <main className={styles.feedContainer}>
            <Feed />
<<<<<<< HEAD

            {/* Bottom Mini Audio Player (Global) */}
            <div className={styles.globalPlayer}>
              <div className={styles.playerInfo}>
                <img src="https://i.pravatar.cc/150?u=1" alt="Playing" className={styles.playerThumb} />
                <div className={styles.playerText}>
                  <span className={styles.playerTitle}>Deep Meditation Sounds</span>
                  <span className={styles.playerSubtitle}>Chloe Sterling</span>
                </div>
              </div>

              <div className={styles.playerControls}>
                <button className={styles.playerBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="19 20 9 12 19 4 19 20" /><line x1="5" y1="19" x2="5" y2="5" /></svg></button>
                <button className={`${styles.playerBtn} ${styles.playerPlay}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg></button>
                <button className={styles.playerBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" y1="5" x2="19" y2="19" /></svg></button>
              </div>

              <div className={styles.playerProgress}>
                <span className={styles.playerTime}>01:12</span>
                <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: '40%' }}></div></div>
                <span className={styles.playerTime}>02:44</span>
              </div>

              <div className={styles.playerActions}>
                <button className={styles.playerBtn}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg></button>
                <button className={styles.playerBtn}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></button>
              </div>
            </div>
=======
>>>>>>> c01a3d28b1e77a718d42b9935372847a3bb5c880
          </main>
          <RightPanel />
          <FriendsPanel />
        </div>

<<<<<<< HEAD
=======
        {/* Bottom Mini Audio Player (Global) */}
        <div className={styles.globalPlayer}>
          <div className={styles.playerInfo}>
            <img src="https://i.pravatar.cc/150?u=1" alt="Playing" className={styles.playerThumb} />
            <div className={styles.playerText}>
              <span className={styles.playerTitle}>Deep Meditation Sounds</span>
              <span className={styles.playerSubtitle}>Chloe Sterling</span>
            </div>
          </div>

          <div className={styles.playerControls}>
            <button className={styles.playerBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="19 20 9 12 19 4 19 20" /><line x1="5" y1="19" x2="5" y2="5" /></svg></button>
            <button className={`${styles.playerBtn} ${styles.playerPlay}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg></button>
            <button className={styles.playerBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" y1="5" x2="19" y2="19" /></svg></button>
          </div>

          <div className={styles.playerProgress}>
            <span className={styles.playerTime}>01:12</span>
            <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: '40%' }}></div></div>
            <span className={styles.playerTime}>02:44</span>
          </div>

          <div className={styles.playerActions}>
            <button className={styles.playerBtn}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg></button>
            <button className={styles.playerBtn}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></button>
          </div>
        </div>

>>>>>>> c01a3d28b1e77a718d42b9935372847a3bb5c880
      </div>
    </div>
  )
}
