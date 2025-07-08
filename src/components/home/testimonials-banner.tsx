import { QuotationMark } from "@/icons";
import { TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

export const TestimonialsBanner = () => {
    return (
        <div className="banner-wrapper">
            <div className="wrapper">
                {/* First set of cards */}
                <div className="cards">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={index}
                            className={cn("card flex-shrink-0 w-full max-w-[343px] lg:max-w-[530px] p-7.5 gap-5 rounded-[28px] bg-[#FAFAFA] flex flex-col justify-between", {
                                "mr-8": index === 3
                            })}
                        >
                            <div className="flex flex-col gap-5">
                                <QuotationMark className="size-8 lg:size-12" />
                                <p className="lg:text-xl text-wrap text-[#121212]/80">
                                    {testimonial.message}
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-lg lg:text-xl text-[#121212]/50">
                                    {testimonial.name}
                                </p>
                                <h2 className="max-lg:text-[15px]">
                                    {testimonial.location}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second set of cards */}
                <div className="cards">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={index}
                            className={cn("card flex-shrink-0 w-full max-w-[343px] lg:max-w-[530px] p-7.5 gap-5 rounded-[28px] bg-[#FAFAFA] flex flex-col justify-between", {
                                "mr-8": index === 3
                            })}
                        >
                            <div className="flex flex-col gap-5">
                                <QuotationMark className="size-8 lg:size-12" />
                                <p className="lg:text-xl text-wrap text-[#121212]/80">
                                    {testimonial.message}
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-lg lg:text-xl text-[#121212]/50">
                                    {testimonial.name}
                                </p>
                                <h2 className="max-lg:text-[15px]">
                                    {testimonial.location}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}