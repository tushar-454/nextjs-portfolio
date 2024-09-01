import bootstrap from '@/assets/bootstrap.png';
import css from '@/assets/css.png';
import express from '@/assets/expressjs.png';
import git from '@/assets/git.png';
import github from '@/assets/github.png';
import html from '@/assets/html.png';
import js from '@/assets/js.png';
import mongodb from '@/assets/mongodb.png';
import nextjs from '@/assets/nextjs.png';
import node from '@/assets/node-js.png';
import postman from '@/assets/postman.png';
import react from '@/assets/react.png';
import redux from '@/assets/redux.png';
import tailwind from '@/assets/tailwindcss.png';
import typescript from '@/assets/typescript.png';
import vscode from '@/assets/vscode.png';
import vuejs from '@/assets/vuejs.png';
import Image from 'next/image';

const TechStackList = () => {
  return (
    <div className='my-20 flex flex-wrap justify-center gap-10'>
      <Image
        data-aos='zoom-in'
        src={html}
        alt='html'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={css}
        alt='css'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={bootstrap}
        alt='bootstrap'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={tailwind}
        alt='tailwind'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={js}
        alt='js'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={typescript}
        alt='typescript'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={react}
        alt='react'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={vuejs}
        alt='vuejs'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={nextjs}
        alt='nextjs'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={redux}
        alt='redux'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={node}
        alt='node'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={express}
        alt='express'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={mongodb}
        alt='mongodb'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={vscode}
        alt='vscode'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={git}
        alt='git'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={github}
        alt='github'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        data-aos='zoom-in'
        src={postman}
        alt='postman'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
    </div>
  );
};

export default TechStackList;
