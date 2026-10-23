'use client'
import { useState } from 'react'
import { NeutralWorkspace, SectorPortalShell, TrustVerificationWorkspace, type PortalEnvironment, type SectorPortalNavigationItem, type TrustVerificationKind } from 'antifraud-portal-components-react'
import { PortalHeader } from 'uhc-portal-components-react'
import type { PersonalPortalProfile } from '../config/portal-profile'

const NAVIGATION: readonly SectorPortalNavigationItem[] = Object.freeze([
  {id: 'cards', label: 'Cards', description: 'Your connected records'}, {id: 'trust', label: 'Trust', description: 'Verification requests'},
  {id: 'marketplace', label: 'Marketplace', description: 'Organizations and offerings'}, {id: 'learn', label: 'Learn', description: 'Guidance and support'},
  {id: 'identity', label: 'Identity'}, {id: 'documents', label: 'Documents'}, {id: 'services', label: 'Services'}, {id: 'communications', label: 'Communications'},
  {id: 'contacts', label: 'Contacts & permissions'}, {id: 'devices', label: 'Devices & mobility'},
])
type PersonalView = typeof NAVIGATION[number]['id']

export function PersonalWorkspace({environment, profile}: Readonly<{environment: {active: PortalEnvironment; testNetworkEnabled: boolean; productionEnabled: boolean}; profile: PersonalPortalProfile}>) {
  const [view, setView] = useState<PersonalView>('cards')
  const [trustDraft, setTrustDraft] = useState<TrustVerificationKind | null>(null)
  const networkLabel = environment.active === 'demo' ? 'Demo · no authoritative write' : environment.active === 'test-network' ? 'Test Network' : 'Production'
  const portalName = `${profile.sectorLabel} · Personal`
  const header = <PortalHeader brand={{family: 'personal', productName: profile.brandName, organizationName: `${portalName} · ${networkLabel}`, homeHref: '#'}} copy={{home: 'Home', accountAndPreferences: 'Account and preferences', notSignedIn: 'Not signed in', appearance: 'Appearance', textSize: 'Text size', themes: {light: 'Light', dark: 'Dark', system: 'System'}, language: 'Language', chooseAccess: 'Account', signOut: 'Sign out'}} accountIdentifier={profile.contextLabel} guestActionHref="#" storageNamespace="antifraud-personal"/>
  return <SectorPortalShell activeNavigation={view} header={header} navigation={NAVIGATION} onNavigate={setView} portalName={portalName}>
    {view === 'cards' ? <NeutralWorkspace title="Cards" description="Open subject-controlled records shared with this portal."><div className="personal-card-grid"><article><strong>Personal records</strong><p>Connected records appear only after authenticated, authoritative discovery.</p></article><article><strong>Requests and disclosures</strong><p>Reading, authorization and signature remain separate recorded events.</p></article></div></NeutralWorkspace> : null}
    {view === 'trust' ? <><TrustVerificationWorkspace requests={[]} onSelect={setTrustDraft}/>{trustDraft ? <div className="personal-trust-draft" role="status"><strong>Request not submitted</strong><span>{trustDraft.replaceAll('-', ' ')} needs an authoritative provider adapter before it can be sent.</span><button type="button" onClick={() => setTrustDraft(null)}>Close</button></div> : null}</> : null}
    {view === 'marketplace' ? <NeutralWorkspace title="Marketplace" description="Discover verified organizations, their public Services and Products. Discovery never grants access to private evidence."/> : null}
    {view === 'learn' ? <NeutralWorkspace title="Learn" description="Plain-language guidance for verification, permissions and responsible disclosure."/> : null}
    {view === 'identity' ? <NeutralWorkspace title="Identity" description="Manage identity references and presentation requests without exposing source credentials."/> : null}
    {view === 'documents' ? <NeutralWorkspace title="Documents" description="Review documents received from trusted providers and their verification status."/> : null}
    {view === 'services' ? <NeutralWorkspace title="Services" description="View services you use and requests addressed to their providers."/> : null}
    {view === 'communications' ? <NeutralWorkspace title="Communications" description="Secure conversations associated with an exact request or service context."/> : null}
    {view === 'contacts' ? <NeutralWorkspace title="Contacts & permissions" description="Control contact relationships and purpose-bound access permissions."/> : null}
    {view === 'devices' ? <NeutralWorkspace title="Devices & mobility" description="Review linked devices, sessions and portable wallet connections."/> : null}
  </SectorPortalShell>
}
