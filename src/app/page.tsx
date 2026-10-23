import { PersonalWorkspace } from '../components/PersonalWorkspace'
import { readPersonalEnvironment } from '../config/environment'
import { readPersonalPortalProfile } from '../config/portal-profile'
export default function HomePage() { return <PersonalWorkspace environment={readPersonalEnvironment()} profile={readPersonalPortalProfile()}/> }
