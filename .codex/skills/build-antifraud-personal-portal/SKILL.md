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

Use synthetic identities and documents. Never commit internal prompts, tenant
hosts, secrets or real personal data. Use red-green-refactor TDD.

Environment acceptance is fixed: immediate memory for automated tests; the
same gateway contract with a six-second memory delay for an explicit staging
demo; real `local-network` Fabric for interactive local acceptance; and real
Fabric for Test Network and production. Simulated operations are labelled and
never count as deployed-network evidence.
