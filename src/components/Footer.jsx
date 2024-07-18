const Footer = () => {
  return (
    <footer className="footer bg-white px-12 py-20">
      <div className=" mx-auto flex gap-16">
        {/* Left Section */}
        <div className="flex-col mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Our Location</h3>
          <p className="mb-2">123 Fashion Ave, Style City, SC 45278</p>
          <div className="flex flex-col ">
            <a href="#" className="mb-4 hover:underline ">
              Quick Links &gt;
            </a>
            <a href="#" className="mb-4 hover:underline ">
              FAQs &gt;
            </a>
            <a href="#" className="mb-4 hover:underline">
              Request & Refunds
            </a>
            <a href="#" className="mb-4 hover:underline">
              Policy
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-contact">
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <div className="flex gap-4 mb-2">
            <img className="" src="../public/images/mail.png" />
            <p className="mb-2">support@frbrand.com</p>
          </div>
          <div className="flex gap-4">
            <img src="../public/images/phone.png" />
            <p>+234 80 8080 8090</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
