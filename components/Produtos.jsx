import React from 'react';
import { FaTeeth, FaGlobe , FaCog, FaSquare, FaSquareFull, FaSquarespace, FaStethoscope, FaHeartbeat } from 'react-icons/fa';
import Image from 'next/image';
import ProdutoImg from '../public/assets/pr-img-1.png'


const Skills = () => {
  return (
    <div id='focus' className='h-full mx-auto bg-[#B03638] text-white'>
      <h1 className='text-4xl font-bold text-center p-4'>Nosso Foco</h1>
      <h2 className='text-sm text-center p-4'>Temos as melhores opções de produtos hospitalares para sua empresa</h2>
      <div className='relative flex justify-center p-4'></div>
      
         <div className="flex flex-wrap items-center pt-0">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full px-4">
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="bg-white shadow-lg rounded-lg p-4">
                    <h1 className='text-[#B03638]'><FaStethoscope /></h1>
                      <p className="text-lg text-[#B03638] mt-4 font-semibold">
                        Cirurgico
                      </p>
                      <p className="text-sm text-[#B03638] mt-4 font-thin">
                        As melhores linhas de materiais cirurgicos você encontra aqui
                      </p>
                    

                    </div>
                  </a>
                  <a>
                    <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
                    <h1 className='text-[#B03638]'><FaTeeth /></h1>
                      <p className="text-lg text-[#B03638] mt-4 font-semibold">
                        Odontologicos
                      </p>
                      <p className="text-sm text-[#B03638] mt-4 font-thin">
                        As melhores linhas de materiais cirurgicos você encontra aqui
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full px-4">
                  <a
                  >
                    <div className="bg-white shadow-lg rounded-lg p-4">
                      <h1 className='text-[#B03638]'><FaHeartbeat /></h1>
                      <p className="text-lg text-[#B03638] mt-4 font-semibold">
                       Estéticos
                      </p>
                      <p className="text-sm text-[#B03638] mt-4 font-thin">
                        As melhores linhas de materiais cirurgicos você encontra aqui
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto">
                <Image
              	    src={ProdutoImg}
              		alt='/'
              		width='1239'
              		height='960'
              		className='cursor-pointer'
            	/>
            </div>
          </div>
          </div>
  );
};

export default Skills;
