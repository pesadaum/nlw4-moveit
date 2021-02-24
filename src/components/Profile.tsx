import { Profiler } from "react"

import styles from '../styles/components/profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer} >
      <img src="https://github.com/pesadaum.png" alt="Usuário Alef Santos" />
      <div>
        <strong>Alef Santos</strong>
        <p>
          <img src="icons/level.svg" alt="ícone de subida de nível" />
          Level 1
        </p>
      </div>
    </div>
  )
}