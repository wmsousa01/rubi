import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import NavLogo from '../public/rubi-white.svg';
import Link from "next/link";
import empresa, { enderecoCompleto } from '../data/empresa';



function Footer() {
	return (
		<>
			<div className="bg-[#B03638] h-1/2 w-full sm:mt-52 p-20">
				<div className="flex md:flex-row flex-col justify-around items-start">
					<div className="p-5 ">
						<ul>
							<a>
            					<Image
              						src={NavLogo}
              						alt='/'
              						width='170'
              						height='70'
              						className='cursor-pointer'
            					/>
          					</a>
							<div className="flex justify-center gap-6 pb-5">
								<Link href={empresa.redes.instagram}>
								<FaInstagram className="text-2xl text-white cursor-pointer hover:text-gray-300" />
								</Link>
								<Link href={empresa.redes.facebook}>
								<FaFacebook className="text-2xl text-white cursor-pointer hover:text-gray-300" />
								</Link>
								<Link href={empresa.whatsapp.link}>
								<FaWhatsapp className="text-2xl text-white cursor-pointer hover:text-gray-300" />
								</Link>
							</div>
						</ul>
					</div>
					<div className="p-5">
						<ul>
							<p className="text-white font-bold text-2xl pb-4">Empresa</p>
							<li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
								História
							</li>
							<li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
								Missão
							</li>
						</ul>
					</div>
					<div className="p-5">
						<ul>
							<p className="text-white font-bold text-2xl pb-4">Sobre nós</p>
							<li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
								<Link href='/#about'>Quem Somos </Link>
							</li>
							<li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
								<Link href='/gallery'>Nossos Serviços</Link>
							</li>
							<li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
								<Link href='/#projects'>Clientes</Link>
							</li>
							<li className="text-gray-300 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
								<Link href='/#contact'>Contato </Link>
							</li>
						</ul>
					</div>
					<div className="p-5">
						<ul>
							<p className="text-white font-bold text-2xl pb-4">Contato</p>
							<li className="text-gray-300 text-md pb-2 font-semibold">
								<a href={`tel:${empresa.telefone.e164}`} className="hover:text-white">
									{empresa.telefone.exibicao}
								</a>
							</li>
							<li className="text-gray-300 text-md pb-2 font-semibold">
								<a href={empresa.whatsapp.link} className="hover:text-white">
									WhatsApp {empresa.whatsapp.exibicao}
								</a>
							</li>
							<li className="text-gray-300 text-md pb-2 font-semibold">
								<a href={`mailto:${empresa.email}`} className="hover:text-white">
									{empresa.email}
								</a>
							</li>
							{empresa.horarios.map((h) => (
								<li key={h.dias} className="text-gray-300 text-sm pb-1 font-normal">
									{h.dias}: {h.horario}
								</li>
							))}
						</ul>
					</div>

				</div>

				<address className="not-italic mt-10 pt-8 border-t border-white/30 text-gray-200 text-sm leading-relaxed text-center md:text-left">
					<p className="font-semibold text-white">
						{empresa.nomeFantasia} — {empresa.razaoSocial}
					</p>
					<p>CNPJ: {empresa.cnpj}</p>
					<p>{enderecoCompleto}</p>
					<p>
						Telefone: {empresa.telefone.exibicao} | E-mail: {empresa.email}
					</p>
				</address>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h3 className=" text-gray-800 font-semibold">
					© {new Date().getFullYear()} {empresa.razaoSocial} — Todos os direitos reservados | Desenvolvido ❤ pela{" "}
					<span className="hover:text-red-600 font-semibold cursor-pointer">
						Sousas Midia{" "}
					</span>
				</h3>
			</div>
		</>
	);
}

export default Footer;
