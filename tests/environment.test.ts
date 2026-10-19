// Flow contract: reuse shared test fixtures and canonical types; do not introduce duplicated literals.
import { describe, expect, it } from 'vitest'
import { readPersonalEnvironment } from '../src/config/environment'

describe('personal portal environment', () => {
  it('allows only Demo by default', () => expect(readPersonalEnvironment({})).toEqual({active: 'demo', testNetworkEnabled: false, productionEnabled: false}))
  it('rejects disabled trusted profiles and ignores public selection', () => {
    expect(() => readPersonalEnvironment({ANTIFRAUD_NETWORK_KIND: 'test-network'})).toThrow(/disabled/u)
    expect(readPersonalEnvironment({NEXT_PUBLIC_ANTIFRAUD_NETWORK_KIND: 'production'}).active).toBe('demo')
  })
})
