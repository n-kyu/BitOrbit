export default function Hero() {
    return (
        <div className="px-[100px] pt-[32px] bg-gradient-to-b from-[--light-aqua] via-white to-white">
            <div className="hero-bg"></div>
            <div className="flex relative flex-col max-w-[549px] mt-[180px]">
                <div>
                    <h1 className="text-[56px] font-bold">
                        Find the Next{" "}
                        <span className="text-[--teal]">Crypto</span> on
                        BitOrbit
                    </h1>
                </div>
                <div className="max-w-[469px] mt-6">
                    <p className="text-lg text-[--medium-gray]">
                        Trade on the go. Anywhere, anytime.
                    </p>
                    <p className="text-lg text-[--medium-gray]">
                        Register now and get up to 100 USD$ in rewards
                    </p>
                </div>
                <div className="mt-10 flex gap-2">
                    <button className="primary-btn">Get started</button>
                    <button className="transparent-btn">Learn more</button>
                </div>
            </div>
        </div>
    );
}
