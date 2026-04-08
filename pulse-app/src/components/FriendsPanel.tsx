'use client';
import { useState } from 'react';
import styles from './FriendsPanel.module.css';

interface FriendsPanelProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function FriendsPanel({ isOpen, onClose }: FriendsPanelProps) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('Friends');

  const mockUsers = [
    { name: 'Chloe Sterling', desc: 'In Room: Chill Lofi', online: true },
    { name: 'Marcus T', desc: 'Audio Engineer', online: true },
    { name: 'Sarah Ventura', desc: 'Voice Actor', online: true },
    { name: 'Dave_B', desc: 'Offline • 2h ago', online: false },
    { name: 'Liam_B', desc: 'Product Designer', online: false }
  ];

  const mockCalls = [
    { name: 'Sarah Ventura', desc: 'Missed Call • 2h ago', imgIdx: 2 },
    { name: 'Marcus T', desc: 'Incoming Call • Yesterday', imgIdx: 1 }
  ];

  const mockRequests = [
    { name: 'Alex W', desc: 'Wants to be friends', imgIdx: 5 },
    { name: 'Jessica_09', desc: 'Wants to be friends', imgIdx: 8 }
  ];

  if (!expanded && isOpen === false) {
    return (
      <div className={styles.panelWrapper}>
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
      </div>
    );
  }

  return (
    <div className={`${styles.expanded} ${styles.open}`}>
      <div className={styles.panelHeader}>
        <span className={styles.panelTitle}>Network</span>
        <button className={styles.closeBtn} onClick={onClose || (() => setExpanded(false))}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      <div className={styles.tabs}>
        <button className={`${styles.tab} ${activeTab === 'Friends' ? styles.active : ''}`} onClick={() => setActiveTab('Friends')}>Friends</button>
        <button className={`${styles.tab} ${activeTab === 'Recent Calls' ? styles.active : ''}`} onClick={() => setActiveTab('Recent Calls')}>Recent Calls</button>
        <button className={`${styles.tab} ${activeTab === 'Request' ? styles.active : ''}`} onClick={() => setActiveTab('Request')}>Request</button>
      </div>

      <div className={styles.searchContainer}>
        <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" className={styles.searchInput} placeholder="Search friends..." />
      </div>

      {activeTab === 'Friends' && (
        <>
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
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'Recent Calls' && (
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Call History</span>
          {mockCalls.map((u, i) => (
            <div key={u.name} className={styles.userItem}>
              <div className={styles.userInfo}>
                <div className={styles.userAvatar}>
                  <img src={`https://i.pravatar.cc/150?u=10${u.imgIdx}`} alt={u.name} style={{width:'100%', height:'100%', borderRadius:'50%', objectFit:'cover'}} />
                </div>
                <div className={styles.userText}>
                  <span className={styles.userName}>{u.name}</span>
                  <span className={styles.userDesc} style={{color: u.desc.includes('Missed') ? '#ef4444' : 'var(--text-muted)'}}>{u.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Request' && (
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Friend Requests</span>
          {mockRequests.map((u, i) => (
            <div key={u.name} className={styles.userItem}>
              <div className={styles.userInfo}>
                <div className={styles.userAvatar}>
                  <img src={`https://i.pravatar.cc/150?u=10${u.imgIdx}`} alt={u.name} style={{width:'100%', height:'100%', borderRadius:'50%', objectFit:'cover'}} />
                </div>
                <div className={styles.userText}>
                  <span className={styles.userName}>{u.name}</span>
                  <span className={styles.userDesc}>{u.desc}</span>
                </div>
              </div>
              <div style={{display:'flex', gap:'8px', zIndex: 10}}>
                <button style={{padding:'4px 10px', background:'var(--primary-color)', color:'white', border:'none', borderRadius:'14px', fontSize:'11px', fontWeight:600, cursor:'pointer'}}>Accept</button>
                <button style={{padding:'4px 10px', background:'var(--border-color)', color:'var(--text-main)', border:'none', borderRadius:'14px', fontSize:'11px', fontWeight:600, cursor:'pointer'}}>Ignore</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}