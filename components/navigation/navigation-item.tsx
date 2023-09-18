"use client";

import { cn } from "@/lib/utils";
import ActionTooltip from "../action-tooltip";
import { useParams, useRouter } from "next/navigation";

interface NavigationItemProps {
    id: string;
    imageUrl: string;
    name: string;
}

const NavigationItem = ({
    id,
    imageUrl,
    name
}: NavigationItemProps) => {
    const params = useParams();
    const router = useRouter();

    return (
        <div>
            <ActionTooltip
                side="right"
                align="center"
                label={name}>
                <button
                    onClick={() => { }}
                    className="group relative flex items-center"
                >
                    <div className={cn(
                        "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
                        params?.serverId !== id && "group-hover:h-[20px]",
                        params?.serverId === id ? "h-[36px]" : "h-[8px]"
                    )}
                    />
                </button>
            </ActionTooltip>
        </div>
    )
}

export default NavigationItem