import Hero from "../../components/Hero/Hero"
import Info from "../../components/Dagen/Dagen"
import Festen from "../../components/Praktiskt/Praktiskt"
import HittaHit from "../../components/Location/Location"

export default function Home() {


    return (
        <>
            <div className="home-page">
                <Hero />
                <Info />
                <HittaHit />
                <Festen />
            </div>
        </>
    )
}