import img1 from "figma:asset/eaaeff051630e4ad4417df12039ef0949bb5104b.png";
import img2 from "figma:asset/b238c8fc387096f2cc7a40b19c26d8232a271091.png";
import img3 from "figma:asset/982878a51e020fad673bf3eaa6889525019bf9d3.png";
import img4 from "figma:asset/77b2a0fada26660ae4e3e904bfbdf5fbe8c1382a.png";
import { img } from "./svg-l8j5o";

function Button() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[14px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ffcc00] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Gotham:Black',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#0f0b0c] text-[16px] text-center text-nowrap whitespace-pre">Follow on Instagram</p>
    </div>
  );
}

function Frame37680() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1170px]">
      <p className="font-['Gotham:Black',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#0f0b0c] text-[46px] text-nowrap tracking-[0.92px] whitespace-pre">More from Etic Events</p>
      <Button />
    </div>
  );
}

function Photo() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Photo">
      <div className="absolute h-[488px] left-[-257px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[257px_0px] mask-size-[270px_488px] top-0 w-[736px]" data-name="Reel 1" style={{ maskImage: `url('${img}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[108.81%] left-[-11.86%] max-w-none top-[-8.2%] w-[112.85%]" src={img1} />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[51.806%] from-[rgba(26,26,26,0)] gap-[4px] h-[488px] items-start justify-end left-1/2 p-[20px] rounded-[16px] to-[#1a1a1a] to-[100.01%] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[270px]" data-name="Text">
      <div className="flex flex-col font-['Gotham_Pro:Medium',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
        <p className="leading-[1.2]">Training Camp</p>
      </div>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#e7e7e7] text-[12px] uppercase w-full">50K views</p>
    </div>
  );
}

function Reel() {
  return (
    <div className="absolute h-[488px] left-0 top-0 w-[270px]" data-name="Reel">
      <Photo />
      <Text />
    </div>
  );
}

function Photo1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Photo">
      <div className="absolute h-[488px] left-[-257px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[257px_0px] mask-size-[270px_488px] top-0 w-[736px]" data-name="Reel 1" style={{ maskImage: `url('${img}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[51.806%] from-[rgba(26,26,26,0)] gap-[4px] h-[488px] items-start justify-end left-1/2 p-[20px] rounded-[16px] to-[#1a1a1a] to-[100.01%] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[270px]" data-name="Text">
      <div className="flex flex-col font-['Gotham_Pro:Medium',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
        <p className="leading-[1.2]">Algiers UP</p>
      </div>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#e7e7e7] text-[12px] uppercase w-full">24k views</p>
    </div>
  );
}

function Reel1() {
  return (
    <div className="absolute h-[488px] left-[300px] top-0 w-[270px]" data-name="Reel">
      <Photo1 />
      <Text1 />
    </div>
  );
}

function Photo2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Photo">
      <div className="absolute h-[488px] left-[-257px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[257px_0px] mask-size-[270px_488px] top-0 w-[736px]" data-name="Reel 1" style={{ maskImage: `url('${img}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.42%] left-[17.83%] max-w-none top-[0.4%] w-[101.23%]" src={img3} />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[51.806%] from-[rgba(26,26,26,0)] gap-[4px] h-[488px] items-start justify-end left-1/2 p-[20px] rounded-[16px] to-[#1a1a1a] to-[100.01%] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[270px]" data-name="Text">
      <div className="flex flex-col font-['Gotham_Pro:Medium',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
        <p className="leading-[1.2]">S2EE</p>
      </div>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#e7e7e7] text-[12px] uppercase w-full">26k views</p>
    </div>
  );
}

function Reel2() {
  return (
    <div className="absolute h-[488px] left-[600px] top-0 w-[270px]" data-name="Reel">
      <Photo2 />
      <Text2 />
    </div>
  );
}

function Photo3() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Photo">
      <div className="absolute h-[488px] left-[-257px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[257px_0px] mask-size-[270px_488px] top-0 w-[736px]" data-name="Reel 1" style={{ maskImage: `url('${img}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[101.04%] left-[15.99%] max-w-none top-[-0.63%] w-[100.53%]" src={img4} />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[51.806%] from-[rgba(26,26,26,0)] gap-[4px] h-[488px] items-start justify-end left-1/2 p-[20px] rounded-[16px] to-[#1a1a1a] to-[98.752%] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[270px]" data-name="Text">
      <div className="flex flex-col font-['Gotham_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-[250px]">
        <p className="leading-[1.2]">JEE</p>
      </div>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.3] min-w-full relative shrink-0 text-[#e7e7e7] text-[12px] uppercase w-[min-content]">30k views</p>
    </div>
  );
}

function Reel3() {
  return (
    <div className="absolute h-[488px] left-[900px] top-0 w-[270px]" data-name="Reel">
      <Photo3 />
      <Text3 />
    </div>
  );
}

function Photo4() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Photo">
      <div className="absolute h-[488px] left-[-257px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[257px_0px] mask-size-[270px_488px] top-0 w-[736px]" data-name="Reel 1" style={{ maskImage: `url('${img}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[108.81%] left-[-11.86%] max-w-none top-[-8.2%] w-[112.85%]" src={img1} />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[51.806%] from-[rgba(26,26,26,0)] gap-[4px] h-[488px] items-start justify-end left-1/2 p-[20px] rounded-[16px] to-[#1a1a1a] to-[100.01%] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[270px]" data-name="Text">
      <div className="flex flex-col font-['Gotham_Pro:Medium',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
        <p className="leading-[1.2]">Training Camp</p>
      </div>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#e7e7e7] text-[12px] uppercase w-full">50K views</p>
    </div>
  );
}

function Reel4() {
  return (
    <div className="absolute h-[488px] left-[1200px] top-0 w-[270px]" data-name="Reel">
      <Photo4 />
      <Text4 />
    </div>
  );
}

function Photo5() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Photo">
      <div className="absolute h-[488px] left-[-257px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[257px_0px] mask-size-[270px_488px] top-0 w-[736px]" data-name="Reel 1" style={{ maskImage: `url('${img}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[51.806%] from-[rgba(26,26,26,0)] gap-[4px] h-[488px] items-start justify-end left-1/2 p-[20px] rounded-[16px] to-[#1a1a1a] to-[100.01%] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[270px]" data-name="Text">
      <div className="flex flex-col font-['Gotham_Pro:Medium',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
        <p className="leading-[1.2]">Algiers UP</p>
      </div>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#e7e7e7] text-[12px] uppercase w-full">24k views</p>
    </div>
  );
}

function Reel5() {
  return (
    <div className="absolute h-[488px] left-[1500px] top-0 w-[270px]" data-name="Reel">
      <Photo5 />
      <Text5 />
    </div>
  );
}

function Photo6() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Photo">
      <div className="absolute h-[488px] left-[-257px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[257px_0px] mask-size-[270px_488px] top-0 w-[736px]" data-name="Reel 1" style={{ maskImage: `url('${img}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.42%] left-[17.83%] max-w-none top-[0.4%] w-[101.23%]" src={img3} />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[51.806%] from-[rgba(26,26,26,0)] gap-[4px] h-[488px] items-start justify-end left-1/2 p-[20px] rounded-[16px] to-[#1a1a1a] to-[100.01%] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[270px]" data-name="Text">
      <div className="flex flex-col font-['Gotham_Pro:Medium',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-full">
        <p className="leading-[1.2]">S2EE</p>
      </div>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#e7e7e7] text-[12px] uppercase w-full">26k views</p>
    </div>
  );
}

function Reel6() {
  return (
    <div className="absolute h-[488px] left-[1800px] top-0 w-[270px]" data-name="Reel">
      <Photo6 />
      <Text6 />
    </div>
  );
}

function Photo7() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Photo">
      <div className="absolute h-[488px] left-[-257px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[257px_0px] mask-size-[270px_488px] top-0 w-[736px]" data-name="Reel 1" style={{ maskImage: `url('${img}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[101.04%] left-[15.99%] max-w-none top-[-0.63%] w-[100.53%]" src={img4} />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[51.806%] from-[rgba(26,26,26,0)] gap-[4px] h-[488px] items-start justify-end left-1/2 p-[20px] rounded-[16px] to-[#1a1a1a] to-[98.752%] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[270px]" data-name="Text">
      <div className="flex flex-col font-['Gotham_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.24px] w-[250px]">
        <p className="leading-[1.2]">JEE</p>
      </div>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.3] min-w-full relative shrink-0 text-[#e7e7e7] text-[12px] uppercase w-[min-content]">30k views</p>
    </div>
  );
}

function Reel7() {
  return (
    <div className="absolute h-[488px] left-[2100px] top-0 w-[270px]" data-name="Reel">
      <Photo7 />
      <Text7 />
    </div>
  );
}

export default function Reels() {
  return (
    <div className="bg-[#fff5d9] relative size-full" data-name="Reels">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-start px-[135px] py-[100px] relative size-full">
          <Frame37680 />
          <div className="h-[488px] overflow-clip relative shrink-0 w-[1170px]" data-name="Reels">
            <Reel />
            <Reel1 />
            <Reel2 />
            <Reel3 />
            <Reel4 />
            <Reel5 />
            <Reel6 />
            <Reel7 />
          </div>
        </div>
      </div>
    </div>
  );
}