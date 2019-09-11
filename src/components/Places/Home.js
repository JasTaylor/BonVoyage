import React from 'react'

const styles = {
  padding: '1rem',
  maxWidth: '500px',
  minHeight: '5rem'
}

const InlineStyleExample = ({ error }) => (
  <div style={!error ? styles : { ...styles, backgroundColor: 'red' }}>Inline Styles!</div>
)

export default InlineStyleExample
