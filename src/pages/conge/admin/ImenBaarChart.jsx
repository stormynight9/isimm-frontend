import React from "react"
import { ResponsiveBar } from "@nivo/bar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"
import { Button } from "@/components/ui/Button"
import { ChevronDown } from "lucide-react"

const data = [
    {
        c: "Jan",

        sandwich: 51,
        sandwichColor: "hsl(345, 70%, 50%)",
        kebab: 144,
        kebabColor: "hsl(103, 70%, 50%)",
    },
    {
        c: "Feb",

        sandwich: 27,
        sandwichColor: "hsl(209, 70%, 50%)",
        kebab: 161,
        kebabColor: "hsl(360, 70%, 50%)",
    },
    {
        c: "Mar",

        sandwich: 180,
        sandwichColor: "hsl(200, 70%, 50%)",
        kebab: 122,
        kebabColor: "hsl(31, 70%, 50%)",
    },
    {
        c: "Apr",

        sandwich: 166,
        sandwichColor: "hsl(232, 70%, 50%)",
        kebab: 23,
        kebabColor: "hsl(254, 70%, 50%)",
    },
    {
        c: "Mai",

        sandwich: 14,
        sandwichColor: "hsl(15, 70%, 50%)",
        kebab: 142,
        kebabColor: "hsl(250, 70%, 50%)",
    },
    {
        c: "Jun",

        sandwich: 61,
        sandwichColor: "hsl(254, 70%, 50%)",
        kebab: 119,
        kebabColor: "hsl(86, 70%, 50%)",
    },
    {
        c: "Jul",

        sandwich: 112,
        sandwichColor: "hsl(260, 70%, 50%)",
        kebab: 127,
        kebabColor: "hsl(310, 70%, 50%)",
    },
]

const colors = ["#356CF9", "#F9AB35"]

const ImenBaarChart = () => {
    return (
        <div style={{ height: 300, width: "auto" }}>
            <div style={{ marginLeft: "1130px", marginTop: "-30px" }}>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        {" "}
                        <Button variant="outline">
                            Name
                            <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <ResponsiveBar
                data={data}
                keys={["sandwich", "kebab"]}
                indexBy="c"
                margin={{ top: 50, right: 0, bottom: 30, left: 800 }}
                padding={0.6}
                innerPadding={4}
                groupMode="grouped"
                colors={colors}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", "1.3"]],
                }}
                legends={[
                    {
                        dataFrom: "keys",
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    )
}

export default ImenBaarChart
