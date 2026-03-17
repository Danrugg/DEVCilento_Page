"use client";

interface ServiceCardProps {
    title: string;
    whatIsIt: string;
    value: string;
    imageColor: string;
}

export default function ServiceCard({
    title,
    whatIsIt,
    value,
    imageColor,
}: ServiceCardProps) {
    return (
        <div className="flex flex-col h-full gap-6 group bg-white rounded-[2.5rem] p-6 shadow-sm hover:shadow-xl transition-shadow duration-300">
            {/* Visual Placeholder */}
            <div
                className="w-full aspect-video rounded-3xl overflow-hidden relative shrink-0 transition-transform duration-500 group-hover:scale-[0.98]"
                style={{ backgroundColor: imageColor }}
            >
                <div className="w-full h-full mix-blend-overlay opacity-30 bg-gradient-to-br from-black/0 to-black/40" />
            </div>

            <div className="flex flex-col flex-1 gap-6">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black leading-[1.1]">
                    {title}
                </h2>

                <div className="flex flex-col gap-5 flex-1">
                    <div>
                        <span className="font-bold text-black uppercase text-xs tracking-widest block mb-2">
                            Cos&apos;è:
                        </span>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {whatIsIt}
                        </p>
                    </div>
                    <div>
                        <span className="font-bold text-black uppercase text-xs tracking-widest block mb-2">
                            Il valore:
                        </span>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {value}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
