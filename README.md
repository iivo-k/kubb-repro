Repro project for a Kubb issue related to referenced file.

- Kubb 4.27.2 was the last version working properly for me
- Kubb 4.27.3 to 4.29.1 generated invalid schemas, trying to reference non-existing files, like "./schemaSchema.ts"
- Kubb 4.31.0 has working schemas, but it no longer generates the separates schemas and types, for example parcelSchema.ts no longer exists, the parcels is instead inlined
