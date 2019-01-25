import * as React from 'react'

const Link = ({ active, children, onClick }: {active: boolean, children: React.ReactNode, onClick: any}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <button onClick={e => {
        e.preventDefault();
        onClick();
      }}>
      {children}
    </button>
  )
}

export default Link