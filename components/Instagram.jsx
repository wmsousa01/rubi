import React from "react";
import IgImg1 from "../public/assets/ig-img-1.jpg";
import IgImg2 from "../public/assets/ig-img-2.jpg";
import IgImg3 from "../public/assets/ig-img-3.jpg";
import IgImg4 from "../public/assets/ig-img-4.jpg";
import IgImg5 from "../public/assets/ig-img-5.jpg";
import IgImg6 from "../public/assets/ig-img-6.jpg";
import InstagramImg from "./InstagramImg";
import Link from "next/link";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Siga a Rubi nas Redes Sociais</p>
      <Link href="https://www.instagram.com/rubihospitalar/" className="pb-4">
        @rubihospitalar
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <Link href="https://www.instagram.com/rubihospitalar/">
          <InstagramImg socialImg={IgImg1} />
        </Link>
        <Link href="https://www.instagram.com/rubihospitalar/">
          <InstagramImg socialImg={IgImg2} />
        </Link>
        <Link href="https://www.instagram.com/rubihospitalar/">
          <InstagramImg socialImg={IgImg3} />
        </Link>
        <Link href="https://www.instagram.com/rubihospitalar/">
          <InstagramImg socialImg={IgImg4} />
        </Link>
        <Link href="https://www.instagram.com/rubihospitalar/">
          <InstagramImg socialImg={IgImg5} />
        </Link>
        <Link href="https://www.instagram.com/rubihospitalar/">
          <InstagramImg socialImg={IgImg6} />
        </Link>
      </div>
    </div>
  );
};

export default Instagram;
