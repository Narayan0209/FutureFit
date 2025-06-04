import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-100 via-purple-400 to-pink-400 py-10">
      <div className="container mx-auto px-4 text-white">
        
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold">FutureFit</h1>
          <p className="max-w-2xl mx-auto text-sm mt-2">
            FutureFit is a platform designed to guide students after completing their 12th grade.
            We provide detailed insights into various career paths, entrance exams, and skill-development programs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-sm">
          
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Pages</h4>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-red-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-200">About Us</Link></li>
              <li><Link href="/contactus" className="hover:text-red-200">Contact Us</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Courses</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="hover:text-red-200">Communication Skills</Link></li>
              <li><Link href="#" className="hover:text-red-200">Computer Skills</Link></li>
              <li><Link href="#" className="hover:text-red-200">Soft Skills</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-red-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-sm">
          &copy; 2025, FutureFit.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
