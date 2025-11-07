import svgPaths from "../imports/svg-mudjitzp6z";

function Etic() {
  return (
    <div className="absolute inset-[22.07%_17.4%_7.81%_19.23%]" data-name="ETIC">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115 101">
        <g id="ETIC">
          <path d={svgPaths.p20b06580} fill="var(--fill-0, #02A9A2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame177() {
  return (
    <div className="absolute h-[25.362px] left-[60.02px] top-[66.7px] w-[64.775px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 26">
        <g id="Frame 177">
          <g id="Group 147">
            <path d={svgPaths.p27492400} fill="var(--fill-0, white)" id="Subtract" />
          </g>
          <g id="Vector">
            <path d={svgPaths.pf3203c0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23b14e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p39ebb600} fill="var(--fill-0, white)" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.pe79e700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2775cb80} fill="var(--fill-0, white)" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p1525da00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1f4d0000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p204a8080} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Letters() {
  return (
    <div className="absolute contents left-[60.02px] top-[66.7px]" data-name="Letters">
      <Frame177 />
    </div>
  );
}

function LogoEtic() {
  return (
    <div className="h-[144.007px] overflow-clip relative w-[181.433px]" data-name="logo etic">
      <Etic />
      <Letters />
      <div className="absolute bottom-[76.71%] left-0 right-[78.91%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 34">
          <path clipRule="evenodd" d={svgPaths.p1ff44872} fill="var(--fill-0, #EC9E00)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[69.59%] left-[87.37%] right-0 top-[16.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 21">
          <path clipRule="evenodd" d={svgPaths.p32413f80} fill="var(--fill-0, #FFCA00)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-[13.03%] right-[78.69%] top-[90.62%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
          <path clipRule="evenodd" d={svgPaths.ped31700} fill="var(--fill-0, #1AAF5D)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[81.5%_15.74%_5.73%_73.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
          <path clipRule="evenodd" d={svgPaths.p120cf780} fill="var(--fill-0, #C1333F)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export function EticLogo({ scale = 1 }: { scale?: number }) {
  return (
    <div 
      className="inline-block"
      style={{ 
        transform: `scale(${scale})`,
        transformOrigin: 'center'
      }}
    >
      <LogoEtic />
    </div>
  );
}
