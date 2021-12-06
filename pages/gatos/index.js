export default function Gatos() {
    const hero = {
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        placeItems: 'center',
        width: '100%',
        backgroundImage: 'url(https://images.unsplash.com/photo-1506891536236-3e07892564b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80)',
    }

    return (
        <div>
            <div className="z-10 flex w-full min-h-screen sm:align-middle -mt-28 hero-border" style={hero}>
                <div className="absolute z-30 bg-black "></div>
                <div className="container mx-auto sm:px-0 sm:mr-56 sm:text-right text-neutral-content">
                    <div className="max-w-lg px-5 text-white">
                        <h1 className="mx-auto mb-5 text-4xl font-bold sm:text-5xl">Gatos</h1>
                        <p className="mb-5">*Miau* Eles dizem, isso quer dizer que
                            querem você como família. </p>
                    </div>
                </div>
            </div>

            <div class="bg-white">
                <div class="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
                    <div class="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                        <div class="relative py-3">
                            <a href="#_" class="block overflow-hidden w-80 h-80 mx-auto group rounded-xl">
                                <img src="https://images3.alphacoders.com/101/1014012.jpg" class="object-cover w-full h-full transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                            </a>
                            <div class="relative mt-5">
                                <a href="#" class="block mb-3 hover:underline">
                                    <h2 class="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Princesa</h2>
                                </a>
                                <p class="mb-4 text-gray-500">A Princesa tem só 2 aninhos, nasceu em casa, então não é ...</p>
                                <a class="font-medium underline" style={{ color: '#DC919B' }}>Ver mais</a>
                            </div>
                        </div>
                        
                        <div class="relative py-3">
                            <a href="#_" class="block overflow-hidden w-96 h-96 mx-auto group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80" class="object-cover w-full h-full transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                            </a>
                            <div class="relative mt-5">
                                <a href="#" class="block mb-3 hover:underline">
                                    <h2 class="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Luna</h2>
                                </a>
                                <p class="mb-4 text-gray-500">Luna tem 4 anos, infelizmente por motivos financeiros não...</p>
                                <a class="font-medium underline" style={{ color: '#DC919B' }}>Ver mais</a>
                            </div>
                        </div>

                        <div class="relative py-3">
                            <a href="#_" class="block overflow-hidden w-96 h-96 mx-auto group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" class="object-cover w-full h-full transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                            </a>
                            <div class="relative mt-5">
                                <a href="#" class="block mb-3 hover:underline">
                                    <h2 class="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Afrodite</h2>
                                </a>
                                <p class="mb-4 text-gray-500">Gata brincalhona e divertida, come bastante e é energética...</p>
                                <a class="font-medium underline" style={{ color: '#DC919B' }}>Ver mais</a>
                            </div>
                        </div>

                        <div class="relative py-3">
                            <a href="#_" class="block overflow-hidden w-96 h-96 mx-auto group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80" class="object-cover w-full h-full transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                            </a>
                            <div class="relative mt-5">
                                <a href="#" class="block mb-3 hover:underline">
                                    <h2 class="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Simba</h2>
                                </a>
                                <p class="mb-4 text-gray-500">Recolhido após achado em uma rua de Santos, bem ...</p>
                                <a class="font-medium underline" style={{ color: '#DC919B' }}>Ver mais</a>
                            </div>
                        </div>

                        <div class="relative py-3">
                            <a href="#_" class="block overflow-hidden w-96 h-96 mx-auto group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="object-cover w-full h-full transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                            </a>
                            <div class="relative mt-5">
                                <a href="#" class="block mb-3 hover:underline">
                                    <h2 class="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Luke</h2>
                                </a>
                                <p class="mb-4 text-gray-500">Gato crescido e aparentemente com dono ...</p>
                                <a class="font-medium underline" style={{ color: '#DC919B' }}>Ver mais</a>
                            </div>
                        </div>

                        <div class="relative py-3">
                            <a href="#_" class="block overflow-hidden w-96 h-96 mx-auto group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1518288774672-b94e808873ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1338&q=80" class="object-cover w-full h-full transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                            </a>
                            <div class="relative mt-5">
                                <a href="#" class="block mb-3 hover:underline">
                                    <h2 class="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Blue</h2>
                                </a>
                                <p class="mb-4 text-gray-500">O Blue é mais um gato que tem os cuidados da Casa de Ani...</p>
                                <a class="font-medium underline" style={{ color: '#DC919B' }}>Ver mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}