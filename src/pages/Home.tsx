import { useState } from "react";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const slide = slides[index]

  const next = () =>
    setIndex((i) => (i + 1) % slides.length);

  const prev = () =>
    setIndex((i) =>
      i === 0 ? slides.length - 1 : i - 1
    );

  return (
    <section className="relative w-full h-160 md:h-180 overflow-hidden">
      {/* {Background} */}
      <img src={slide.img} className="absolute  inset-0 w-full h-full object-cover blur-xl scale-110 " />
      <div className="absolute inset-0 bg-black/40">
        {/* Glass Card */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4">
          <div className="w-full h-130 bg-white/20  backdrop-blur-xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6 ">

            {/* Image */}
            <div className="md:min-w-1/2  min-w-full aspect-video overflow-hidden rounded-xl">
              <img src={slide.img} className="w-full h-full object-cover" />
            </div>

            {/* Text */}
            <div className=" text-text ">
              <h1 className="text-2xl md:text-4xl fout-bold">
                {slide.title}
              </h1>
              <p className="italic opacity-80 mt-1">
                {slide.latin}
              </p>

              <p className="mt-4  space-y-1 text-sm md:text-base">
                {slide.description}
              </p>

            </div>
          </div>

        </div>

      </div>
      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute bottom-6 right-20 text-white text-3xl z-10"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute bottom-6 right-10 text-white text-3xl z-10"
      >
        ›
      </button>
    </section>
  )
}


const slides = [
  {
    latin: "Archilochus colubris",
    title: "Discover Places",
    description: " Designing a slider is half inspiration, half execution. I’ll show you WHERE to find good designs and HOW to copy them correctly (like a pro, not blindly). Designing a slider is half inspiration, half execution. I’ll show you WHERE to find good designs and HOW to copy them correctly (like a pro, not blindly).",
    route: "/places",
    bg: "bg-slate-800",
    img: "/photos/img1.png",
  },
  {
    latin: "Archilochus colubris",
    title: "Cultural Events",
    description: " Designing a slider is half inspiration, half execution. I’ll show you WHERE to find good designs and HOW to copy them correctly (like a pro, not blindly). Designing a slider is half inspiration, half execution. I’ll show you WHERE to find good designs and HOW to copy them correctly (like a pro, not blindly).",
    route: "/events",
    bg: "bg-zinc-900",
    img: "/photos/img2.png",
  },
  {
    latin: "Archilochus colubris",
    title: "Our Story",
    description: " Designing a slider is half inspiration, half execution. I’ll show you WHERE to find good designs and HOW to copy them correctly (like a pro, not blindly). Designing a slider is half inspiration, half execution. I’ll show you WHERE to find good designs and HOW to copy them correctly (like a pro, not blindly).",
    route: "/about",
    bg: "bg-neutral-800",
    img: "/photos/img3.png",
  },
];

