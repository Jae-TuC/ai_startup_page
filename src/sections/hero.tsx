import productImage from '../assets/product.png';

const Hero = () => {
  return (
    <div className="relative h-fit overflow-hidden pb-20 md:px-10">
      <div className="absolute -bottom-10 left-0 z-2 h-[300px] w-full bg-gradient-to-t from-black from-40% to-transparent" />

      <div className="relative mx-auto px-4 md:px-0">
        <div className="absolute top-[460px] left-0 -z-10 h-[200px] w-full rounded-2xl bg-[#9855FF]/70 blur-2xl md:top-[500px] md:h-[500px] md:w-full md:blur-3xl" />
        <div className="absolute top-80 left-1/2 -z-10 mt-20 hidden size-[35.563rem] -translate-x-1/2 rounded-full border-1 border-white/20 bg-[#622A9A]/70 blur-2xl md:block" />
        <div className="absolute top-50 left-1/2 -z-10 mt-20 hidden size-[51.563rem] -translate-x-1/2 rounded-full border-1 border-white/20 bg-[#622A9A]/70 blur-[534px] md:block" />

        <div className="absolute top-30 left-0 -z-10 mt-20 h-full w-full md:top-45">
          <div
            style={{
              translate: 'translateX(-50%) translateY(-50%)',
            }}
            className="absolute top-1/2 left-1/2 size-[394px] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-15 md:size-[565.3px]"
          ></div>

          <div
            style={{
              translate: 'translateX(-50%) translateY(-50%)',
            }}
            className="absolute top-1/2 left-1/2 size-[544px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15 md:size-[799.75px]"
          ></div>

          <div
            style={{
              translate: 'translateX(-50%) translateY(-50%)',
            }}
            className="absolute top-1/2 left-1/2 size-[744px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/75 opacity-20 md:size-[1032px]"
          >
            <div className="absolute top-1/2 left-0 size-2 -translate-x-1/2 -translate-y-0 rounded-full bg-white"></div>
            <div className="absolute top-1/2 left-full size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center overflow-hidden pt-22.5">
          <div className="flex items-center gap-2 rounded-full border-1 border-white/20 px-3.5 py-3">
            <span className="rounded-full bg-[#9855FF] px-2 py-1 text-[0.625rem] font-bold text-black uppercase">
              new
            </span>
            <p className="text-[#9855FF]">Latest Intigration just arrived</p>
          </div>

          <div className="mt-3 flex flex-col items-center justify-center">
            <p className="bg-gradient-to-b from-white from-40% to-[#B372CF] bg-clip-text p-4 text-center text-[3rem]/[3.25rem] font-medium tracking-tight text-transparent md:text-[5.125rem]/[5.25rem]">
              Boost your <br />
              <span>rankings with AI.</span>
            </p>

            <p className="max-w-[544px] text-center text-lg font-light tracking-wide text-white md:text-xl/[1.938rem]">
              Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
            </p>

            <button className="mt-4 rounded-xl border-1 border-white/20 p-2 text-sm font-medium text-black">
              <div className="w-full rounded-lg bg-white px-4 py-2 text-[0.938rem] font-medium">Start for free</div>
            </button>
          </div>
        </div>

        <div className="relative mt-[3.375rem] rounded-2xl border-1 border-white/20 bg-gradient-to-r from-black from-10% via-transparent via-50% to-black p-2.5 md:mt-[2.055rem]">
          <div
            className="z-10 aspect-video rounded-[0.625rem] border-1 border-white/20 bg-cover"
            style={{
              backgroundImage: `url(${productImage})`,
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
