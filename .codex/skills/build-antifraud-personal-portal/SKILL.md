---
name: build-antifraud-personal-portal
description: Build or review the public Antifraud personal portal for subject-controlled requests, credentials, disclosures and derived predicates.
---

# Build Antifraud Personal Portal

Implement only subject-controlled personal workflows. Organization controller,
professional employee and relying-party applications remain separate.

The trusted backend resolves the authenticated individual, account bindings,
authorizations, provider endpoints, network and routing. The browser supplies
only the person's explicit intent. It never selects a tenant, host, Fabric
channel, chaincode or authority tuple.

Keep authentication, contact permission, data permission and credential
presentation distinct. A contact route grants no evidence access. A disclosure
authorization grants only the exact claims, relying party, purpose and expiry.

Never fabricate a credential in the portal. Issuance and presentation use the
governed protocol and preserve issuer trust, holder binding, audience, nonce,
state, status and revocation checks. If those boundaries are deferred, show
them as unavailable rather than simulating a successful credential.

Reuse the governed encrypted Communication collection or batch. A message may
reference a protected JSON:API primary document containing one or more
Schema.org documents; do not substitute a clinical Bundle or expose raw
attachments. Professional-to-personal, personal-to-professional and
professional-to-professional exchanges reuse this transport and document
manifest contract.

The exact document types are Schema.org `DigitalDocument` and `MediaObject`,
never FHIR `DocumentReference`. File bytes travel only in DIDComm
`attachments[]`, inline or by protected reference, through the released SDK
contract. Follow GitHub issue `antifraud-personal-next#1`.

The wallet registers distinct public device keys through Dynamic Client
Registration: ML-KEM-768 for communication encryption and policy-required
ML-DSA-65 for document-manifest signing. Reuse the wallet, secure-message and
managed-profile security already implemented by the shared core and Node.js
SDKs; do not reproduce cryptography, canonicalization, private-key custody or
unlock behavior in React. Never export private keys. For a cloud
wallet, require biometric unlock when available and a governed PIN or password
fallback otherwise. The ceremony authorizes a short-lived, user-bound,
device-bound and operation-bound backend-for-frontend wallet session; the
backend uses the high-level SDK to sign and returns only the proof and receipt.
Lock, expiry, cancellation or binding failure destroys the unlocked session.
Delivery, read state and a UI action are never signatures.

The relying-party example is a separate application. It may use Google OpenID
Connect for a synthetic login and request only an audience-bound,
purpose-bound, expiring age predicate. Login grants no public personal-record
search or data access.

Reuse the existing controller-to-employee age-over evidence; never derive a
second predicate in the personal or relying-party flow.

Use synthetic identities and documents. Never commit internal prompts, tenant
hosts, secrets or real personal data. Use red-green-refactor TDD.

Environment acceptance for the focused MVP is fixed: Demo is the only
executable profile and uses the normal portal → BFF → high-level SDK → gateway
contract with the six-second in-memory Fabric simulation. It preserves the
same UI, options, controlled components, validation and business flows intended
for future Test Network use. Test Network is visible but disabled during Demo
and is enabled only after the affected real local-network gate, cumulative
package release, endpoints, credentials and server configuration are complete.
Its initial single-orderer profile is non-HA and non-production. Production is
visible and disabled. Reuse the existing trusted BFF/gateway collection-prefix resolver;
React never supplies a prefix, and tests prove Demo cannot access either
disabled environment. Simulated operations are labelled and never count as
deployed-network evidence.

When preparing Firebase App Hosting, never request or commit a service-account
key. The project owner authorizes the official Firebase GitHub application and
selects project, region, backend and branch. Use Application Default
Credentials for Firebase Admin/Firestore and Secret Manager references for
secrets. Verify each persistence adapter and its tests before claiming support.

Before implementing Google login, read `docs/BETA_FIREBASE_AUTH.md`. Enabling
the provider is only one gate: use this portal's distinct web-app registration,
authorize `localhost` plus every deployed Beta domain, validate the exact
Firebase issuer and audience in the BFF, and apply subject/request/purpose
authorization separately. Choose either the Auth Emulator or live local Google
login. Preserve popup behavior with COOP `same-origin-allow-popups` where
needed and no global COEP `require-corp`. The Foundation is a bounded tenant of
`host-beta.antifraud.services`; its subject-controlled person-index bindings
are under `antifraud.online` and are never selected by React.
