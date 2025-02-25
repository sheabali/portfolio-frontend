import {
  BannerImage,
  Discord,
  Facebook,
  Github,
  Twitter,
} from '@/components/constant/global';
import Container from '@/components/Container/Container';
import Image from 'next/image';

const Banner = () => {
  return (
    <Container>
      <div className="flex justify-between gap-4 py-3">
        <div className="w-[50%]">
          <div>
            <h1 className="text-5xl font-semibold">
              Hello I’am Evren Shah. <br /> Frontend Developer <br /> Based In
              India.
            </h1>
            <p className="mt-7 text-base">
              I m Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>
            <div className="flex gap-4 items-center mt-28">
              <Image src={Facebook} width={45} height={20} alt="Discord" />
              <Image src={Discord} width={45} height={20} alt="Discord" />
              <Image src={Twitter} width={45} height={20} alt="Discord" />
              <Image src={Github} width={45} height={20} alt="Discord" />
            </div>
          </div>
        </div>
        <div className="w-[50%] ">
          <Image src={BannerImage} width={800} height={400} alt="Banner " />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
