import Footer from '@/layout/Footer'
import Header from '@/layout/Header'

import Connection from './Sessions/Connection'
import Games from './Sessions/Games'
import Hero from './Sessions/Hero'
import Personalize from './Sessions/Personalize'
import Ranking from './Sessions/Ranking'

export default function Home() {
    return (
        <>
            <Header />
            <main className="relative h-fit flex flex-col">
                <Hero />
                <Games />
                <Ranking />
                <Personalize />
                <Connection />
            </main>
            <Footer />
        </>
    )
}