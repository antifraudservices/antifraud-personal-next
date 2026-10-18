# Antifraud Personal Portal agent contract

Read `.codex/skills/build-antifraud-personal-portal/SKILL.md` before
implementing this portal.

Keep controller administration, professional employee work and relying-party
application behavior outside this repository. Browser state never grants
authority, and an email or phone number is never a public subject lookup key.

Use red-green-refactor TDD. Browser acceptance crosses the real portal, backend
for frontend, high-level SDK and gateway with authoritative readback. Automated
tests may use immediate memory; a staging demo may use the fixed six-second
simulation; interactive local acceptance uses real `local-network` Fabric;
Test Network and production use their real Fabric boundaries.
