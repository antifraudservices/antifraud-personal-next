// Flow contract: white-label branding and sector vocabulary come only from trusted server configuration; malformed or unsupported profiles fail closed and the browser never selects a sector.
import { describe, expect, it } from 'vitest'
import { readPersonalPortalProfile } from '../src/config/portal-profile'

describe('personal portal profile', () => {
  it('resolves a reviewed legal-services white-label profile', () => {
    expect(readPersonalPortalProfile({ANTIFRAUD_PERSONAL_PROFILE_JSON: JSON.stringify({
      id: 'legal-es', brandName: 'Example Legal', contextLabel: 'Personal workspace', sector: 'legal-services', accentColor: '#08727a',
    })})).toEqual({id: 'legal-es', brandName: 'Example Legal', contextLabel: 'Personal workspace', sector: 'legal-services', sectorLabel: 'Legal services', accentColor: '#08727a'})
  })

  it('rejects an unreviewed sector', () => {
    expect(() => readPersonalPortalProfile({ANTIFRAUD_PERSONAL_PROFILE_JSON: JSON.stringify({
      id: 'injected', brandName: 'Injected', contextLabel: 'Injected', sector: 'anything', accentColor: '#08727a',
    })})).toThrow('personal_portal_sector_not_allowed')
  })
})
