import Artist from "../components/Artists"
import CarouselMain from "../components/Carousel/index"
import Menu from "../menu"


export default function Home() {

  return (
    <div>
      <Menu />
      <CarouselMain />
      <Artist />
    </div>
  )
}