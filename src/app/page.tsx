import { PersonalWorkspace } from '../components/PersonalWorkspace'
import { readPersonalEnvironment } from '../config/environment'
export default function HomePage() { return <PersonalWorkspace environment={readPersonalEnvironment()}/> }
