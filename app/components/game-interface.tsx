import { Settings, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function GameInterface() {
    return (
        <div className="min-h-screen bg-gray-900 font-sans text-gray-100">
            {/* Top bar */}
            <div className="flex items-center justify-between bg-gray-800 p-2">
                <div className="flex space-x-4">
                    {["green", "yellow", "purple", "orange", "blue"].map((color, index) => (
                        <div key={color} className="flex items-center space-x-1">
                            <div className={`h-3 w-3 rounded-full bg-${color}-500`}></div>
                            <span className="text-sm">36.4k</span>
                        </div>
                    ))}
                </div>
                <Settings className="h-6 w-6" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-orange-900 to-blue-900 p-2">
                <div className="flex items-center space-x-2">
                    <Image src="/placeholder.svg" alt="Planet" width={40} height={40} className="rounded-full" />
                    <div>
                        <div className="text-xs">SELECTED PLANET</div>
                        <div className="font-bold">CERBERUS</div>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="text-right">
                        <div className="text-xs">Commander</div>
                        <div className="font-bold">Name</div>
                    </div>
                    <Image src="/placeholder.svg" alt="Commander" width={40} height={40} className="rounded-full" />
                </div>
            </div>

            {/* Main content */}
            <div className="space-y-4 p-4">
                <div className="space-y-4 rounded-lg bg-gray-800 p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <span className="font-bold">FIGHTER</span>
                            <div className="flex items-center space-x-1">
                                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-600">
                                    <span className="text-xs">36</span>
                                </div>
                                <div className="flex space-x-0.5">
                                    <div className="h-3 w-1 bg-gray-600"></div>
                                    <div className="h-3 w-1 bg-gray-600"></div>
                                </div>
                            </div>
                        </div>
                        <ChevronUp className="h-6 w-6" />
                    </div>
                    <p className="text-sm text-gray-400">
                        Fighters serve best as support ships in battle. Their agility and speed, paired with the number in which they often appear,
                        can provide a shield-like buffer for bigger ships that are not quite as maneuverable.
                    </p>
                    <div className="flex justify-between">
                        {["green", "purple", "blue", "orange", "cyan"].map((color) => (
                            <div key={color} className="flex items-center space-x-1">
                                <div className={`h-3 w-3 rounded-full bg-${color}-500`}></div>
                                <span className="text-sm">36.4k</span>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="text-sm">Health</div>
                            <div className="flex items-center space-x-2">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600">
                                    <span className="text-xs">50</span>
                                </div>
                                <div className="h-2 flex-grow rounded-full bg-gray-700">
                                    <div className="h-full w-1/2 rounded-full bg-green-500"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-sm">Cargo</div>
                            <div className="flex items-center space-x-2">
                                <Image src="/placeholder.svg" alt="Cargo" width={24} height={24} />
                                <span>50</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <div className="text-sm">Attack</div>
                            {[37, 25, 30].map((value, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Image src="/placeholder.svg" alt="Attack" width={24} height={24} />
                                    <div className="h-2 flex-grow rounded-full bg-red-900">
                                        <div className="h-full bg-red-500" style={{ width: `${value}%` }}></div>
                                    </div>
                                    <span className="text-sm">{value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm">Defence</div>
                            {[32, 65, 49].map((value, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Image src="/placeholder.svg" alt="Defence" width={24} height={24} />
                                    <div className="h-2 flex-grow rounded-full bg-blue-900">
                                        <div className="h-full bg-blue-500" style={{ width: `${value}%` }}></div>
                                    </div>
                                    <span className="text-sm">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="rounded bg-gradient-to-r from-yellow-600 to-red-600 py-2 text-white">LEVEL UP</button>
                        <button className="rounded bg-gradient-to-r from-blue-600 to-cyan-600 py-2 text-white">CRAFT NOW</button>
                    </div>
                </div>
                {["FRIGATE", "CRUISER"].map((ship) => (
                    <div key={ship} className="rounded-lg bg-gray-800 p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <span className="font-bold">{ship}</span>
                                <div className="flex items-center space-x-1">
                                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-600">
                                        <span className="text-xs">36</span>
                                    </div>
                                    <div className="flex space-x-0.5">
                                        <div className="h-3 w-1 bg-gray-600"></div>
                                        <div className="h-3 w-1 bg-gray-600"></div>
                                    </div>
                                </div>
                            </div>
                            <ChevronDown className="h-6 w-6" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom navigation */}
            <div className="fixed bottom-0 left-0 right-0 flex justify-between bg-gray-800 p-2">
                {["Personal", "Universe", "Fleet", "Starship Details", "Resources"].map((item) => (
                    <div key={item} className="flex flex-col items-center">
                        <Image src="/placeholder.svg" alt={item} width={24} height={24} />
                        <span className="text-xs">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
