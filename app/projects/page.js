"use client";

import Image from "next/image";
import { useState } from "react";

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Custom Peg Wall & Built-In Desk",
            description:
                "A modern workspace featuring a custom peg wall with a built-in desk, perfect for organizing and maximizing space. The sleek black and wood tones create a clean, contemporary look that’s both stylish and functional.",
            imageSrc: "/projects/custom_peg_wall_built_in_desk.jpg",
        },
        {
            title: "Living Room with Warm Accents and Neutral Tones",
            description:
                "A sophisticated living space featuring abstract art and a sleek black console table, complemented by warm lighting and neutral tones. The combination of modern decor and organic shapes creates a balanced, inviting atmosphere.",
            imageSrc: "/projects/living_room.jpg",
        },
        {
            title: "Cozy Bedroom with Wall Panels",
            description:
                "A cozy bedroom featuring a panel accent wall, modern art, and a plush, layered bed in soothing neutral tones. The space is elegantly lit with a pendant light and bedside lamps, creating a warm and inviting atmosphere.",
            imageSrc: "/projects/bedroom.jpg",
        },
        {
            title: "Modern Kitchen wiith Black Cabinetry",
            description:
                "A sleek and minimalist kitchen design with clean lines and modern finishes, perfect for contemporary living.",
            imageSrc: "/projects/kitchen.jpg",
        },
        {
            title: "Elegant Living Room with a Modern Fireplace",
            description:
                "A warm and inviting living room with a modern fireplace, combining comfort with style.",
            imageSrc: "/projects/living_room_with_fireplace.jpg",
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedProject(null);
    };

    return (
        <main className="bg-gray-100 min-h-screen py-12 pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out relative h-112"
                        >
                            <Image
                                src={project.imageSrc}
                                alt={project.title}
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-10">
                                    {project.title}
                                </h2>
                            </div>
                            <button
                                onClick={() => openModal(project)}
                                className="absolute bottom-4 right-4 px-3 py-2 bg-gray-700 text-white text-sm font-medium rounded-md hover:bg-gray-600 transition-colors duration-300 ease-in-out opacity-80"
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {isOpen && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
                    <div className="bg-white p-6 rounded-lg max-w-lg w-full relative transform transition-transform duration-300 ease-in-out scale-95">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </button>
                        <Image
                            src={selectedProject.imageSrc}
                            alt={selectedProject.title}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover mt-4"
                        />
                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            {selectedProject.title}
                        </h2>
                        <p className="text-gray-600 mt-2">{selectedProject.description}</p>
                    </div>
                </div>
            )}
        </main>
    );
}
