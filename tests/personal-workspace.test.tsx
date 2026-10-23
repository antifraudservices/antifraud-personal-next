// Flow contract: the white-label Personal portal retains the Connect Health personal information architecture, replaces Emergency with Trust, keeps Marketplace as public organization and offering discovery, and never simulates an authoritative verification result.
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { PersonalWorkspace } from '../src/components/PersonalWorkspace'

const environment = {active: 'demo' as const, testNetworkEnabled: false, productionEnabled: false}
const profile = {id: 'education', brandName: 'Example Education', contextLabel: 'Personal workspace', sector: 'education' as const, sectorLabel: 'Education', accentColor: '#08727a'}
afterEach(() => { cleanup(); window.localStorage.clear(); document.documentElement.removeAttribute('data-theme'); document.documentElement.classList.remove('light', 'dark') })

describe('PersonalWorkspace', () => {
  it('renders the complete neutral personal navigation with Trust instead of Emergency', () => {
    render(<PersonalWorkspace environment={environment} profile={profile}/>)
    for (const label of ['Cards', 'Trust', 'Marketplace', 'Learn', 'Identity', 'Documents', 'Services', 'Communications', 'Contacts & permissions', 'Devices & mobility']) {
      expect(screen.getByRole('button', {name: label})).toBeVisible()
    }
    expect(screen.queryByRole('button', {name: /emergency/i})).not.toBeInTheDocument()
    expect(screen.getByText('Example Education')).toBeVisible()
  })

  it('opens Trust and separates provider verification from Marketplace discovery', () => {
    render(<PersonalWorkspace environment={environment} profile={profile}/>)
    fireEvent.click(screen.getByRole('button', {name: 'Trust'}))
    expect(screen.getByRole('heading', {name: 'Trust'})).toBeVisible()
    expect(screen.getByRole('button', {name: 'Verify an employee email'})).toBeEnabled()
    fireEvent.click(screen.getByRole('button', {name: 'Marketplace'}))
    expect(screen.getByRole('heading', {name: 'Marketplace'})).toBeVisible()
    expect(screen.getByText(/verified organizations, their public Services and Products/i)).toBeVisible()
  })

  it('uses the Connect Health account header and switches to dark mode', () => {
    render(<PersonalWorkspace environment={environment} profile={profile}/>)
    fireEvent.click(screen.getByRole('button', {name: 'Account and preferences'}))
    expect(screen.getByText('Appearance')).toBeVisible()
    fireEvent.click(screen.getByRole('button', {name: 'Dark'}))
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(window.localStorage.getItem('antifraud-personal.theme')).toBe('dark')
  })
})
