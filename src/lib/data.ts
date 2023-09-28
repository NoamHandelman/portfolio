import aws from '@/assets/icons/aws.svg';
import css from '@/assets/icons/css.svg';
import html from '@/assets/icons/html.svg';
import javascript from '@/assets/icons/javascript.svg';
import typescript from '@/assets/icons/typescript.svg';
import mongo from '@/assets/icons/mongo.svg';
import postgresql from '@/assets/icons/postgresql.svg';
import redis from '@/assets/icons/redis.svg';
import docker from '@/assets//icons/docker.svg';
import react from '@/assets//icons/react.svg';
import java from '@/assets//icons/java.svg';
import git from '@/assets/icons/git.svg';
import python from '@/assets/icons/python.svg';
import vite from '@/assets/icons/vite.svg';
import springboot from '@/assets/icons/spring-boot.svg';
import nextjs from '@/assets/icons/nextjs.svg';

import { Github } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Linkedin } from 'lucide-react';

import fitbuddy from '@/assets/images/fitbuddy.png';
import chatbout from '@/assets/images/chatbot.png';

export const aboutMe =
  "I am a software developer with a great passion for the software and coding worlds, for solving complex problems and creating an optimal user experience, who can also spend hours in front of the screen in order to create a perfect product, with a hunger for never-ending learning. I started studying the field independently, while taking online courses, reading articles and building projects, and I am about to start a degree in computer science. Not a day goes by that I don't learn something new, and I don't intend to stop. If I sound like someone you'd want on your team, I'd be more than happy to chat!";

export const navLinks = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const techStack = [
  { name: 'typeScript', svg: typescript },
  { name: 'javaScript', svg: javascript },
  { name: 'java', svg: java },
  { name: 'python', svg: python },
  { name: 'mongodb', svg: mongo },
  { name: 'postgresql', svg: postgresql },
  { name: 'redis', svg: redis },
  { name: 'springboot', svg: springboot },
  { name: 'react', svg: react },
  { name: 'vite', svg: vite },
  { name: 'next.js', svg: nextjs },
  { name: 'html', svg: html },
  { name: 'css', svg: css },
  { name: 'aws', svg: aws },
  { name: 'docker', svg: docker },
  { name: 'git', svg: git },
] as const;

export const contactList = [
  {
    name: 'github',
    Icon: Github,
    link: 'https://github.com/NoamHandelman',
  },
  {
    name: 'mail',
    Icon: Mail,
    link: 'mailto:n.handelman6@gmail.com',
  },
  {
    name: 'linkedin',
    Icon: Linkedin,
    link: 'https://www.linkedin.com/in/noam-handelman/',
  },
] as const;

export const experienceList = [
  {
    title: 'Application Engineer',
    company: 'AU10TIX',
    dates: '01/2022 - 01/2023',
    description: [
      'Providing solutions in the field of supervised machine learning and image analysis.',
      "Maintenance, optimizations, and configurations of the company's products according to the customer's needs.",
    ],
  },
  {
    title: 'Intelligence & data Analyst',
    company: 'Israeli Military Intelligence - Unit 8200',
    dates: '09/2018 - 05/2021',
    description: [
      'Production and analysis of intelligence materials at a high level of classification using advanced technological systems in spoken and written Arabic.',
    ],
  },
] as const;

export const projectsList = [
  {
    name: 'fitbuddy',
    description: 'A full stack social media application for fitness lovers',
    links: {
      live: 'https://fitbuddy-client.vercel.app/',
      client: 'https://github.com/NoamHandelman/fitbuddy-client',
      server: 'https://github.com/NoamHandelman/fitbuddy-server',
    },
    techStack: [
      'TypeScript',
      'React',
      'Next.js',
      'NextAuth.js',
      'Express',
      'MongoDB',
      'mongoose',
      'tailwindcss',
      'Zod',
      'AWS',
      'swagger',
    ],
    image: fitbuddy,
  },
  {
    name: 'chatbot',
    description:
      "A chatbot that can provide a list of products from Amazon and jokes according to the user's request",
    links: {
      live: 'https://console.dialogflow.com/api-client/demo/embedded/3416545d-6801-4d91-886e-c290b3b53de6',
      client: 'https://github.com/NoamHandelman/fitbuddy-client',
      server: 'https://github.com/NoamHandelman/fitbuddy-server',
    },
    techStack: [
      'Java',
      'SpringBoot',
      'Docker',
      'scraping',
      'webhooks',
      'swagger',
    ],
    image: chatbout,
  },
] as const;
