import chessBoard from "./assets/chessBoard.svg";
import globus from "./assets/globus.svg";

function Header() {
  return (
    <div class="fixed inset-x-0 z-50 box-border flex h-[80px] items-center justify-between border-b-2 border-b-white/30 bg-black px-7 font-['Poppins']">
      <div class="flex items-center justify-center gap-5">
        <img src={chessBoard} alt="Chessboard" draggable={false} />

        <p class="text-[28px] font-semibold uppercase tracking-wider text-white">
          Computer Science
        </p>
      </div>

      <div>
        <ul class="flex gap-5 text-[20px] font-medium uppercase text-white/50">
          <li class="hover:font-extrabold hover:text-[#FFB902]">News</li>
          <li class="hover:font-extrabold hover:text-[#FFB902]">About us</li>
          <li class="hover:font-extrabold hover:text-[#FFB902]">Programs</li>
          <li class="hover:font-extrabold hover:text-[#FFB902]">Research</li>
          <li class="hover:font-extrabold hover:text-[#FFB902]">Campus</li>
          <li class="hover:font-extrabold hover:text-[#FFB902]">Contacts</li>
        </ul>
      </div>

      <div>
        <img src={globus} alt="Globus" draggable={false} />
      </div>
    </div>
  );
}

export default Header;
