'use client'
import Image from "next/image";
import React from "react";

export default function Timer({event,time,eventImage,hidden}) {

    React.useEffect(() => {
        try {
            const countdown = () => {
                const countDate = new Date(`${time}`).getTime();
                const now = new Date().getTime();
                const gap = countDate - now;
            
                //How the fuck does the time work?
                const second = 1000;
                const minute = second * 60;
                const hour = minute * 60;
                const day = hour * 24;
            
                //Calculate the shit
                const textDay = Math.floor(gap / day);
                const textHour = Math.floor((gap % day) / hour);
                const textMinute = Math.floor((gap % hour) / minute);
                const textSecond= Math.floor((gap % minute) / second);
            
                document.querySelector('.day').innerText = textDay;
                document.querySelector('.hour').innerText = textHour;
                document.querySelector('.minute').innerText = textMinute;
                document.querySelector('.second').innerText = textSecond;
            
                // if(gap < 10000){
                //     launchTheBullshit();
                // }
            };
            
            setInterval(countdown, 1000);
        } catch (error) {
            console.error(error);
        }
    })

    return (
        <section className="coming-soon">
            <div>
                <h1 className={`mb-5 text-xl px-2 text-center ${hidden}`}>{event}</h1>
                <div className={"countdown"}>
                    <div className="container-day">
                        <h3 className="day">Time</h3>
                        <h3>Day(s)</h3>
                    </div>
                    <div className="container-hour">
                        <h3 className="hour">Time</h3>
                        <h3>Hour(s)</h3>
                    </div>
                    <div className="container-minute">
                        <h3 className="minute">Time</h3>
                        <h3>Minute(s)</h3>
                    </div>
                    <div className="container-second">
                        <h3 className="second">Time</h3>
                        <h3>Second(s)</h3>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col gap-1 w-full mt-5"}>
                <Image 
                width={560}
                height={560}
                src={eventImage}
                alt="timer image"
                className="w-[100%] h-auto rounded-lg"
                />
            </div>
        </section>
    )
}