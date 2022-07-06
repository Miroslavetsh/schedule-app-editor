import React from 'react'

import styles from './Styles.module.scss'

type PropTypes = {
  frontContent: string
  backContent: string
  onClick: () => void
}

const FlipButton: React.FC<PropTypes> = ({ onClick, frontContent, backContent }) => {
  const frontStyles = [styles.button, styles.front]
  const backStyles = [styles.button, styles.back]

  return (
    <div className={styles.container}>
      <div className={styles.flipper}>
        <button className={frontStyles.join(' ')} onClick={onClick}>
          {frontContent}
        </button>

        <button className={backStyles.join(' ')} onClick={onClick}>
          {backContent}
        </button>
      </div>
    </div>
  )
}

export default FlipButton
