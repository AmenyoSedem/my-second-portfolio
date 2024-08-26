import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiDjango } from "react-icons/di";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl ">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-4xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-4xl"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMongodb className="text-4xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className="text-4xl text-red-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-4xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-4xl text-sky-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiDjango className="text-4xl text-green-900"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
