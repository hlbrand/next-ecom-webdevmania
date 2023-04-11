import React from "react";

const Footer = () => {
  return (
    <footer className="h-full w-full flex justify-center mt-[10rem] pb-12">
      <div className="h-full w-10/12 grid grid-cols-3 justify-between">
        {/* column */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl mb-8 text-orange-600">FAQ</h2>
          <span>Where we are based</span>
          <span>How we operate</span>
          <span>Refund policy</span>
        </div>
        {/* column */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl mb-8 text-orange-600">Contacts</h2>
          <span>Youtube: WebDevMania</span>
          <span>Youtube: WebDevMania</span>
          <span>Youtube: WebDevMania</span>
        </div>
        {/* column */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl mb-8 text-orange-600">Privacy Policy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            perferendis eos magni. Laborum reiciendis doloremque, corporis
            labore mollitia fugit tenetur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
