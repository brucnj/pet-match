import Image from 'next/image'
import logo from '../public/logo-branco.svg'

const Nav = () =>{
    return(
        <div class="navbar mb-2 z-10 shadow-lg h-24 text-neutral-content" style={{ background: 'transparent' }}>
            <div class="px-10 mx-2 navbar-start">
                <Image src={logo} width={65} height={65} />
            </div>
            <div class="hidden px-2 mx-2 navbar-center md:flex">
                <div class="flex items-stretch text-white">
                    <a class="btn btn-ghost btn-sm rounded-btn"> Home </a>
                    <a class="btn btn-ghost btn-sm rounded-btn"> Gatos </a>
                    <a class="btn btn-ghost btn-sm rounded-btn"> Cachorros </a>
                    <a class="btn btn-ghost btn-sm rounded-btn"> Blog </a>
                </div>
            </div>
            <div class="navbar-end px-10">
                <button class="btn btn-accent">Cadastrar-se</button>
            </div>
      </div>
    )
}

export default Nav