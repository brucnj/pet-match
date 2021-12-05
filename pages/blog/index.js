import Link from 'next/link'

export default function Blog() {
    return (
        <div className="py-16 -mt-3 bg-white">
            <div className="px-8 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 ">
                <h2 className="pb-10 text-4xl font-bold text-center">Posts</h2>
                <div className="grid gap-x-8 gap-y-20 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                    <Link href='/blog/blogPost/post-1'>
                        <div className="relative">
                            <a href="#_" className="block overflow-hidden group rounded-xl">
                                <img src="https://www.petlove.com.br/dicas/wp-content/uploads/2021/11/gato-doente-petlove.jpg" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                            </a>
                            <div className="relative w-full mt-5">
                                <a href="#" className="block pb-5 mb-3 border-b hover:underline">
                                    <h2 className="text-2xl font-bold text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Você sabe o que é FIV e FELV?</h2>
                                </a>
                                <div className="container inline-flex">
                                    <a href="#_" className="w-1/2 font-medium underline text-primary">Ler mais</a>
                                    <span className="w-1/2 font-light text-right text-gray-400">19/09/2021</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className="relative">
                        <a href="#_" className="block overflow-hidden group rounded-xl">
                            <img src="https://www.petlove.com.br/dicas/wp-content/uploads/2021/11/cachorro-com-fome-petlove.jpg" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                        </a>
                        <div className="relative mt-5">
                            <a href="#" className="block pb-5 mb-3 border-b hover:underline">
                                <h2 className="text-2xl font-bold text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Hiperfagia: tem um cachorro com muita fome?</h2>
                            </a>
                            <div className="container inline-flex">
                                <a href="#_" className="w-1/2 font-medium underline">Ler mais</a>
                                <span className="w-1/2 font-light text-right text-gray-400">19/09/2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <a href="#_" className="block overflow-hidden group rounded-xl">
                            <img src="https://www.petlove.com.br/dicas/wp-content/uploads/2021/10/cachorro-lambendo-pata-Petlove.jpg" className="object-cover w-full h-64 transition-all duration-300 ease-out group-hover:scale-110" alt="" />
                        </a>
                        <div className="relative mt-5">
                            <a href="#" className="block pb-5 mb-3 border-b hover:underline">
                                <h2 className="text-2xl font-bold text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Por que meu cachorro lambe a pata</h2>
                            </a>
                            <div className="container inline-flex">
                                <a href="#_" className="w-1/2 font-medium underline">Ler mais</a>
                                <span className="w-1/2 font-light text-right text-gray-400">19/09/2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <a href="#_" className="block overflow-hidden group rounded-xl">
                            <img src="https://www.petlove.com.br/dicas/wp-content/uploads/2021/10/gato-pode-morango-Petlove.jpg" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                        </a>
                        <div className="relative w-full mt-5">
                            <a href="#" className="block pb-5 mb-3 border-b hover:underline">
                                <h2 className="text-2xl font-bold text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Gato pode comer morango?</h2>
                            </a>
                            <div className="container inline-flex">
                                <a href="#_" className="w-1/2 font-medium underline text-primary">Ler mais</a>
                                <span className="w-1/2 font-light text-right text-gray-400">04/12/2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <a href="#_" className="block overflow-hidden group rounded-xl">
                            <img src="https://www.petlove.com.br/dicas/wp-content/uploads/2021/12/cachorro-escondido-petlove.jpg" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                        </a>
                        <div className="relative w-full mt-5">
                            <a href="#" className="block pb-5 mb-3 border-b hover:underline">
                                <h2 className="text-2xl font-bold text-black transition-colors duration-200 hover:text-deep-purple-accent-700">10 dicas para lidar com cachorros com medo de fogos</h2>
                            </a>
                            <div className="container inline-flex">
                                <a href="#_" className="w-1/2 font-medium underline text-primary">Ler mais</a>
                                <span className="w-1/2 font-light text-right text-gray-400">04/12/2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <a href="#_" className="block overflow-hidden group rounded-xl">
                            <img src="https://www.petlove.com.br/dicas/wp-content/uploads/2021/11/gato-rua-petlove.jpg" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                        </a>
                        <div className="relative w-full mt-5">
                            <a href="#" className="block pb-5 mb-3 border-b hover:underline">
                                <h2 className="text-2xl font-bold text-black transition-colors duration-200 hover:text-deep-purple-accent-700">entenda porque o seu gato não deve sair sozinho</h2>
                            </a>
                            <div className="container inline-flex">
                                <a href="#_" className="w-1/2 font-medium underline text-primary">Ler mais</a>
                                <span className="w-1/2 font-light text-right text-gray-400">04/12/2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}