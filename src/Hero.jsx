import { createSignal, For } from "solid-js";
import macbook from "./assets/macbook.png";

function Hero() {
  const [colors, setColors] = createSignal([
    "bg-red-500/40",
    "bg-pink-500/40",
    "bg-purple-500/40",
    "bg-indigo-500/40",
    "bg-blue-500/40",
    "bg-cyan-500/40",
    "bg-teal-500/40",
    "bg-green-500/40",
    "bg-lime-500/40",
    "bg-yellow-500/40",
    "bg-amber-500/40",
    "bg-orange-500/40",
  ]);

  return (
    <div class="relative">
      <img src={macbook} alt="MacBook" draggable={false} />

      <div class="absolute top-[240px] ml-[252px] font-['Montserrat'] uppercase tracking-wider">
        <div class="max-w-[1000px]">
          <h1 class="text-[48px] font-semibold leading-[59px] text-[#FFB902]">
            Learn information technologies & development with us
          </h1>

          <p class="text-[16px] font-medium leading-[20px] text-white">
            West Ukrainian National University, Faculty of Computer Information
            Technologies, Department of Computer Science
          </p>
        </div>

        <div class="mt-[60px] text-[24px] font-semibold text-white">
          <h2>Popular lessons</h2>

          <ul class="flex max-w-[668px] flex-wrap gap-x-4 gap-y-2 pt-4 text-[16px]">
            <For each={Array(12).fill("BOBA-ABOBA")}>
              {(course) => (
                <li
                  class={`rounded-[15px] px-[15px] py-[5px] leading-[20px] ${
                    colors().at(Math.floor(Math.random() * colors().length))
                  }`}
                >
                  {course}
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
