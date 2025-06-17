import { trustees } from '../lib/constants';

function Trustee() {
  return (
    <div className="px-4 pt-15 lg:px-[6.826rem]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-base font-light text-white/70">Trusted by the world's most innovative teams</h1>
        <div className="mt-10 grid grid-cols-2 items-center gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {trustees.map(({ image }, index) => (
            <div
              key={index}
              className="flex h-[98px] items-center justify-center rounded-[0.625rem] border border-white/15 px-2 py-8 sm:px-10"
            >
              <img src={image} alt="" className="object-contain object-center" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trustee;
