import styles from '../styles/components/xpBar.module.css'

export function XpBar() {
  return (
    <header className={styles.xpBar} >
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <span className={styles.currentXp} style={{ left: '50%' }} > 300 xp </span>
      </div>
      <span>600 xp</span>
    </header>
  )
}