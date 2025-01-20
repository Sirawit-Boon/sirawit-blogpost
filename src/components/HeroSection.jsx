import MyImage from "../images/thompson.png";
import { MainContent } from "./MainContent";
export function HeroSection() {
  return (
    <section className="hero-section h-full mt-10 flex justify-center">
      <main className="hero-main gap-10 flex flex-col items-center justify-center md:max-w-[1200px]">
        <div className="flex flex-col md:grid md:grid-cols-3 px-4 items-center md:gap-16 gap-10">
          <div className="hero-text text-center md:text-right gap-4 flex flex-col max-w-80">
            <h1 className="hero-text-highlight text-4xl md:text-5xl  font-semibold">
              Stay Informed, <br />
              Stay Inspired
            </h1>
            <p className="hero-text-highlight-info">
              Discover a World of Knowledge at Your Fingertips. Your Daily Dose
              of Inspiration and I  nformation.
            </p>
          </div>
          <img src={MyImage} alt="Image of Thompson" />
          <div className="hero-text-sub gap-3 flex flex-col text-start">
            <div className="hero-text-sub-author gap-1 flex flex-col w-full">
              <p className="author text-fourth text-xs">-Author</p>
              <h3 className="myname text-[#43403B] text-2xl font-semibold">
                Thompson P.
              </h3>
            </div>
            <div className="hero-text-sub-info">
              <p className="info-descript text-fourth font-medium">
                I am a pet enthusiast and freelance writer who specializes in
                animal behavior and care. With a deep love for cats, I enjoy
                sharing insights on feline companionship and wellness.
              </p>
              <br />
              <p className="info-descript-sub text-fourth font-medium">
                When i’m not writing, I spends time volunteering at my local
                animal shelter, helping cats find loving homes.
              </p>
            </div>
          </div>
        </div>
        <MainContent />
      </main>
    </section>
  );
}
