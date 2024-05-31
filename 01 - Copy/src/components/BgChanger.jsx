import { useState } from "react";
function BgChanger() {
  const [color, setColor] = useState("white");
  const buttonColors = ["olive", "green", "blue"];
  return (
    <div>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center shadower-lg gap-3 bg-white rounded-lg px-3 py-2">
            {buttonColors.map((btnColor) => (
              <button
                key={btnColor}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{
                  backgroundColor: btnColor,
                }}
                onClick={() => setColor(btnColor)}
              >
                {btnColor.charAt(0).toUpperCase() + btnColor.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BgChanger;
