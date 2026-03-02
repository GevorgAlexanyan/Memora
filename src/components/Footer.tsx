const Footer = () => {
  return (
    <footer className="bg-bg/80 text-text rounded-t-lg ring-1 ring-accent inset-shadow-indigo-500 shadow-accent mt-10 radius">
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:items-start md:flex-row items-center justify-between gap-2  ">

        {/* Left side */}
        <div className="text-sm">
          © {new Date().getFullYear()} Memora. All rights reserved.
        </div>

        <div className="bg-text h-0.25 w-80 md:hidden"></div>

        {/* Center links */}
        <div className="flex gap-6 text-sm md:flex-col md:gap-2">
          <a href="/" className="hover:text-text/50 transition">
            Home
          </a>
          <a href="/places" className="hover:text-text/50 transition">
            Places
          </a>
          <a href="/events" className="hover:text-text/50 transition">
            Events
          </a>
          <a href="/about" className="hover:text-text/50 transition">
            About
          </a>
        </div>

        <div className="bg-text h-0.25 w-60 md:hidden"></div>


        {/* Contact Us */}
        <div className="flex gap-6 text-sm md:flex-col md:gap-2 ">
          <a href="" className="hover:text-text/50 transition">YouTube</a>
          <a href="" className="hover:text-text/50 transition">Instagram</a>
          <a href="" className="hover:text-text/50 transition">Facebook</a>
        </div>

        <div className="bg-text h-0.25 w-40 md:hidden"></div>

        {/* Right side */}
        <div className="flex gap-6 text-sm md:flex-col md:gap-2">
          <a href="#" className="hover:text-text/50 transition">Privacy</a>
          <a href="#" className="hover:text-text/50 transition">Terms</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
