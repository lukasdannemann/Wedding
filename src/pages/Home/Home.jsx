import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import Vigsel from "../../components/Vigsel/Vigsel"
import Festen from "../../components/Festen/Festen"

export default function Home() {


    return (
        <>
            <div className="home-page">
                <Header />
                <Hero />
                <Vigsel />
                <Festen />
            </div>
        </>
    )
}