export const PERSONAL_PORTAL_SECTORS = ['legal-services', 'accounting', 'education', 'insurance', 'professional-services'] as const

export type PersonalPortalSector = typeof PERSONAL_PORTAL_SECTORS[number]
export type PersonalPortalProfile = Readonly<{ id: string; brandName: string; contextLabel: string; sector: PersonalPortalSector; sectorLabel: string; accentColor: string }>

const SECTOR_LABELS: Readonly<Record<PersonalPortalSector, string>> = Object.freeze({
  'legal-services': 'Legal services', accounting: 'Accounting', education: 'Education', insurance: 'Insurance', 'professional-services': 'Professional services',
})
const DEFAULT_PROFILE = Object.freeze({id: 'antifraud-personal', brandName: 'antifraud.online', contextLabel: 'Personal workspace', sector: 'professional-services', accentColor: '#009BFA'})

export function readPersonalPortalProfile(environment: Readonly<Record<string, string | undefined>> = process.env): PersonalPortalProfile {
  const raw = environment.ANTIFRAUD_PERSONAL_PROFILE_JSON
  let candidate: unknown = DEFAULT_PROFILE
  if (raw) { try { candidate = JSON.parse(raw) } catch { throw new Error('personal_portal_profile_invalid_json') } }
  if (!candidate || typeof candidate !== 'object') throw new Error('personal_portal_profile_invalid')
  const value = candidate as Record<string, unknown>
  if (!PERSONAL_PORTAL_SECTORS.includes(value.sector as PersonalPortalSector)) throw new Error('personal_portal_sector_not_allowed')
  for (const field of ['id', 'brandName', 'contextLabel', 'accentColor'] as const) if (typeof value[field] !== 'string' || value[field].trim().length === 0) throw new Error(`personal_portal_${field}_invalid`)
  if (!/^#[0-9a-f]{6}$/iu.test(value.accentColor as string)) throw new Error('personal_portal_accentColor_invalid')
  const sector = value.sector as PersonalPortalSector
  return {id: value.id as string, brandName: value.brandName as string, contextLabel: value.contextLabel as string, sector, sectorLabel: SECTOR_LABELS[sector], accentColor: value.accentColor as string}
}
