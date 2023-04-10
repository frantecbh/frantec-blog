import { LinkedinLogo } from '@phosphor-icons/react'
import GithubLogo from '@phosphor-icons/react/dist/icons/GithubLogo'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CardPost, PostProps } from '../components/CardPost'

const Post = [
  {
    id: '1',
    title: 'Eu criei exatamente o mesmo aplicativo em React e Vue. Aqui estão as diferenças',
    post: [
      "Tendo usado o Vue no trabalho, eu tinha uma compreensão bastante sólida dele. Eu estava, no entanto, curioso para saber como era a grama do outro lado da cerca — a grama neste cenário sendo React.",
      "Eu li os documentos do React e assisti a alguns vídeos tutoriais e, embora fossem ótimos e tudo mais, o que eu realmente queria saber era o quão diferente o React era do Vue. Por “diferentes”, não quis dizer coisas como se ambos tinham DOMS virtuais ou como eles processavam as páginas. Eu queria que alguém se desse ao trabalho de explicar o código! Eu queria encontrar um artigo que explicasse isso para que alguém novo no Vue ou no React (ou no desenvolvimento da Web como um todo) pudesse entender melhor as diferenças entre os dois.",
      "Infelizmente, não consegui encontrar nada que abordasse isso. Então percebi que teria que ir em frente e construir isso sozinho para ver as semelhanças e diferenças. Ao fazer isso, pensei em documentar todo o processo para que finalmente exista um artigo sobre isso.",
      "Decidi tentar criar um To Do App bastante padrão que permite ao usuário adicionar e excluir itens da lista. Ambos os aplicativos foram criados usando as CLIs padrão (create-react-app para React e vue-cli para Vue).A propósito, CLI significa Interface de linha de comando. 🤓",
    ],

  },
  {
    id: '2',
    title: 'Eu criei exatamente o mesmo aplicativo em React e Vue. Aqui estão as diferenças',
    post: [
      "Quando comecei a usar javascript, percebi o quanto é fundamental aprender a manipular arrays, pois passamos a maior parte do tempo trabalhando com eles.",
      "Eu li os documentos do React e assisti a alguns vídeos tutoriais e, embora fossem ótimos e tudo mais, o que eu realmente queria saber era o quão diferente o React era do Vue. Por “diferentes”, não quis dizer coisas como se ambos tinham DOMS virtuais ou como eles processavam as páginas. Eu queria que alguém se desse ao trabalho de explicar o código! Eu queria encontrar um artigo que explicasse isso para que alguém novo no Vue ou no React (ou no desenvolvimento da Web como um todo) pudesse entender melhor as diferenças entre os dois.",
      "Infelizmente, não consegui encontrar nada que abordasse isso. Então percebi que teria que ir em frente e construir isso sozinho para ver as semelhanças e diferenças. Ao fazer isso, pensei em documentar todo o processo para que finalmente exista um artigo sobre isso.",
      "Decidi tentar criar um To Do App bastante padrão que permite ao usuário adicionar e excluir itens da lista. Ambos os aplicativos foram criados usando as CLIs padrão (create-react-app para React e vue-cli para Vue).A propósito, CLI significa Interface de linha de comando. 🤓",
    ],

  }
]



export const Home = () => {

  const [postagens, setPostagens] = useState<PostProps[]>([])

  useEffect(() => {
 

  }, [])



  return (
    <>
      <div className='bg-Profile border border-Border w-full min-h-56 md:-mt-20 mt-4 py-8 px-10 flex flex-col gap-8 items-center justify-center md:flex-row mb-16 rounded-lg'>

        <img className='h-36 w-36 rounded-full md:rounded-md' src="https://avatars.githubusercontent.com/u/60010539?v=4" alt="" />


        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row items-center justify-between mb-2'>
            <h1 className='text-Title font-Nunito font-bold text-2xl'>Francisco Menezes</h1>

            <div className='flex gap-2'>
              <Link to='#' className='flex gap-1'>
                <LinkedinLogo className='text-Subtitle text-2xl font-bold' />
                <p className='text-Subtitle'>Linkedin</p>
              </Link>
              <Link to='#' className='flex gap-1'>
                <GithubLogo className='text-Subtitle text-2xl font-bold' />
                <p className='text-Subtitle'>GitHub</p>
              </Link>
            </div>


          </div>
          <p className='mb-6 text-Text'>Apaixonado por tecnologia e desenvolvimento de software. Buscando melhor qualificação no seguimento de Desenvolvimento de software com as melhores praticas.</p>
          <div className='flex flex-col'>
            <p className='mb-2 text-Text'>Aqui irei compartilhar Cadastre-se para receber novos posts.</p>
            <form className='flex gap-3' action="">
              <input className='flex-1 bg-Input outline-none border border-Border h-12 text-Subtitle px-2 rounded-md focus:border-Brand-blue ' type="text" />
              <button className='bg-Brand-blue px-6 rounded-md' type="submit">Cadastrar</button>
            </form>
          </div>

        </div>

      </div>

      <div className='mb-12'>
        <div className='flex items-center justify-between mb-3'>
          <p className='font-bold text-lg font-Nunito text-Subtitle '>Publicações</p>
          <span className='font-Nunito text-Subtitle text-sm '>6 publicações</span>
        </div>
        <input className='w-full bg-Input outline-none border border-Border h-12 text-Subtitle px-2 rounded-md focus:border-Brand-blue ' type="text" placeholder='Buscar Conteúdo' />

      </div>

      <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
        <CardPost />
        <CardPost />
        <CardPost />

      </div>

    </>
  )
}

