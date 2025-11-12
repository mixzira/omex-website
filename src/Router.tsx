import DiscordRules from '@/pages/DiscordRules'
import Home from '@/pages/Home/index'
import Privacy from '@/pages/Privacy'
import ServerRules from '@/pages/ServerRules'
import Terms from '@/pages/Terms'
import { Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/server-rules" element={<ServerRules />} />
      <Route path="/discord-rules" element={<DiscordRules />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  )
}