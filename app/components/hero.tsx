import Image from 'next/image'
import { Button } from './button'
import sikkimBg from '@/public/sikkim_bg.jpeg'

function Hero() {
  return (
    <div>
      <div className="relative w-full flex justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center blur-xl opacity-[0.8]"
          style={{ backgroundImage: `url(${sikkimBg.src})` }}
        ></div>
        <div className="z-10">
          <Image
            src={sikkimBg}
            alt="Sikkim Background"
            layout="contain"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-8 py-12 pt-4 lg:px-12 lg:py-14">
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            href={'https://www.sikkim8.com/#/login'}
            className="h-10 w-36 rounded-md sm:h-12 sm:w-48"
            style={{ background: 'linear-gradient(90deg, #424fee, #4283f8)' }}
          >
            Login
          </Button>
          <Button
            href={
              'http://www.sikkim8.com/#/register?invitationCode=417724671768'
            }
            className="h-10 w-36 rounded-md sm:h-12 sm:w-48"
            style={{ background: 'linear-gradient(90deg, #424fee, #4283f8)' }}
          >
            Register
          </Button>
        </div>
        <div className="mx-auto mb-8 max-w-3xl py-8 sm:py-8 lg:py-8">
          <div className="hidden sm:flex sm:justify-center"></div>
          <div className="mt-2 text-center">
            <h1 className="text-4xl font-black tracking-tight text-slate-800 sm:text-6xl">
              Welcome to Sikkim
            </h1>
            <p className="mt-6 text-base font-light leading-8 text-secondary-foreground text-slate-500 sm:text-lg">
              Embark on thrilling missions, outsmart your rivals, and seize your
              rewards
              <br /> in Sikkim.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
