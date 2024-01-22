import Image from "next/image";
import Link from 'next/link'
import { Button, ButtonGroup } from "@mui/material";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-36 bg-gradient-to-t from-pink via-white to-blue text-white pb-80`}
    >
      <header className='flex flex-row items-center justify-between px-32 bg-gradient-to-b from-black/70 to-black/50 min-w-full fixed top-0 rounded-b-2xl'>
        <div className='flex flex-row items-center gap-1'>
          <Button variant="text">
            <Link href='/'>
              <Image
                src='/images/logo.png'
                width={70}
                height={70}
                alt='logo'
              />
            </Link>
          </Button>
          <h1>Ingrid Chou</h1>
        </div>
        <div className='flex flex-row gap-10'>
          <Link href='/'>Home</Link>
          <Link href='/'>Portfolio</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
      </header>
      <div className="flex flex-row justify-between min-w-full px-15">
        <h1 className='text-4xl pb-10 text-black'>Portfolio</h1>
        <ButtonGroup variant="text" className="flex items-center bg-gradient-to-r from-black/55 via-black/65 to-black/55 rounded-2xl h-12">
          <Button className="text-white normal-case px-6">Projects</Button>
          <Button className="text-white normal-case px-6">Other</Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col gap-10 w-full">
        <div className="bg-gradient-to-r from-black/55 via-black/65 to-black/55 rounded-2xl h-96 w-full p-20">
          <div className="flex flex-row items-start justify-between px-15">
            <div className="flex flex-col w-2/4 gap-5">
              <h2 className="text-3xl">WhiteStone</h2>
              <p>WhiteStone is a machine learning dental scanning app designed for colorblind and low-income individuals. It aids users in assessing their dental health through mouth pictures, aiming to reduce the need for frequent dental checkups.</p>
              <Button variant="contained" className="hover:bg-gray-200 bg-white text-black normal-case rounded-lg w-1/4">
                <Link href='/project'>View Project</Link>
              </Button>
            </div>
            <Image
              className="rounded-xl"
              src='/images/whitestone.png'
              width={350}
              height={200}
              alt='whitestone'
            />
          </div>
        </div>
        {/* <div className="bg-gradient-to-r from-black/55 via-black/65 to-black/55 rounded-2xl h-96 w-full p-20">
        <div>
          <div>
            <h2>Project Title</h2>
            <p>Project des</p>
            <Button variant="contained" className="bg-white text-black normal-case rounded-lg">View Project</Button>
          </div>
        </div>
      </div> */}
      </div>
      <footer className='flex items-center justify-center bg-gradient-to-b from-black/50 to-black/90 min-w-full absolute bottom-0 h-44'>
      </footer>
    </main>
  );
}
