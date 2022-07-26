import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rubi Hospitalar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Bem vindo a Rubi!' message='Conheça nossos produtos'/>
      <Slider slides={SliderData} />
    </div>
  );
}