# Beta Firebase authentication handoff

This portal uses the shared `Antifraud Beta` Firebase project
(`project-f70afb24-dd73-4fb4-be5`) and its separately registered web app:

- display name: `Antifraud Personal Beta`;
- Firebase app ID: `1:982931712028:web:a9122555b5fd55445857d9`; and
- public portal origin: `https://personal-beta.antifraud.services`.

Firebase Authentication is common infrastructure for the four Beta portals,
but each portal has its own web-app registration and App Hosting backend. A
valid Firebase session authenticates the person only. It never grants contact,
evidence, disclosure, wallet, credential or signature authority and never
makes an email address a public person-index key.

## Required setup and proof

- Enable Google in **Authentication > Sign-in method** and select
  `cto@antifraud.services` as the project support email.
- Authorize the generated Firebase domains, `localhost` and all four portal
  origins: `controller-beta.antifraud.services`,
  `professional-beta.antifraud.services`,
  `personal-beta.antifraud.services` and `social-demo.antifraud.services`.
  A Firebase authorized domain has no port. Use `http://localhost:<port>`;
  `127.0.0.1` is different. New Firebase projects do not add `localhost`
  automatically.
- Associate this web app with the personal App Hosting backend. Keep Test
  Network and Production disabled.
- Provide only the public browser values `NEXT_PUBLIC_FIREBASE_API_KEY`,
  `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`,
  `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`,
  `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` and
  `NEXT_PUBLIC_FIREBASE_APP_ID`.
- The BFF uses `FIREBASE_PROJECT_ID=project-f70afb24-dd73-4fb4-be5`,
  Application Default Credentials and Firebase Admin `verifyIdToken`; it must
  validate the exact issuer
  `https://securetoken.google.com/project-f70afb24-dd73-4fb4-be5` and audience
  `project-f70afb24-dd73-4fb4-be5` before applying separate subject, request,
  purpose and disclosure policy.
- Local testing chooses either the Auth Emulator with synthetic users or live
  Google login with the real public config and `localhost`. Do not combine the
  two. Never download or commit a service-account JSON key.
- Preserve popup compatibility: use
  `Cross-Origin-Opener-Policy: same-origin-allow-popups` if needed and never a
  global `Cross-Origin-Embedder-Policy: require-corp`, which blocks Firebase's
  helper iframe and can appear as `auth/popup-closed-by-user`.
- Prove real local popup login, BFF verification, wrong issuer/audience
  rejection and authoritative reload; then repeat the browser-visible check on
  the final App Hosting/custom hostname.

The `personal-beta.antifraud.services` name is the personal UI origin, not the
person-index authority. In Demo, Antifraud Foundation is one bounded tenant of
the gateway at `host-beta.antifraud.services`; that tenant relationship grants
no authority over other tenants. Its person-index services belong under
`antifraud.online` and are discovered only through a subject-controlled,
verified HTTPS or `did:web` service binding. React and the login email never
choose an index host or grant access to it.
