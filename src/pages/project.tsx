import Image from "next/image";
import Link from 'next/link';
import { Button } from "@mui/material";

export default function Project() {
    return (
        <div className="flex flex-col min-h-screen">
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
            <main className="flex-grow bg-gradient-to-t from-pink via-white to-blue p-20">
                <div className="flex flex-col gap-5 px-20 pt-20">
                    <div className="flex flex-row items-center">
                        <h1 className='text-4xl text-black'>WhiteStone |</h1>
                        <Link className="text-4xl" href='https://www.whitestone-app.com'>whitestone-app.com</Link>
                    </div>
                    <Image
                        className="rounded-xl"
                        src='/images/cover.png'
                        width={800}
                        height={200}
                        alt='whitestone cover'
                    />
                    <h2 className="text-3xl text-black">Introduction</h2>
                    <p className="text-xl text-black">WhiteStone is an AI machine learning moblile application specifically designed for colorblind and budget-conscious individuals, this machine learning application uses mouth pictures for efficient dental health assessment. My role in this project were designer and front-end developer. As a team, we developed the screen design from wireframe to prototype, improved with user usability testing. I collaborated with a team from another major which focused on back-end development of the project. In my role of coding, I contributed to front-end development using best practice of typescript and tailwind CSS.</p>
                    <h2 className="text-3xl text-black">App Demo</h2>
                    <video width="800" height="350" controls preload="none">
                        <source src="/images/app-demo.mp4" type="video/mp4" />
                    </video>
                    <h2 className="text-3xl text-black">App Design</h2>
                    <Image
                        className="rounded-xl"
                        src='/images/hifi.png'
                        width={800}
                        height={200}
                        alt='whitestone'
                    />
                    <p className="text-xl text-black">Above is the high fidelity design of the application.</p>
                    <Image
                        className="rounded-xl"
                        src='/images/variants.png'
                        width={800}
                        height={200}
                        alt='whitestone'
                    />
                    <p className="text-xl text-black">We also did possible color theme variants to ensure consistency and improve user experience.</p>
                    <Image
                        className="rounded-xl"
                        src='/images/showcase.jpg'
                        width={800}
                        height={200}
                        alt='whitestone'
                    />
                    <h2 className="text-3xl text-black">Showcase</h2>
                    <p className="text-xl text-black">Above is our showcase of the project. We did a presentation in telus theatre at BCIT.</p>
                    <h2 className="text-3xl text-black">Brochure and Business Card Design</h2>
                    <div className="flex flex-row gap-5">
                        <Image
                            className="rounded-xl"
                            src='/images/brochure-outside.png'
                            width={390}
                            height={200}
                            alt='brochure'
                        />
                        <Image
                            className="rounded-xl"
                            src='/images/brochure-inside.png'
                            width={390}
                            height={200}
                            alt='brochure'
                        />
                    </div>
                    <p className="text-xl text-black">This is our brochure design. I was taking part of the brochure design.</p>
                    <div className="flex flex-row gap-5">
                        <Image
                            className="rounded-xl"
                            src='/images/business-card-front.png'
                            width={390}
                            height={200}
                            alt='brochure'
                        />
                        <Image
                            className="rounded-xl"
                            src='/images/business-card-back.png'
                            width={390}
                            height={200}
                            alt='brochure'
                        />
                    </div>
                    <p className="text-xl text-black">Business card design.</p>
                </div>
            </main>
            <footer className='flex items-center justify-center bg-gradient-to-b from-black/50 to-black/90 min-w-full h-44'>
            </footer>
        </div>
    );
}
