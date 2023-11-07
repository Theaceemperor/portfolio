

export function ServiceRow({ Service, serviceDescription, clickRedirect }) {

    return (
        <article className="bg-[url('/img/1.jpg')] bg-center bg-cover h-[50vh] sm:h-[80vh] w-[95%] rounded-md">
                <blockquote className="h-full w-full bg-black/30 flex items-center justify-center rounded-md">
                    <aside className="hover:bg-black/50 w-full h-full text-center hover:text-amber-600 text-transparent flex justify-center items-center text-3xl flex-col gap-5 rounded-md">
                        <h1>{Service}</h1>
                        <small className="hover:text-[wheat] text-lg p-2">{serviceDescription}</small>
                        <button className="hover:transition-colors hover:border-y ease-linear border-[wheat] text-[22px]"
                        onClick={clickRedirect}>
                            Book now
                        </button>
                    </aside>
                </blockquote>
            </article>
    )
}