# Personal attachment use case

The authenticated-person prerequisite is defined in
[`BETA_FIREBASE_AUTH.md`](BETA_FIREBASE_AUTH.md). Google login authenticates the
person but grants no contact, attachment, disclosure, wallet or signing
authority.

The personal inbox presents Schema.org `DigitalDocument` and `MediaObject`
records. It never presents or serializes FHIR `DocumentReference`.

PDF, spreadsheet, Word, image, video and any other server-permitted media type
travels in DIDComm `attachments[]`, inline or by authorized reference plus
multihash. Delivery, read, acceptance and signature remain separate. Opening a
message does not grant attachment retrieval.

The existing controller-to-employee age-over predicate is requested through a
separate consent-bound presentation; it is not derived again here.

Implementation and acceptance belong to
[GitHub issue #1](https://github.com/antifraudservices/antifraud-personal-next/issues/1).
