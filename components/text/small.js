import React from 'react'
import cn from 'classnames'

import styles from './small.module.css'

function TextSmall({ bold = false, className, children, ...props }) {
  return (
    <small
      className={cn([styles.small, bold && styles.bold, className])}
      {...props}
    >
      {children}
    </small>
  )
}
export default TextSmall
