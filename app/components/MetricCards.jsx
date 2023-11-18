"use client";
import { CountUp } from "use-count-up";
export const CountedNumbers = () => {
    const { value } = CountUp({
        isCounting: true,
        end: 1320,
        duration: 3.2,
    });
    return value;
};

export default function MetricCards() {
    return (
        <>
            <div className="c-container mt-[174px]">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 px-[49px]">
                    <div className="rounded-2xl border border-solid border-[--light-grayish]">
                        <div className="p-5 pb-0 flex flex-row items-center justify-between space-y-0">
                            <p className="tracking-tight text-[28px] font-bold">
                                <CountUp isCounting end={200} duration={2.2} />+{" "}
                            </p>
                        </div>
                        <div className="p-5 pt-0">
                            <h3 className="tracking-tight text-sm font-medium text-[--medium-gray]">
                                Countries Covered
                            </h3>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-solid border-[--light-grayish]">
                        <div className="p-5 pb-0 flex flex-row items-center justify-between space-y-0">
                            <p className="tracking-tight text-[28px] font-bold">
                                <CountUp isCounting end={30} duration={2.5} />{" "}
                                Million
                            </p>
                        </div>
                        <div className="p-5 pt-0">
                            <h3 className="tracking-tight text-sm font-medium text-[--medium-gray]">
                                Global Investors
                            </h3>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-solid border-[--light-grayish]">
                        <div className="p-5 pb-0 flex flex-row items-center justify-between space-y-0">
                            <p className="tracking-tight text-[28px] font-bold">
                                <CountUp isCounting end={700} duration={2.2} />+{" "}
                            </p>
                        </div>
                        <div className="p-5 pt-0">
                            <h3 className="tracking-tight text-sm font-medium text-[--medium-gray]">
                                Coins
                            </h3>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-solid border-[--light-grayish]">
                        <div className="p-5 pb-0 flex flex-row items-center justify-between space-y-0">
                            <p className="tracking-tight text-[28px] font-bold">
                                $
                                <CountUp
                                    isCounting
                                    end={2.19}
                                    duration={2.2}
                                />{" "}
                                Billion
                            </p>
                        </div>
                        <div className="p-5 pt-0">
                            <h3 className="tracking-tight text-sm font-medium text-[--medium-gray]">
                                24h Trading Volume
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
