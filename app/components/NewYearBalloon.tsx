"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { MdCelebration } from 'react-icons/md';
import { GiPartyPopper, GiPartyFlags, GiPartyHat, GiStarsStack } from 'react-icons/gi';
import { BsBalloonHeart, BsGift } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';

const NewYearBalloon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIcon, setCurrentIcon] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const { width, height } = useWindowSize();

    const messages = [
        "¡Que todos tus sueños se hagan realidad en 2025 😬!",
        "¡Que este 2025 esté lleno de amor, éxitos y muchos abrazos 🤗❤️!",
        "¡Que tengamos muchas risas y momentos juntos 😬!",
        "¡Que este 2025 este lleno de salud y felicidad para nosotros y a los que queremos 🥳!",
        "¡Que este 2025 el bienestar de tu familia este en lo mas alto 💫!",
        "¡Hagamos que el equipo pAndy y Merz pueda con todo a lo que se enfrente este año 🤗❤️🎮!",
        "¡Que tu y Gandalf estén saludables y felices 💗!",
        "¡Que este 2025 disfrutemos de nuestros juegos como nunca y encontremos muchas cosas mas que compartir juntos 🎮👾!",
        "¡Por un año 2025 lleno de nuevas oportunidades y proyectos 🏅👩‍💻👨‍💻🏆!",
        "¡Que la felicidad nos acompañe en este 2025 🤗🎉🎊🥂!"
    ];

    const finalMessage = "Gracias por este año tan maravilloso Andy, te quiero mucho! 🤗❤️";

    const celebrationIcons = [
        GiPartyPopper,
        MdCelebration,
        GiPartyHat,
        BsBalloonHeart,
        GiStarsStack,
        FaRegStar,
        BsGift
    ];

    const handleNext = () => {
        if (messageIndex < messages.length - 1) {
            setMessageIndex(prev => prev + 1);
            setCurrentIcon((prev) => (prev + 1) % celebrationIcons.length);
            setIsOpen(false);
        } else {
            setIsComplete(true);
        }
    };

    const handleClick = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    };

    const CurrentCelebrationIcon = celebrationIcons[currentIcon];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-600 to-blue-600 p-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center animate-pulse">
                Feliz Año 2025 pAndy 🤗🎉🎊🥂!!!
            </h1>

            {isOpen && <ReactConfetti width={width} height={height} />}

            <div className="relative flex flex-col items-center gap-4">
                <motion.div
                    className="cursor-pointer"
                    onClick={handleClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence>
                        {!isOpen ? (
                            <motion.div
                                className="text-red-500 text-[120px]"
                                initial={{ scale: 1 }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <CurrentCelebrationIcon className="transform rotate-45" />
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-white text-xl md:text-2xl text-center max-w-md p-6 bg-white/20 backdrop-blur-md rounded-lg shadow-xl"
                            >
                                {isComplete ? finalMessage : messages[messageIndex]}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {isOpen && !isComplete && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 px-6 py-2 bg-white text-purple-600 rounded-full font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2"
                        onClick={handleNext}
                    >
                        One more time <GiPartyFlags className="text-xl" />
                    </motion.button>
                )}
            </div>

            <footer className="absolute bottom-4 text-white/80 text-sm text-center">
                Con todo el cariño de mi corazón para mi persona favorita ❤️ Erik 
            </footer>
        </div>
    );
};

export default NewYearBalloon; 