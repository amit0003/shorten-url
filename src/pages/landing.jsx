import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"




function LandingPage() {
  const [longUrl, setLongUrl] = useState()
  const navigate = useNavigate()

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  }



  return (
    <>
      <div>
        <h1 className='my-10 sm:my-16 text-3xl sm:my-6xl lg:text-7xl text-white text-center font-extrabold'>The only URL Shortener <br /> you&rsquo; 11 e11 ever need! </h1>
        <form onSubmit={handleShorten}
          className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4gap-2 ">
          <Input onChange={(e) => { setLongUrl(e.target.value) }}
            value={longUrl} type="url" placeholder="Enter your looong URL" />
          <Button type="submit" variant="destructive">Shorten!</Button>
        </form>
        <img src="welcomebanner.png" alt="banner" className="w-full" />

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

        </Accordion>


      </div>
    </>
  )
}

export default LandingPage