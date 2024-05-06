import bootstrap from '@/assets/bootstrap.png';
import css from '@/assets/css.png';
import express from '@/assets/expressjs.png';
import git from '@/assets/git.png';
import github from '@/assets/github.png';
import html from '@/assets/html.png';
import js from '@/assets/js.png';
import mongodb from '@/assets/mongodb.png';
import node from '@/assets/node-js.png';
import postman from '@/assets/postman.png';
import react from '@/assets/react.png';
import tailwind from '@/assets/tailwindcss.png';
import typescript from '@/assets/typescript.png';
import vscode from '@/assets/vscode.png';
import Image from 'next/image';

const TechStackList = () => {
  return (
    <div className='my-20 grid grid-cols-3 justify-items-center gap-10 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-7'>
      <Image
        src={html}
        alt='html'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        src={css}
        alt='css'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        src={bootstrap}
        alt='bootstrap'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        src={tailwind}
        alt='tailwind'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        src={js}
        alt='js'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        src={typescript}
        alt='typescript'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        src={react}
        alt='react'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        src={node}
        alt='node'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        src={express}
        alt='express'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        src={mongodb}
        alt='mongodb'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        src={vscode}
        alt='vscode'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        src={git}
        alt='git'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        src={github}
        alt='github'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
      <Image
        src={postman}
        alt='postman'
        className='w-20 cursor-pointer rounded-xl transition-all hover:scale-105'
      />
    </div>
  );
};

export default TechStackList;
