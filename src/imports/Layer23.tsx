import imgVector from "figma:asset/044e473dbb5ec5bad06cea2fcfc2ac9e7615d3dd.png";
import imgVector1 from "figma:asset/991fbb85598a25fe30a464ea69f57a4c03a707d1.png";
import imgRectangle from "figma:asset/79bc8b938c892c651f134cf919e8da666b7ad29a.png";
import imgRectangle1 from "figma:asset/7d9aa087ff2584fd64d1ea26ceb8613f762b54db.png";
import imgVector2 from "figma:asset/6cf6b23ef34afadb7c4bf319fbcb7abeb2b440d4.png";
import imgVector3 from "figma:asset/22379df8e17c6d7670b150c1a5f3f263717d9eed.png";
import imgRectangle2 from "figma:asset/3b082c5209de95dbc17096abb139410482ce2cd2.png";
import imgVector4 from "figma:asset/26fa6c215c03c38b6393e82ecfaf38ffe574a8d5.png";
import imgVector5 from "figma:asset/1c0d30dd7080944c01963a51f34195e30091cbd0.png";
import imgRectangle3 from "figma:asset/65cec020ac3ecb41774a4a418c0a4b8332cff336.png";

function ClipPath() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[0.08%] top-0" data-name="clip-path">
      <div className="absolute bottom-0 left-0 right-[0.08%] top-0" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="1486.388" src={imgVector} width="826.897" />
      </div>
    </div>
  );
}

function ClipPath2() {
  return (
    <div className="absolute contents inset-[-1.06%_-1.83%_-1.06%_-1.91%]" data-name="clip-path-2">
      <div className="absolute inset-[-1.06%_-1.83%_-1.06%_-1.91%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="1517.929" src={imgVector1} width="858.484" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[-1.11%_-1.86%_-1.16%_-2.07%]" data-name="Group">
      <div className="absolute inset-[-1.11%_-1.86%_-1.16%_-2.07%]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
          </div>
          <div className="absolute bg-repeat bg-size-[1024px_1024px] bg-top-left inset-0 opacity-50" style={{ backgroundImage: `url('${imgRectangle1}')` }} />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[-1.06%_-1.83%_-1.06%_-1.91%]" data-name="Clip path group">
      <ClipPath2 />
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[-1.06%_-1.83%_-1.06%_-1.91%]" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[0.08%] top-0" data-name="Clip path group">
      <ClipPath />
      <Group1 />
    </div>
  );
}

function ClipPath3() {
  return (
    <div className="absolute bottom-0 contents left-[2.25%] right-0 top-[59.04%]" data-name="clip-path-3">
      <div className="absolute bottom-0 left-[2.25%] right-0 top-[59.04%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="608.838" src={imgVector2} width="808.914" />
      </div>
    </div>
  );
}

function ClipPath4() {
  return (
    <div className="absolute contents inset-[57.97%_-1.83%_-1.06%_0.34%]" data-name="clip-path-4">
      <div className="absolute inset-[57.97%_-1.83%_-1.06%_0.34%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="640.488" src={imgVector3} width="839.873" />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[57.97%_-1.86%_-1.16%_0.31%]" data-name="Group">
      <div className="absolute inset-[57.97%_-1.86%_-1.16%_0.31%]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
          </div>
          <div className="absolute bg-repeat bg-size-[1024px_1024px] bg-top-left inset-0 opacity-50" style={{ backgroundImage: `url('${imgRectangle1}')` }} />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-[57.97%_-1.83%_-1.06%_0.34%]" data-name="Clip path group">
      <ClipPath4 />
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[57.97%_-1.83%_-1.06%_0.34%]" data-name="Group">
      <ClipPathGroup2 />
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute bottom-0 contents left-[2.25%] right-0 top-[59.04%]" data-name="Clip path group">
      <ClipPath3 />
      <Group3 />
    </div>
  );
}

function ClipPath5() {
  return (
    <div className="absolute bottom-[48.86%] contents left-[20.24%] right-[1.63%] top-0" data-name="clip-path-5">
      <div className="absolute bottom-[48.86%] left-[20.24%] right-[1.63%] top-0" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="760.205" src={imgVector4} width="646.51" />
      </div>
    </div>
  );
}

function ClipPath6() {
  return (
    <div className="absolute contents inset-[-1.06%_-0.28%_47.79%_18.32%]" data-name="clip-path-6">
      <div className="absolute inset-[-1.06%_-0.28%_47.79%_18.32%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="791.77" src={imgVector5} width="678.277" />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[-1.11%_-0.39%_47.74%_18.24%]" data-name="Group">
      <div className="absolute inset-[-1.11%_-0.39%_47.74%_18.24%]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
          </div>
          <div className="absolute bg-repeat bg-size-[1024px_1024px] bg-top-left inset-0 opacity-50" style={{ backgroundImage: `url('${imgRectangle1}')` }} />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-[-1.06%_-0.28%_47.79%_18.32%]" data-name="Clip path group">
      <ClipPath6 />
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[-1.06%_-0.28%_47.79%_18.32%]" data-name="Group">
      <ClipPathGroup4 />
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute bottom-[48.86%] contents left-[20.24%] right-[1.63%] top-0" data-name="Clip path group">
      <ClipPath5 />
      <Group5 />
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute contents inset-0" data-name="Layer 1">
      <ClipPathGroup1 />
      <ClipPathGroup3 />
      <ClipPathGroup5 />
    </div>
  );
}

export default function Layer23() {
  return (
    <div className="relative size-full" data-name="Layer 23">
      <Layer1 />
    </div>
  );
}