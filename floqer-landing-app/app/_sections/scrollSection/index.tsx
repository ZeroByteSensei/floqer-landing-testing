"use client";
import { StickyScroll } from "@/app/_components/animations/StickyScroll";
import { StickyscrollTemp } from "@/app/_components/animations/StickyscrollTemp";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

const ScrollSection = () => {
  // const scrollRef = React.useRef<HTMLDivElement>(null);
  // const [done, setDone] = useState(false);
  // useEffect(() => {
  //   const temp = () => {
  //     if (!scrollRef.current) return;
  //     const bottom = scrollRef.current.getBoundingClientRect().bottom;
  //     const offsetheight = scrollRef.current.offsetHeight;
  //     if (bottom <= offsetheight && !done) {
  //       scrollRef.current.style.position = "fixed";
  //       scrollRef.current.style.marginLeft = "auto";
  //       scrollRef.current.style.marginRight = "auto";
  //       scrollRef.current.style.background = "white";
  //       scrollRef.current.style.zIndex = "100";
  //       scrollRef.current.style.top = "0";
  //       setDone(() => true);
  //     }
  //   };
  //   document.addEventListener("scroll", temp);
  //   return () => {
  //     document.removeEventListener("scroll", temp);
  //   };
  // }, []);

  return (
    <div
      // className="max-w-[2700px] mb-4 md:mb-12 lg:mb-24 overscroll-contain bg-white flex justify-between h-fit "
      // ref={scrollRef}
      // className="flex 
      // flex-col lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-6 pt-10
      // "
      className="flex"
    >
      <StickyscrollTemp content={content} />
      {/* <aside 
      // className="lg:col-span-4 order-1"
      >
        <div className="w-[200px] h-[200px] bg-red-500 sticky top-[120px] pb-6"></div>
      </aside>
      <div 
      // className="lg:col-span-8 lg:max-w-[46rem] pb-12 xl:pl-11 xl:pr-16 order-2"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        aspernatur deserunt autem corporis laboriosam blanditiis quas earum sunt
        eum illo eligendi commodi soluta animi aut exercitationem, reprehenderit
        ab? Sit, unde? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Pariatur, tenetur enim. Perferendis hic esse minus delectus voluptate
        eum error, iusto omnis reprehenderit quos rerum. Vel delectus ullam
        dolorem repudiandae error. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Aliquam a, commodi fuga odit porro exercitationem illo
        quidem delectus quos expedita vel, rerum atque, vitae dolore soluta
        reiciendis quia voluptatibus itaque? Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Harum quasi similique, aliquam vitae est
        enim, voluptates omnis reiciendis animi ad assumenda dolorum libero
        adipisci perspiciatis in quia dolorem atque sint.Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Quibusdam aspernatur deserunt autem
        corporis laboriosam blanditiis quas earum sunt eum illo eligendi commodi
        soluta animi aut exercitationem, reprehenderit ab? Sit, unde? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Pariatur, tenetur
        enim. Perferendis hic esse minus delectus voluptate eum error, iusto
        omnis reprehenderit quos rerum. Vel delectus ullam dolorem repudiandae
        error. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
        a, commodi fuga odit porro exercitationem illo quidem delectus quos
        expedita vel, rerum atque, vitae dolore soluta reiciendis quia
        voluptatibus itaque? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Harum quasi similique, aliquam vitae est enim, voluptates omnis
        reiciendis animi ad assumenda dolorum libero adipisci perspiciatis in
        quia dolorem atque sint.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quibusdam aspernatur deserunt autem corporis
        laboriosam blanditiis quas earum sunt eum illo eligendi commodi soluta
        animi aut exercitationem, reprehenderit ab? Sit, unde? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Pariatur, tenetur enim.
        Perferendis hic esse minus delectus voluptate eum error, iusto omnis
        reprehenderit quos rerum. Vel delectus ullam dolorem repudiandae error.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam a,
        commodi fuga odit porro exercitationem illo quidem delectus quos
        expedita vel, rerum atque, vitae dolore soluta reiciendis quia
        voluptatibus itaque? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Harum quasi similique, aliquam vitae est enim, voluptates omnis
        reiciendis animi ad assumenda dolorum libero adipisci perspiciatis in
        quia dolorem atque sint.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quibusdam aspernatur deserunt autem corporis
        laboriosam blanditiis quas earum sunt eum illo eligendi commodi soluta
        animi aut exercitationem, reprehenderit ab? Sit, unde? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Pariatur, tenetur enim.
        Perferendis hic esse minus delectus voluptate eum error, iusto omnis
        reprehenderit quos rerum. Vel delectus ullam dolorem repudiandae error.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam a,
        commodi fuga odit porro exercitationem illo quidem delectus quos
        expedita vel, rerum atque, vitae dolore soluta reiciendis quia
        voluptatibus itaque? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Harum quasi similique, aliquam vitae est enim, voluptates omnis
        reiciendis animi ad assumenda dolorum libero adipisci perspiciatis in
        quia dolorem atque sint.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quibusdam aspernatur deserunt autem corporis
        laboriosam blanditiis quas earum sunt eum illo eligendi commodi soluta
        animi aut exercitationem, reprehenderit ab? Sit, unde? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Pariatur, tenetur enim.
        Perferendis hic esse minus delectus voluptate eum error, iusto omnis
        reprehenderit quos rerum. Vel delectus ullam dolorem repudiandae error.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam a,
        commodi fuga odit porro exercitationem illo quidem delectus quos
        expedita vel, rerum atque, vitae dolore soluta reiciendis quia
        voluptatibus itaque? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Harum quasi similique, aliquam vitae est enim, voluptates omnis
        reiciendis animi ad assumenda dolorum libero adipisci perspiciatis in
        quia dolorem atque sint.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quibusdam aspernatur deserunt autem corporis
        laboriosam blanditiis quas earum sunt eum illo eligendi commodi soluta
        animi aut exercitationem, reprehenderit ab? Sit, unde? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Pariatur, tenetur enim.
        Perferendis hic esse minus delectus voluptate eum error, iusto omnis
        reprehenderit quos rerum. Vel delectus ullam dolorem repudiandae error.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam a,
        commodi fuga odit porro exercitationem illo quidem delectus quos
        expedita vel, rerum atque, vitae dolore soluta reiciendis quia
        voluptatibus itaque? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Harum quasi similique, aliquam vitae est enim, voluptates omnis
        reiciendis animi ad assumenda dolorum libero adipisci perspiciatis in
        quia dolorem atque sint.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quibusdam aspernatur deserunt autem corporis
        laboriosam blanditiis quas earum sunt eum illo eligendi commodi soluta
        animi aut exercitationem, reprehenderit ab? Sit, unde? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Pariatur, tenetur enim.
        Perferendis hic esse minus delectus voluptate eum error, iusto omnis
        reprehenderit quos rerum. Vel delectus ullam dolorem repudiandae error.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam a,
        commodi fuga odit porro exercitationem illo quidem delectus quos
        expedita vel, rerum atque, vitae dolore soluta reiciendis quia
        voluptatibus itaque? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Harum quasi similique, aliquam vitae est enim, voluptates omnis
        reiciendis animi ad assumenda dolorum libero adipisci perspiciatis in
        quia dolorem atque sint.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quibusdam aspernatur deserunt autem corporis
        laboriosam blanditiis quas earum sunt eum illo eligendi commodi soluta
        animi aut exercitationem, reprehenderit ab? Sit, unde? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Pariatur, tenetur enim.
        Perferendis hic esse minus delectus voluptate eum error, iusto omnis
        reprehenderit quos rerum. Vel delectus ullam dolorem repudiandae error.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam a,
        commodi fuga odit porro exercitationem illo quidem delectus quos
        expedita vel, rerum atque, vitae dolore soluta reiciendis quia
        voluptatibus itaque? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Harum quasi similique, aliquam vitae est enim, voluptates omnis
        reiciendis animi ad assumenda dolorum libero adipisci perspiciatis in
        quia dolorem atque sint.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quibusdam aspernatur deserunt autem corporis
        laboriosam blanditiis quas earum sunt eum illo eligendi commodi soluta
        animi aut exercitationem, reprehenderit ab? Sit, unde? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Pariatur, tenetur enim.
        Perferendis hic esse minus delectus voluptate eum error, iusto omnis
        reprehenderit quos rerum. Vel delectus ullam dolorem repudiandae error.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam a,
        commodi fuga odit porro exercitationem illo quidem delectus quos
        expedita vel, rerum atque, vitae dolore soluta reiciendis quia
        voluptatibus itaque? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Harum quasi similique, aliquam vitae est enim, voluptates omnis
        reiciendis animi ad assumenda dolorum libero adipisci perspiciatis in
        quia dolorem atque sint.
      </div> */}
    </div>
  );
};

export default ScrollSection;
