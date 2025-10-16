import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 px-6 py-10 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-gray-700 pb-8">
          {/* 1️⃣ Logo + Description + Button */}
          <div className="">
            <div className="flex flex-col gap-3">
              {/* <Image
                src="/bag-icon.png" // place your image inside /public
                alt="Fable by the Sea"
              /> */}
              <p className="text-sm text-gray-400 leading-relaxed max-w[279px]">
                Shop curated bundles for tea, candles & soaps — save on perfect ritual sets.
              </p>
              <button className="bg-[#D4EAC7] text-black mt-3 px-4 py-2 rounded-md w-fit hover:bg-[#c7e0b9]">
                Contact Us
              </button>
            </div>
          </div>

          {/* 2️⃣ Products */}
          <div>
            <h4 className="font-semibold text-white mb-3">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#">Candles</Link></li>
              <li><Link href="#">Teas</Link></li>
              <li><Link href="#">Soaps</Link></li>
            </ul>
          </div>

          {/* 3️⃣ Our Site */}
          <div>
            <h4 className="font-semibold text-white mb-3">Our Site</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Blogs</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* 4️⃣ Customer Care */}
          <div>
            <h4 className="font-semibold text-white mb-3">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Shipping Policy</Link></li>
              <li><Link href="#">Return & Refund Policy</Link></li>
            </ul>
          </div>

          {/* 5️⃣ Follow Us */}
          <div>
            <h4 className="font-semibold text-white mb-3">Follow Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">Facebook</Link></li>
              <li><Link href="#">X / Twitter</Link></li>
              <li><Link href="#">TikTok</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-xs text-gray-500 space-y-2 md:space-y-0">
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="#" className="hover:text-gray-300">
              Terms of Service
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-300">
              Privacy Policy
            </Link>
          </div>
          <p className="text-center md:text-right">
            © Fable by the Sea 2025. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
