export type PersonalEnvironment = Readonly<{active: 'demo' | 'test-network' | 'production'; testNetworkEnabled: boolean; productionEnabled: boolean}>
export function readPersonalEnvironment(environment: Readonly<Record<string, string | undefined>> = process.env): PersonalEnvironment {
  const requested = environment.ANTIFRAUD_NETWORK_KIND ?? 'demo'
  const testNetworkEnabled = environment.ANTIFRAUD_TEST_NETWORK_ENABLED === 'true'
  const productionEnabled = environment.ANTIFRAUD_PRODUCTION_ENABLED === 'true'
  if (requested === 'demo' || requested === 'test') return {active: 'demo', testNetworkEnabled, productionEnabled}
  if (requested === 'test-network' && testNetworkEnabled) return {active: requested, testNetworkEnabled, productionEnabled}
  if ((requested === 'network' || requested === 'production') && productionEnabled) return {active: 'production', testNetworkEnabled, productionEnabled}
  throw new Error(`${requested} is disabled by trusted server configuration.`)
}
