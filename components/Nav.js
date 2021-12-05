import Image from 'next/image'
import logo from '../public/logo-branco.svg'
import logoPreenchido from '../public/logo-preenchido.svg'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

const Nav = () =>{
    const currentPath = useRouter().pathname;

    return(
        <div class="navbar mb-2 z-10 shadow-lg h-24 text-neutral-content" style={{ background: 'transparent' }}>
            <div class="px-10 mx-2 navbar-start">
                {currentPath == '/' ?
                    <Image src={logo} width={65} height={65} /> :
                    <Image src={logoPreenchido} width={65} height={65} />
                }
                
            </div>
            <div class="hidden px-2 mx-2 navbar-center md:flex">
                <div class="flex items-stretch text-white">
                    <Link href="/">
                        <a class="btn btn-ghost btn-sm rounded-btn"> Home </a>
                    </Link>

                    <Link href="/gatos">
                        <a class="btn btn-ghost btn-sm rounded-btn"> Gatos </a> 
                    </Link>

                    <Link href="/cachorros">
                        <a class="btn btn-ghost btn-sm rounded-btn"> Cachorros </a>
                    </Link>

                    <Link href="/blog">
                        <a class="btn btn-ghost btn-sm rounded-btn"> Blog </a>
                    </Link>
                </div>
            </div>
            <div class="navbar-end px-10">
                <Link href="/gatos">
                    <a class="btn btn-accent">Achar seu Pet</a>
                </Link>
            </div>
      </div>
    )
}

export default Nav