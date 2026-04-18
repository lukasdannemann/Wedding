import Hero from "../../components/Hero/Hero"
import Vigsel from "../../components/Vigsel/Vigsel"
import Festen from "../../components/Festen/Festen"
import HittaHit from "../../components/Location/Location"

export default function Home() {


    return (
        <>
            <div className="home-page">
                <Hero />
                <Vigsel />
                <HittaHit />
                <Festen />
            </div>
        </>
    )
}