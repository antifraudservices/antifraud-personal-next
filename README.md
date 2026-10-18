# Antifraud Personal Portal

Public personal-portal scaffold for individuals who receive, review and use
identity or qualification evidence through the Antifraud data space.

This application is separate from both the organization-controller portal and
the professional employee portal. It never inherits organization-controller,
employee, reviewer or issuer authority.

## Intended scope

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

The focused education MVP may initially use synthetic individuals and defer
full wallet issuance and presentation. Deferred protocol boundaries must remain
visible and must never be replaced by a portal-generated credential.

## Network profiles and acceptance

- Component and application tests may use immediate in-memory adapters.
- An explicitly enabled staging demo uses the normal portal, backend,
  high-level SDK and gateway routes with an in-memory Fabric adapter that waits
  six seconds for each simulated ledger operation.
- An interactively run local portal uses real `local-network` Fabric and must
  prove a real transaction identifier plus authoritative readback after
  gateway, peer and chaincode restart.
- Test Network and production use their real Fabric adapters and reject demo
  mode.

The browser never selects an adapter, network, tenant, zone, Fabric channel,
chaincode or authority tuple. Staging must visibly identify simulated
operations; they never count as Test Network or production evidence.

## Status

Scaffold only. No application, authentication, credential protocol,
persistence or executable journey exists yet.

## Public-repository boundary

Use synthetic identities and evidence only. Do not commit internal prompts,
tenant hosts, credentials, personal data, private documents or unpublished
deployment details.

## Licence

Copyright 2026 Antifraud Services Inc. Licensed under Apache-2.0.
