import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { FaChartLine } from "react-icons/fa6";
import { LuPencilRuler } from "react-icons/lu";
import { HiCalendarDays } from "react-icons/hi2";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import {ReactElement} from "react";

const routinePoints = [
    {
        point: "Use custom exercises.",
        icon: "pencil"
    },
    {
        point: "Track progress visually through graphs.",
        icon: "chart"
    }
]

const whyPoints = [
    {
        point: "Maintain and create your own schedules.",
        icon: "calendar"
    },
    {
        point: "No fluff like up-selling coaching or irrelevant services.",
        icon: "money"
    }
]

function GetPointIcon(icon: string) : ReactElement | undefined {
    switch (icon)
    {
        case "chart":
            return <FaChartLine />;
        case "pencil":
            return (<LuPencilRuler />);
        case "money":
            return (<RiMoneyDollarCircleLine size="18px" />);
        case "calendar":
            return (<HiCalendarDays size="18px" />);
    }

    return undefined;
}

export default function Home() {
    return (
        <main>
            <div className="rounded-md py-4 bg-[url('/hero.jpg')] bg-cover bg-bottom h-[60vh] flex flex-col justify-end items-center">
                <h1 className="text-4xl libre-franklin-h1 tracking-wider text-center text-white shadow-black drop-shadow-lg">FORGE RESULTS THROUGH DYNAMIC
                    ROUTINES</h1>
                <h3 className="text-lg libre-franklin-h4 tracking-wider text-center text-slate-200 pt-2 px-2">Create workouts easily
                    and LiftMore weight.</h3>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 py-4">
                <Card className="">
                    <CardHeader>
                        <CardTitle>Why LiftMore?</CardTitle>
                        <CardDescription>LiftMore is for people who want to streamline their current workflow.</CardDescription>
                        <CardContent>
                            <div className="pt-2">
                                {whyPoints.map((point, index) => (
                                    <div key={index}
                                         className="grid grid-cols-[32px_1fr] items-start pb-2 last:mb-0 last:pb-0">
                                        <span className="flex w-24 translate-y-1 rounded-full">
                                            {GetPointIcon(point.icon)}
                                        </span>
                                        <div className="space-y-1">
                                            <p>{point.point}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </CardHeader>
                </Card>

                <Card className="">
                    <CardHeader>
                        <CardTitle>Plan Custom Routines</CardTitle>
                        <CardDescription>
                            LiftMore offers a no-bullshit easy-to-use interface to create unlimited custom routines.
                        </CardDescription>
                        <CardContent>
                            <div className="pt-2">
                                {routinePoints.map((point, index) => (
                                    <div key={index}
                                         className="grid grid-cols-[32px_1fr] items-start pb-2 last:mb-0 last:pb-0">
                                        <span className="flex w-24 translate-y-1 rounded-full">
                                            {GetPointIcon(point.icon)}
                                        </span>
                                        <div className="space-y-1">
                                            <p>{point.point}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </CardHeader>
                </Card>

                <Card className="">
                    <CardHeader>
                        <CardTitle>Is It Free?</CardTitle>
                        <CardDescription>LiftMore is completely free-to-use for the browser and is mobile optimized.</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </main>
    )
}
