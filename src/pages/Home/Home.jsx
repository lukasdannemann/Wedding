import Hero from "../../components/Hero/Hero"
import Info from "../../components/Info/Info"
import Festen from "../../components/Festen/Festen"
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