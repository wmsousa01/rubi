import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";
import Produtos from '../components/Produtos'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rubi Hospitalar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Bem vindo a Rubi!' message='Conheça nossos produtos'/>
      <Produtos />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}