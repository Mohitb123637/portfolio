import React from "react";
import CV from "../Resume/CV.pdf"
import { AiOutlineMenu } from "react-icons/ai";

function Header({ menuOpen, setMenuOpen }) {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
}

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen}  />
    </div>
  );
};

const NavContent = ({setMenuOpen}) => {
    const handleDownloadCV = () => {
    // Trigger download when the "CV" button is clicked
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Mohit_Bhandari_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <h2>Mohit bhandari</h2>
      <div>
        <a onClick={() => setMenuOpen(false)} href="#home">
          Home
        </a>
        <a onClick={() => setMenuOpen(false)} href="#work">
          Work
        </a>
        <a onClick={() => setMenuOpen(false)} href="#timeline">
          Timeline
        </a>
        <a onClick={() => setMenuOpen(false)} href="#skills">
          Skills
        </a>
        <a onClick={() => setMenuOpen(false)} href="#contact">
          Contact
        </a>
      </div>

      <a href="">
        <button onClick={handleDownloadCV} className="btn1" style={{ marginLeft: "80px" }}>
          CV
        </button>
      </a>
      <a href="mailto:codewithbhandari@gmail.com">
        <button style={{ marginRight: "8px" }}>Email</button>
      </a>
    </>
  );
};

export default Header;





// import React from "react";
// import CV from "../Resume/CV.pdf";
// import { AiOutlineMenu } from "react-icons/ai";

// function Header({ menuOpen, setMenuOpen }) {
//   return (
//     <>
//       <nav>
//         <NavContent setMenuOpen={setMenuOpen} />
//       </nav>
//       <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
//         <AiOutlineMenu />
//       </button>
//     </>
//   );
// }

// export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
//   return (
//     <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
//       <NavContent setMenuOpen={setMenuOpen} />
//     </div>
//   );
// };

// const NavContent = ({ setMenuOpen }) => {
//   const handleDownloadCV = () => {
//     // Trigger download when the "CV" button is clicked
//     const link = document.createElement("a");
//     link.href = CV;
//     link.download = "Mohit_Bhandari_CV.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <>
//       <h2>Mohit Bhandari</h2>
//       <div>
//         <a onClick={() => setMenuOpen(false)} href="#home">
//           Home
//         </a>
//         <a onClick={() => setMenuOpen(false)} href="#work">
//           Work
//         </a>
//         <a onClick={() => setMenuOpen(false)} href="#timeline">
//           Timeline
//         </a>
//         <a onClick={() => setMenuOpen(false)} href="#skills">
//           Skills
//         </a>
//         <a onClick={() => setMenuOpen(false)} href="#contact">
//           Contact
//         </a>
//       </div>

//       <button onClick={handleDownloadCV} className="btn1" style={{ marginLeft: "80px" }}>
//         CV
//       </button>
//       <a href="mailto:codewithbhandari@gmail.com">
//         <button style={{ marginRight: "8px" }}>Email</button>
//       </a>
//     </>
//   );
// };

// export default Header;
