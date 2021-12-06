import Link from 'next/link'

export default function Home() {
  const hero = {
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    placeItems: 'center',
    width: '100%',
    backgroundImage: 'url(./hero-index.jpg)',
  }

  return (
    <div>
      <div className="z-0 flex w-full min-h-screen sm:align-middle -mt-28 hero-border" style={hero}>
          <div className="container mx-auto px-14 sm:px-0 sm:ml-56 sm:text-left text-neutral-content">
            <div className="max-w-md text-white">
              <h1 className="mb-5 text-4xl font-bold sm:text-5xl">Precisa de um amiguinho?</h1>
              <p className="mb-5">Por aqui, você consulta ONGs, filtra animais e veja qual se encaixaria melhor com você!</p>
              <Link href="/gatos">
                <a className="w-full text-center sm:w-2/4 btn btn-primary px-7">Encontre aqui!</a>
              </Link>
            </div>
        </div>
      </div>

      <section className="py-10 sm:px-16">
        <div className="max-w-6xl py-12 mx-auto">
          <div className="w-full pb-8 text-center">
            <h1 className="pb-2 mb-3 text-3xl font-bold md:text-4xl lg:text-5xl font-heading">Como começar?</h1>

            <p className="w-3/4 mx-auto text-base font-light">Aqui é simplesmente um banco de dados, cheio de animais que querem ser adotados, comece a sua procura agora mesmo!</p>
          </div>
          <div className="container px-10 sm:px-0 sm:mx-auto sm:inline-flex">
            <Link href='/gatos'>
              <a className="flex flex-col p-6 mb-8 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow sm:mb-0 hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-secondary lg:h-20 lg:w-20">
                  <img src="https://img.icons8.com/pastel-glyph/50/000000/cat--v3.png" />
                </div>
                <div className="flex-1">
                  <h5 className="mt-1 mb-2 text-xl font-bold lg:text-2xl">Gatos</h5>
                  <p className="mb-6 text-lg font-light text-gray-600"> Venha ver quais gatos precisam de uma casa nova!</p>
                  <span className="flex items-center text-lg font-bold text-secondary">
                    Conhecer os gatinhos
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </div>
              </a>
            </Link>
            <Link href="/cachorros">
              <a href="#_" className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
                <div className="flex items-center justify-center w-16 h-16 border border-indigo-200 shadow-inner bg-accent rounded-xl lg:h-20 lg:w-20">
                  <img src="https://img.icons8.com/pastel-glyph/64/000000/dog--v5.png" />
                </div>
                <div className="flex-1">
                  <h5 className="mt-1 mb-2 text-xl font-bold lg:text-2xl">Cachorros</h5>
                  <p className="mb-6 text-lg font-light text-gray-600">Venha ver quais cachorros precisam de uma casa nova!</p>
                  <span className="flex items-center text-lg font-bold text-accent">
                    Conhecer os cachorrinhos
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-2 py-24 bg-accent md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Adote e seja feliz!</span>
                </h1>
                <p className="mx-auto text-base font-light sm:max-w-md lg:text-xl md:max-w-3xl">
                  Se você conseguir manter bons cuidados ao animal, tudo que ele lhe dará em troca será uma felicidade sincera e poderosa
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link href="/cachorros">
                    <a className="flex items-center px-6 py-3 mb-3 text-lg text-center text-white transition-all rounded-md bg-secondary sm:mb-0 hover:bg-opacity-80 sm:w-auto">
                      Veja os animais
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="https://placekitten.com/1000/1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="px-8 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 ">
          <h2 className="pb-10 text-4xl font-bold">Últimos Posts</h2>
          <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/blog/blogPost/post-1">
              <div className="relative">
                <a href="#_" className="block overflow-hidden group rounded-xl">
                  <img src="https://doctorzoo.com.br/wp-content/uploads/2015/03/cachorro_comendo.jpg" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                </a>
                <div className="relative w-full mt-5">
                  <a href="#" className="block pb-5 mb-3 border-b hover:underline">
                    <h2 className="text-2xl font-bold text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Qual a importância das rações de animais</h2>
                  </a>
                  <div className="container inline-flex">
                    <a href="#_" className="w-1/2 font-medium underline text-primary">Ler mais</a>
                    <span className="w-1/2 font-light text-right text-gray-400">19/09/2021</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/blogPost/post-1">
              <div className="relative">
                <a href="#_" className="block overflow-hidden group rounded-xl">
                  <img src="https://www.10wallpaper.com/wallpaper/1366x768/1311/black_cat-Animal_photo_wallpaper_1366x768.jpg" className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
                </a>
                <div className="relative mt-5">
                  <a href="#" className="block pb-5 mb-3 border-b hover:underline">
                    <h2 className="text-2xl font-bold text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Animais de cor preta e seus preconceitos</h2>
                  </a>
                  <div className="container inline-flex">
                    <a href="#_" className="w-1/2 font-medium underline">Ler mais</a>
                    <span className="w-1/2 font-light text-right text-gray-400">19/09/2021</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/blogPost/post-1">
              <div className="relative">
                <a href="#_" className="block overflow-hidden group rounded-xl">
                  <img src="https://img.freepik.com/fotos-gratis/homem-veterinario-novo-com-o-estetoscopio-jogando-com-um-cao-pequeno-bonito-cinco-altos-fundo-branco-interior_139317-2119.jpg?size=626&ext=jpg" className="object-cover w-full h-64 transition-all duration-300 ease-out group-hover:scale-110" alt="" />
                </a>
                <div className="relative mt-5">
                  <a href="#" className="block pb-5 mb-3 border-b hover:underline">
                    <h2 className="text-2xl font-bold text-black transition-colors duration-200 hover:text-deep-purple-accent-700">Levar seu bicinho no veterinario é bom?</h2>
                  </a>
                  <div className="container inline-flex">
                    <a href="#_" className="w-1/2 font-medium underline">Ler mais</a>
                    <span className="w-1/2 font-light text-right text-gray-400">19/09/2021</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-10 bg-white sm:py-20">
        <h2 className="mx-auto text-4xl font-bold text-center mb-14">Siga para novidades</h2>
        <div className="container inline-flex px-10 mx-auto">
          <div className="hidden w-1/4 sm:block">
            <img src="https://placekitten.com/280/260" className="rounded-3xl" />
          </div>
          <div className="w-full sm:w-2/4">
            <div className="border card rounded-3xl">
              <div className="card-body">
                <a href="#" className="mx-auto text-primary hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-16 h-16" fill="#a9c3b8" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <p className="pt-5 mx-auto text-xl font-light text-gray-500">Visite nosso instagram</p>
                <span className="mx-auto mt-3 text-2xl font-bold text-accent">@petmatch</span>
              </div>
            </div>
          </div>
          <div className="hidden w-1/4 sm:block">
            <img src="https://placekitten.com/280/260" className="rounded-3xl" />
          </div>
        </div>
        <div className="container inline-flex px-10 mx-auto">
          <div className="hidden w-1/4 sm:block">
            <img src="https://placekitten.com/280/260" className="rounded-3xl" />
          </div>
          <div className="hidden w-1/4 sm:block">
            <img src="https://placekitten.com/280/260" className="rounded-3xl" />
          </div>
          <div className="hidden w-1/4 sm:block">
            <img src="https://placekitten.com/280/260" className="rounded-3xl" />
          </div>
          <div className="hidden w-1/4 sm:block">
            <img src="https://placekitten.com/280/260" className="rounded-3xl" />
          </div>
        </div>
      </section>

    </div>
  )
}
