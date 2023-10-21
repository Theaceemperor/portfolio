import { IoMdStats } from "react-icons/io";


export function SpadesStats() {

    return (
        <section id="stats">
            <div className="px-2 flex flex-col justify-center items-center my-10 gap-5" id="stats">
                <h3 className="flex gap-1 text-lg font-bold items-center">Our stats <IoMdStats /></h3>
                <article className="text-center flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-5">
                    <blockquote className="flex flex-col gap-5 p-1 border-l border-amber-600 px-1 border-t rounded-md">
                        <IoMdStats />
                        <span>
                            <h5>Projects Completed</h5>
                            <p>100+</p>
                        </span>
                    </blockquote>
                    <blockquote className="flex flex-col gap-5 p-1 sm:border-l border-amber-600 px-1 sm:border-b rounded-md border-t border-r sm:border-t-transparent sm:border-r-transparent">
                        <IoMdStats />
                        <span>
                            <h5>Delivery rate</h5>
                            <p>100%</p>
                        </span>
                    </blockquote>
                </article>
                <article className="text-center flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-5">
                    <blockquote className="flex flex-col gap-5 p-1 sm:border-r sm:border-l-transparent border-l border-amber-600 px-1 border-t rounded-md">
                        <IoMdStats />
                        <span>
                            <h5>Positive reviews</h5>
                            <p>97%</p>
                        </span>
                    </blockquote>
                    <blockquote className="flex flex-col gap-5 p-1 border-r border-amber-600 px-1 sm:border-b border-t sm:border-t-transparent rounded-md">
                        <IoMdStats />
                        <span>
                            <h5>Business modules</h5>
                            <p>20+</p>
                        </span>
                    </blockquote>
                </article>
            </div>
        </section>
    )
}