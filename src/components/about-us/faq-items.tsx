import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

type FaqItemsProp = {
    faqs: {
        question: string,
        answer: string,
    }[]
    containerClass?: string
}

export const FaqItems = ({
    faqs,
    containerClass,
}: FaqItemsProp) => {
    return (
        <Accordion
            type="single"
            collapsible
            className={cn("border-b border-gray-200 py-4 pb-3 w-full h-fit", containerClass)}
        >
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border-b border-transparent p-2 transition-colors duration-300 ease-in-out [&[data-state=open]]:border-greyscale-border-default"
                >
                    <AccordionTrigger
                        showDropdownIcon={false}
                        className="cursor-pointer group flex w-full items-center hover:font-semibold transition-all ease-in-out duration-500 hover:no-underline justify-between border-none py-2 text-left lg:text-lg font-normal text-greyscale-text-title [&[data-state=open]]:font-semibold"
                    >
                        <span>{faq.question}</span>
                        <span className="flex size-8 items-center justify-center cursor-pointer">
                            <Plus className="hover:scale-110 group-[&[data-state=open]]:hidden text-[#646464]" />
                            <Minus className="hidden hover:scale-110 group-[&[data-state=open]]:block text-[#121212]" />
                        </span>
                    </AccordionTrigger>

                    <AccordionContent className="text-[15px] max-w-[817px] pb-4 text-[#3D3D3D]">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};