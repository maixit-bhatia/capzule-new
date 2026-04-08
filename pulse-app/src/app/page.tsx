'use client';
import { useState, useRef, useEffect, useCallback } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import RightPanel from '../components/RightPanel'
import Feed from '../components/Feed'
import FriendsPanel from '../components/FriendsPanel'
import styles from './page.module.css'

interface Track {
  id: number
  title: string
  artist: string
  duration: number
  coverUrl: string
  frequency: number
  waveformColors: string[]
  waveformPattern: number[]
}

const tracks: Track[] = [
  {
    id: 1,
    title: 'Deep Meditation Sounds',
    artist: 'Chloe Sterling',
    duration: 164,
    coverUrl: 'https://i.pravatar.cc/150?u=1',
    frequency: 440,
    waveformColors: ['#84cc16', '#65a30d'],
    waveformPattern: [8, 12, 20, 10, 24, 18, 12, 6, 10, 16, 22, 24, 18, 12, 6, 8, 18, 24, 12, 6, 10, 16, 22, 18, 12, 8, 24, 16, 10, 6, 12]
  },
  {
    id: 3,
    title: 'Beatbox Session',
    artist: 'Dave_B',
    duration: 75,
    coverUrl: 'https://i.pravatar.cc/150?u=4',
    frequency: 220,
    waveformColors: ['#9b51e0', '#7c3aed'],
    waveformPattern: [24, 18, 32, 24, 18, 34, 12, 6, 12, 24, 12, 28, 16, 12, 18, 24, 32, 18, 12, 8, 16, 28, 12, 6, 18, 32, 24, 10, 14, 22, 28, 16]
  }
]

export default function Home() {
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)
  const [friendsOpen, setFriendsOpen] = useState(false)
  const [activeTrackId, setActiveTrackId] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const audioContextRef = useRef<AudioContext | null>(null)
  const oscillatorRef = useRef<OscillatorNode | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const activeTrack = tracks.find(t => t.id === activeTrackId)
  const duration = activeTrack?.duration || 164

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const stopAudio = useCallback(() => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop()
      oscillatorRef.current.disconnect()
      oscillatorRef.current = null
    }
    if (gainNodeRef.current) {
      gainNodeRef.current.disconnect()
      gainNodeRef.current = null
    }
    if (audioContextRef.current) {
      audioContextRef.current.close()
      audioContextRef.current = null
    }
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const playTrack = useCallback((trackId: number) => {
    stopAudio()
    
    const track = tracks.find(t => t.id === trackId)
    if (!track) return

    setActiveTrackId(trackId)
    setCurrentTime(0)
    setIsPlaying(true)

    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    audioContextRef.current = new AudioContextClass()
    const ctx = audioContextRef.current
    
    oscillatorRef.current = ctx.createOscillator()
    gainNodeRef.current = ctx.createGain()
    
    oscillatorRef.current.type = 'sine'
    oscillatorRef.current.frequency.setValueAtTime(track.frequency, ctx.currentTime)
    gainNodeRef.current.gain.setValueAtTime(0.25, ctx.currentTime)
    
    oscillatorRef.current.connect(gainNodeRef.current)
    gainNodeRef.current.connect(ctx.destination)
    oscillatorRef.current.start()

    timerRef.current = setInterval(() => {
      setCurrentTime(prev => {
        if (prev >= track.duration) {
          stopAudio()
          setIsPlaying(false)
          return 0
        }
        return prev + 1
      })
    }, 1000)
  }, [stopAudio])

  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      stopAudio()
      setIsPlaying(false)
    } else if (activeTrackId) {
      playTrack(activeTrackId)
    }
  }, [isPlaying, activeTrackId, playTrack, stopAudio])

  const handleTrackPlay = useCallback((trackId: number) => {
    if (activeTrackId === trackId && isPlaying) {
      stopAudio()
      setIsPlaying(false)
    } else {
      playTrack(trackId)
    }
  }, [activeTrackId, isPlaying, playTrack, stopAudio])

  useEffect(() => {
    return () => stopAudio()
  }, [stopAudio])

  return (
    <div className={styles.appContainer}>
      <Sidebar isOpen={leftOpen} onPulseClick={() => setLeftOpen(false)} />
      
      {leftOpen && (
        <div className={styles.mobileOverlay} onClick={() => setLeftOpen(false)}>
          <div className={styles.mobilePanel} onClick={(e) => e.stopPropagation()}>
            <Sidebar isOpen={true} onPulseClick={() => setLeftOpen(false)} />
          </div>
        </div>
      )}
      
      {rightOpen && (
        <div className={styles.mobileOverlay} onClick={() => setRightOpen(false)}>
          <div className={styles.mobilePanelRight} onClick={(e) => e.stopPropagation()}>
            <RightPanel />
          </div>
        </div>
      )}
      
      {friendsOpen && (
        <div className={styles.mobileOverlay} onClick={() => setFriendsOpen(false)}>
          <div className={styles.mobilePanelRight} onClick={(e) => e.stopPropagation()}>
            <FriendsPanel onClose={() => setFriendsOpen(false)} />
          </div>
        </div>
      )}
      
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.contentWrapper}>
          <main className={styles.feedContainer}>
            <Feed 
              tracks={tracks}
              activeTrackId={activeTrackId}
              isPlaying={isPlaying}
              currentTime={currentTime}
              onTrackPlay={handleTrackPlay}
            >
              <div className={styles.mobileToggle}>
                <button 
                  className={`${styles.toggleBtn} ${leftOpen ? styles.active : ''}`} 
                  onClick={() => setLeftOpen(!leftOpen)}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                  <span>Menu</span>
                </button>
                <button 
                  className={`${styles.toggleBtn} ${rightOpen ? styles.active : ''}`} 
                  onClick={() => setRightOpen(!rightOpen)}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/>
                  </svg>
                  <span>Rooms</span>
                </button>
                <button 
                  className={`${styles.toggleBtn} ${friendsOpen ? styles.active : ''}`} 
                  onClick={() => setFriendsOpen(!friendsOpen)}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span>Friends</span>
                </button>
              </div>
            </Feed>

            <div className={styles.globalPlayer}>
              <div className={styles.playerInfo}>
                <img src={activeTrack?.coverUrl || 'https://i.pravatar.cc/150?u=1'} alt="Playing" className={styles.playerThumb} />
                <div className={styles.playerText}>
                  <span className={styles.playerTitle}>{activeTrack?.title || 'Select a track'}</span>
                  <span className={styles.playerSubtitle}>{activeTrack?.artist || 'Tap play on a post'}</span>
                </div>
              </div>

              <div className={styles.playerControls}>
                <button className={styles.playerBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="19 20 9 12 19 4 19 20" /><line x1="5" y1="19" x2="5" y2="5" /></svg></button>
                <button 
                  className={`${styles.playerBtn} ${styles.playerPlay}`}
                  onClick={togglePlayPause}
                  disabled={!activeTrackId}
                >
                  {isPlaying ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                  )}
                </button>
                <button className={styles.playerBtn}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" y1="5" x2="19" y2="19" /></svg></button>
              </div>

              <div className={styles.playerProgress}>
                <span className={styles.playerTime}>{formatTime(currentTime)}</span>
                <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: activeTrack ? `${(currentTime / activeTrack.duration) * 100}%` : '0%' }}></div></div>
                <span className={styles.playerTime}>{activeTrack ? formatTime(activeTrack.duration) : '00:00'}</span>
              </div>

              <div className={styles.playerActions}>
                <button className={styles.playerBtn}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg></button>
                <button className={styles.playerBtn}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></button>
              </div>
            </div>
          </main>
          <RightPanel isOpen={rightOpen} onClose={() => setRightOpen(false)} />
          <FriendsPanel isOpen={friendsOpen} />
        </div>
      </div>
    </div>
  )
}