import Link from 'next/link'

export default function Gatos() {
    const hero = {
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        placeItems: 'center',
        width: '100%',
        backgroundImage: 'url(https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    }

    return (
        <div>
            <div className="flex w-full min-h-screen sm:align-middle -mt-28 hero-border" style={hero}>
                <div className="absolute relative z-10 bg-gray-900"></div>
                <div className="container mx-auto sm:px-0 sm:mr-56 sm:text-right text-neutral-content">
                    <div className="max-w-lg px-5 text-white sm:text-black">
                        <h1 className="mx-auto mb-5 text-4xl font-bold sm:text-5xl">Cachorros</h1>
                        <p className="mb-5">*Miau* Eles dizem, isso quer dizer que
                            querem você como família. </p>
                    </div>
                </div>
            </div>

            <div class="bg-white">
                <div class="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
                    <div class="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
                        <Link href="/cachorros/detalhes-cachorro">
                            <div class="relative py-3">
                                <a href="#_" class="block overflow-hidden w-96 h-96 mx-auto group rounded-xl">
                                    <img src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" class="object-cover w-full h-full transition-all duration-300 ease-out group-hover:scale-110" alt="" />
                                </a>
                                <div class="relative mt-5">
                                    <a href="#" class="block mb-3 hover:underline">
                                        <h2 class="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Lola</h2>
                                    </a>
                                    <p class="mb-4 text-gray-500">Cachorra brincalhona e divertida para crianças, por...</p>
                                    <a class="font-medium underline" style={{ color: '#DC919B' }}>Ver mais</a>
                                </div>
                            </div>
                        </Link>
                        
                        <div class="relative py-3">
                            <a href="#_" class="block overflow-hidden w-96 h-96 mx-auto group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" class="object-cover w-full h-full transition-all duration-300 ease-out group-hover:scale-110" alt="" />
                            </a>
                            <div class="relative mt-5">
                                <a href="#" class="block mb-3 hover:underline">
                                    <h2 class="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Lady</h2>
                                </a>
                                <p class="mb-4 text-gray-500">A pequenina Lady nasceu no terreno do vizinho, mede 75 ...</p>
                                <a class="font-medium underline" style={{ color: '#DC919B' }}>Ver mais</a>
                            </div>
                        </div>

                        <div class="relative py-3">
                            <a href="#_" class="block overflow-hidden w-96 h-96 mx-auto group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1431613567644-1c0d5d7d1c8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="object-cover w-full h-full transition-all duration-300 ease-out group-hover:scale-110" alt="" />
                            </a>
                            <div class="relative mt-5">
                                <a href="#" class="block mb-3 hover:underline">
                                    <h2 class="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Bob</h2>
                                </a>
                                <p class="mb-4 text-gray-500">O Bob é um cachorrinho muito amigável, porém que se tor...</p>
                                <a class="font-medium underline" style={{ color: '#DC919B' }}>Ver mais</a>
                            </div>
                        </div>

                        <div class="relative py-3">
                            <a href="#_" class="block overflow-hidden w-96 h-96 mx-auto group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1517854883321-ab2a463cce90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" class="object-cover w-full h-full transition-all duration-300 ease-out group-hover:scale-110" alt="" />
                            </a>
                            <div class="relative mt-5">
                                <a href="#" class="block mb-3 hover:underline">
                                    <h2 class="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Belinha</h2>
                                </a>
                                <p class="mb-4 text-gray-500">A Belinha vivia uma boa vida, mas infelizmente o meu sob...</p>
                                <a class="font-medium underline" style={{ color: '#DC919B' }}>Ver mais</a>
                            </div>
                        </div>

                        <div class="relative py-3">
                            <a href="#_" class="block overflow-hidden w-96 h-96 mx-auto group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1584453147785-df3e8fbcf048?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="object-cover w-full h-full transition-all duration-300 ease-out group-hover:scale-110" alt="" />
                            </a>
                            <div class="relative mt-5">
                                <a href="#" class="block mb-3 hover:underline">
                                    <h2 class="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Rex</h2>
                                </a>
                                <p class="mb-4 text-gray-500">Rex é um cachorro que desde o parto viveu aqui na fazenda...</p>
                                <a class="font-medium underline" style={{ color: '#DC919B' }}>Ver mais</a>
                            </div>
                        </div>

                        <div class="relative py-3">
                            <a href="#_" class="block overflow-hidden w-96 h-96 mx-auto group rounded-xl">
                                <img src="https://images.unsplash.com/photo-1513189643435-49f97650b367?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="object-cover w-full h-full transition-all duration-300 ease-out group-hover:scale-110" alt="" />
                            </a>
                            <div class="relative mt-5">
                                <a href="#" class="block mb-3 hover:underline">
                                    <h2 class="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Thor</h2>
                                </a>
                                <p class="mb-4 text-gray-500">Simplemente a vizinhança ADORA o Thor, um amiguinho...</p>
                                <a class="font-medium underline" style={{ color: '#DC919B' }}>Ver mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}