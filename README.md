# Antifraud Personal Portal

Public personal-portal scaffold for individuals who receive, review and use
identity or qualification evidence through the Antifraud data space.

This application is separate from both the organization-controller portal and
the professional employee portal. It never inherits organization-controller,
employee, reviewer or issuer authority.

## Intended scope

- preserve the complete neutral Personal information architecture: Cards,
  Identity, Documents, Services, Communications, contacts/permissions and
  device mobility;
- use Trust for governed employee-email, organization-domain and received-
  document verification requests;
- keep Marketplace separate for discovery of verified organizations and their
  public Services and Products;
- review requests addressed to the authenticated individual;
- approve or decline the exact requested disclosure or derived predicate;
- inspect evidence provenance and current status when policy permits;
- receive or import a supported credential through its governed protocol;
- request or present only the claims required by a relying party; and
- see pending, completed, declined, expired and failed operations without
  exposing contact details, documents or unrelated claims.

Email or phone sign-in is an authentication entry point, never a public search
key. Permission to contact an individual does not grant evidence, identity,
qualification or other data access.

## Encrypted communications and document signatures

The personal inbox receives the same governed Communication collection or
batch used by professional portals. Its protected business attachment is not a
clinical Bundle: it is a JSON:API primary document containing one or more
Schema.org `DigitalDocument` and `MediaObject` resources. One Communication may
carry or reference one immutable manifest covering one or several files.
PDF, Excel, Word, image, video and other governed bytes travel separately in
DIDComm `attachments[]`, inline under the governed limit or through protected
`links + hash`. They are never FHIR `DocumentReference` resources.
Implementation is tracked in [GitHub issue #1](https://github.com/antifraudservices/antifraud-personal-next/issues/1).

The personal device registers separate public keys through Dynamic Client
Registration: ML-KEM-768 for communication encryption and, when required by
the document policy, ML-DSA-65 for manifest signing. Private keys remain inside
the protected wallet and never enter the browser, gateway, message, credential
or ledger.

This security is an integration requirement, not a new portal cryptography
implementation. Reuse the wallet, secure-message and managed-profile behavior
already implemented in the shared core and Node.js SDKs. Pin the reviewed SDK
versions and prove their contracts through the backend-for-frontend boundary;
do not copy encryption, signing, canonicalization, key custody or unlock logic
into React components or portal-local utilities.

For a cloud wallet, the browser requires biometric unlock whenever the device
supports it, with PIN or password as the governed fallback. The local ceremony
authorizes the trusted backend for frontend to unprotect the wallet for one
short, user-bound, device-bound and operation-bound session. The backend
invokes the managed wallet through the high-level SDK and returns only the
proof and receipt. It must destroy the unlocked session on lock, expiry,
cancellation or failed binding; the React component never receives seed or
private-key material.

A signature binds the canonical manifest identifier and digest, signer,
purpose, signing time, verification method and exact document versions. It is
not inferred from delivery, read state, authentication or a button click.
Multi-party signatures use a proof set when order is irrelevant or a proof
chain when countersignature order matters.

The same contract supports professional-to-personal,
personal-to-professional and professional-to-professional delivery. Recipient
authorization, represented organization, employee assignment, natural signer
and delivery actor remain separate.

A separate relying-party demonstration may authenticate a synthetic user with
Google OpenID Connect and request only an audience-bound, purpose-bound and
expiring `age over` predicate. Google authentication proves the relying-party
session; it neither locates a public personal record nor grants birth-date,
identity, qualification or document access.

The age-over predicate already comes from the controller-to-employee evidence
journey. The personal or relying-party flow requests the authoritative existing
predicate and never derives or persists a duplicate.

The focused education MVP may initially use synthetic individuals and defer
full wallet issuance and presentation. Deferred protocol boundaries must remain
visible and must never be replaced by a portal-generated credential.

## Network profiles and acceptance

- Component and application tests may use immediate in-memory adapters.
- Demo is the only executable MVP profile. It uses the normal portal, BFF,
  high-level SDK and gateway routes with the in-memory Fabric adapter and its
  six-second simulated confirmation.
- Test Network is visible but disabled until the separately operated Fabric
  topology and service endpoints are deployed and configured. Kubernetes is
  not a prerequisite for the Beta Demo or for a later single-orderer Test
  Network; Production redundancy remains a separate gate.
- Production is visible and disabled.

The browser never selects an adapter, network, tenant, zone, Fabric channel,
chaincode, collection prefix or authority tuple. Demo retains the same UI,
options, controlled components, validation and business flows intended for
Test Network while visibly identifying simulated operations. The trusted BFF
and gateway resolve their existing environment collection prefixes; Demo
cannot access Test Network or Production namespaces.

For Firebase App Hosting, the project owner—not Bolt—authorizes the official
Firebase GitHub application and chooses the Firebase project, region, backend
and live branch. Never paste or commit a service-account key. Runtime Firebase
Admin/Firestore uses Application Default Credentials, and Secret Manager names
may be referenced from `apphosting.yaml`. Prefer Firestore for the hosted Demo;
PostgreSQL plus local IPFS is the verified self-hosted profile. Supabase is
currently a blob adapter and MongoDB is not wired as the current vault
repository, so neither is claimed as a complete database profile.

Enabling Google alone is not enough for local or hosted login. Register this
portal's Firebase web app, authorize `localhost` and all deployed Beta origins,
provide only public browser configuration, verify the ID token in the BFF and
preserve popup-compatible headers. Follow the exact
[Beta Firebase authentication handoff](docs/BETA_FIREBASE_AUTH.md).

Implementation is tracked in [Demo environment issue #2](https://github.com/antifraudservices/antifraud-personal-next/issues/2).

## Status

The Next.js application now exposes the complete neutral Personal navigation,
the separate Trust and Marketplace surfaces, the Connect Health visual system
and server-owned profiles for reviewed sectors. Trust actions stop at
an honest draft until an authoritative provider adapter exists. Authentication,
addressed Communication retrieval, wallet signing, credential issuance/
presentation and personal persistence remain deferred and are not simulated.

White-label branding and sector vocabulary come only from
`ANTIFRAUD_PERSONAL_PROFILE_JSON` on the trusted server. The browser cannot
select a sector or authority profile.

## Public-repository boundary

Use synthetic identities and evidence only. Do not commit internal prompts,
tenant hosts, credentials, personal data, private documents or unpublished
deployment details.

## Licence

Copyright 2026 Antifraud Services Inc. Licensed under Apache-2.0.
