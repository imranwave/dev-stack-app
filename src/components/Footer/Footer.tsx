import footerLogo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="bg-[#fffdfded] py-8 mt-5">
      <div className="container mx-auto">
        <div className="divider "></div>
        <div className="grid grid-cols-4 gap-10 py-5">
          <div className="space-y-2">
            <img src={footerLogo} alt="" />
            <p className="text-gray-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex gap-4">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-2">PRODUCT</h2>
            <div className="flex flex-col text-gray-400 space-y-2">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-2">COMPANY</h2>
            <div className="flex flex-col text-gray-400 space-y-2">
              <a href="#">About</a>
              <a href="#">Contect</a>
              <a href="#">Careers</a>
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-2">LEGAL</h2>
            <div className="flex flex-col text-gray-400 space-y-2">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="divider "></div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <p className="text-gray-400">
            <span className="mr-5">Privacy</span>Terms
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
