import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import serviceIcon1 from "../assets/serviceIcon1.svg";
import serviceIcon2 from "../assets/serviceIcon2.svg";
import serviceIcon3 from "../assets/serviceIcon3.svg";
import { motion, useMotionValue } from "framer-motion";

const arrayservice = [
    {
        img:serviceIcon1,
        title:"Personalized Guidance",
        para:"We offers personalized guidance in fitness, education, finance, and habits for unlocking your full potential.",
    },
    {
        img:serviceIcon3,
        title:"Goal Achievement",
        para:"Empowers goal setting and tracking for the satisfaction of reaching milestones effortlessly.",
    },
    {
        img:serviceIcon2,
        title:"Vibrant Community",
        para:"Supportive community to share achievements, inspire others, and thrive together in a vibrant space.",
    },
 
]

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 8;
const DRAG_BUFFER = 30;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};


export default function Services() {
    const [cardIndex, setCardIndex] = useState(0);
    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setCardIndex((pv) => {
                    if (pv === arrayservice.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && cardIndex < arrayservice.length - 1) {
            setCardIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && cardIndex > 0) {
            setCardIndex((pv) => pv - 1);
        }
    };

    return (
        <>
            <div className="text-center flex flex-col  pt-20" id="services-section">
                <div className="flex justify-center">
                    <h1 className="sm:mb-10 mobile:mb-3 text-black sm:text-5xl mobile:text-3xl font-bold sm:max-w-lg mobile:max-w-[240px]">
                        Our services made for you?
                    </h1>
                </div>

                <div className="sm:flex flex-row justify-center mobile:hidden  mobile:gap-4 sm:gap-8">
                    {arrayservice.map((service, index) => {
                        return <ServiceCard key={index} {...service} />;
                    })}
                </div>

                <div className="relative overflow-hidden  py-8 sm:hidden">
                    <motion.div
                        drag="x"
                        dragConstraints={{
                            left: 35,
                            right: 15,
                        }}
                        style={{
                            x: dragX,
                        }}
                        animate={{
                            translateX: `-${cardIndex * 50}%`,
                        }}
                        transition={SPRING_OPTIONS}
                        onDragEnd={onDragEnd}
                        className="flex cursor-grab items-center active:cursor-grabbing sm:hidden gap-10"
                    >
                        {
                            arrayservice.map((service, index) => {
                                return <ServiceCard key={index} {...service} />
                            })
                        }
                    </motion.div>
                </div>
            </div>
        </>
    );
}
