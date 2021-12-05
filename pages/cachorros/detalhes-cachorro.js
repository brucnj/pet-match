export default function DetalhesCachorro() {
    return(
        <div className="py-8">
            <div className="container px-8">
                <div className="grid grid-cols-1">
                    <div className="block mx-auto overflow-hidden w-96 h-96 group rounded-xl">
                        <img src="https://images.unsplash.com/photo-1519120430-a7d2287c986a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="object-cover w-full h-full transition-all duration-300 ease-out" />
                    </div>
                    <div className="block max-w-full py-8">
                        <span className="px-5 py-1 text-left text-white rounded-full" style={{ backgroundColor: '#DC919B' }}>Fêmea</span>
                        <h1 className="pt-5 pb-2 text-4xl font-extrabold text-left">Brisa</h1>
                        <p className="text-sm font-light text-left text-gray-500">Cachorra brincalhona e divertida para crianças, tem apenas 1 ano e 9 meses de vida, todas as vacinas foram tomadas até agora. Lorem Ipsum olor sit amet.</p>
                        
                        <a href="#" className="text-xl text-center">Contatar o Tutor</a>
                    </div>
                </div>
            </div>

        </div>
    )
}