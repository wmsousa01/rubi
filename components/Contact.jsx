import React from 'react'

const Contact = () => {
  return (
    <div className='maxx-w[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center p-4'>Seja nosso cliente</h1>
        <form 
         className='max-w-[600px] m-auto'
         action='https://getform.io/f/9c45e5f1-1abd-467e-b9ad-412f459d47a4'
         method='POST'
         encType='multipart/form-data'
        >
            <div className='grid grid-cols-2 gap-2'>
                <input 
                 className='border shadow-lg p-3' 
                 type="text" 
                 placeholder='Nome' 
                 name='nome'
                 />
                <input 
                 className='border shadow-lg p-3' 
                 type="email" 
                 placeholder='Email' 
                 name="email"
                 />
            </div>
            <input className='border shadow-lg p-3 w-full my-2' 
             type="subject" 
             placeholder='Assunto' 
             name="subject"
             />
            <textarea 
              className='border shadow-lg p-3 w-full' 
              cols='' 
              rows='10' 
              placeholder='Menssagem'
              name='mensagem'
              />
            <button className='border shadow-lg p-3 w-full mt-2'>Enviar</button>
        </form>
    </div>
  )
}

export default Contact