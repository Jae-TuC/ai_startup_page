const Button = ({ text }: { text: string }) => {
  return (
    <button className="relative rounded-xl border border-white/15 p-1.5">
      <div className="absolute inset-1 -z-5 overflow-hidden rounded-lg border-[1.5px] border-white/30">
        <div className="[mask-image:linear-gradient(to_top, black, transparent)] absolute inset-0 bg-[#8C45FF]/45" />
      </div>
      <div className="absolute inset-1 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.5)_inset]" />

      <div className="relative rounded-lg px-4 py-1 text-sm font-normal">{text}</div>
    </button>
  );
};

export default Button;
