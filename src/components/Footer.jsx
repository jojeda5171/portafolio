import React from "react";

function Footer() {
  return (
    <footer className="grid grid-cols-2">
      <div className=""></div>
      <div className="w-full">
        <span className="block text-sm text-center text-white py-6">
          © 2024{" "}
          <a href="http://www.github/jojeda5171/" className="hover:underline">
            José Ojeda™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
