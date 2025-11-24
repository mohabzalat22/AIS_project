import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Counter App', () => {
  it('should not allow negative values', () => {
    render(<App />)
    
    const decrementButton = screen.getByText('-')
    const countDisplay = screen.getByText('0')
    
    // Try to decrement multiple times from zero
    fireEvent.click(decrementButton)
    fireEvent.click(decrementButton)
    fireEvent.click(decrementButton)
    
    // Counter should still be 0, not negative
    expect(countDisplay.textContent).toBe('0')
  })
})