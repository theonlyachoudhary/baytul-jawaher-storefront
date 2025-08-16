import BaitSvg from "./bait-svg"
import JawaherSvg from "./jawaher-svg"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      {/* Background SVGs */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10">
        <div className="w-[90%] h-full flex justify-center items-center">
          <BaitSvg className="w-full h-auto max-h-[60%]" />
          <JawaherSvg className="w-full h-auto max-h-[60%]" />        </div>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-5xl leading-10 text-ui-fg-base font-normal"
          >
            Baytul Jawaher
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            The House of Jewels
          </Heading>
        </span>
        <Button variant="primary">
          Explore the Store
        </Button>
      </div>
    </div>
  )
}

export default Hero
