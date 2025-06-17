import { trustees } from '../lib/constants';

function Trustee() {
  return (
    <div className="px-10 py-15 lg:px-28">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-base font-light text-white/70">Trusted by the world's most innovative teams</h1>
        <div className="mt-10 grid grid-cols-1 items-center gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {trustees.map(({ image }, index) => (
            <div
              key={index}
              className="flex h-[6.125rem] w-[14.688rem] items-center justify-center rounded-[0.625rem] border border-white/15"
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
