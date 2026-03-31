'use client';
import { useState } from 'react';
import styles from './FriendsPanel.module.css';

export default function FriendsPanel() {
  const [expanded, setExpanded] = useState(false);

  const mockUsers = [
    { name: 'Chloe Sterling', desc: 'In Room: Chill Lofi', online: true },
    { name: 'Marcus T', desc: 'Audio Engineer', online: true },
    { name: 'Sarah Ventura', desc: 'Voice Actor', online: true },
    { name: 'Dave_B', desc: 'Offline • 2h ago', online: false },
    { name: 'Liam_B', desc: 'Product Designer', online: false }
  ];

  if (!expanded) {
    return (
      <div className={styles.collapsed} onClick={() => setExpanded(true)} title="Expand Friends Panel">
        <button className={styles.expandBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        {mockUsers.filter(u => u.online).map((u, i) => (
          <div key={u.name} className={styles.avatarDot}>
            <img src={`https://i.pravatar.cc/150?u=10${i}`} alt={u.name} />
            <div className={styles.onlineDot} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.expanded}>
      <div className={styles.panelHeader}>
        <span className={styles.panelTitle}>Network</span>
        <button className={styles.closeBtn} onClick={() => setExpanded(false)}>
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.active}`}>Friends</button>
        <button className={styles.tab}>Recent Calls</button>
        <button className={styles.tab}>Request</button>
      </div>

      <div className={styles.searchContainer}>
        <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" className={styles.searchInput} placeholder="Search friends..." />
      </div>

      <div className={styles.section}>
        <span className={styles.sectionTitle}>Online Users</span>
        {mockUsers.filter(u => u.online).map((u, i) => (
          <div key={u.name} className={styles.userItem}>
            <div className={styles.userInfo}>
              <div className={styles.userAvatar}>
                <img src={`https://i.pravatar.cc/150?u=10${i}`} alt={u.name} style={{width:'100%', height:'100%', borderRadius:'50%', objectFit:'cover'}} />
                <div className={styles.onlineDot} style={{right:'-2px', bottom:'-2px'}} />
              </div>
              <div className={styles.userText}>
                <span className={styles.userName}>{u.name}</span>
                <span className={styles.userDesc}>{u.desc}</span>
              </div>
            </div>
            
            <div className={styles.hoverActions}>
              <button className={styles.actionBtn} title="Message"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></button>
              <button className={styles.actionBtn} title="Audio Call"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></button>
              <button className={styles.actionBtn} title="Video Call"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <span className={styles.sectionTitle}>Recent Users</span>
        {mockUsers.filter(u => !u.online).map((u, i) => (
          <div key={u.name} className={styles.userItem}>
            <div className={styles.userInfo}>
              <div className={styles.userAvatar}>
                <img src={`https://i.pravatar.cc/150?u=20${i}`} alt={u.name} style={{width:'100%', height:'100%', borderRadius:'50%', objectFit:'cover', filter: 'grayscale(0.5)'}} />
              </div>
              <div className={styles.userText}>
                <span className={styles.userName}>{u.name}</span>
                <span className={styles.userDesc}>{u.desc}</span>
              </div>
            </div>
            
            <div className={styles.hoverActions}>
              <button className={styles.actionBtn} title="Message"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></button>
              <button className={styles.actionBtn} title="Audio Call"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></button>
              <button className={styles.actionBtn} title="Video Call"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
