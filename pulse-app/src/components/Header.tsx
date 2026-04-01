'use client';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
<<<<<<< HEAD
    // User requested to keep light theme default, removing auto OS check
=======
    // Check initial preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
>>>>>>> c01a3d28b1e77a718d42b9935372847a3bb5c880
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className={styles.header}>
      {/* LEFT: Branding */}
      <div className={styles.leftSection}>
        <div className={styles.brandName}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          Pulse
        </div>
      </div>

      {/* CENTER: Search */}
      <div className={styles.centerSection}>
        <div className={styles.searchContainer}>
          <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" placeholder="Search voices, tags, people..." className={styles.searchInput} />
          <button className={styles.searchMicBtn} aria-label="Microphone Voice Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>
          </button>
        </div>
      </div>

      {/* RIGHT: Notifications, Messages, Theme, Profile */}
      <div className={styles.rightSection}>
        <button className={styles.iconBtn} aria-label="Notifications" style={{position:'relative'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span style={{position:'absolute', top:'6px', right:'8px', width:'8px', height:'8px', backgroundColor:'#EF4444', borderRadius:'50%'}}></span>
        </button>
        <button className={styles.iconBtn} aria-label="Messages">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </button>
        
        {/* THEME TOGGLE */}
        <button className={styles.iconBtn} onClick={toggleTheme} aria-label="Toggle Theme" title="Toggle Light/Dark Theme">
          {theme === 'light' ? (
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          ) : (
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line></svg>
          )}
        </button>

        <div className={styles.profileSection}>
          <div style={{width:'40px', height:'40px', borderRadius:'50%', backgroundColor:'#d1d5db', overflow:'hidden'}}>
             <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Profile avatar" style={{width:'100%', height:'100%', objectFit:'cover'}} />
          </div>
        </div>
      </div>
    </header>
  )
}
