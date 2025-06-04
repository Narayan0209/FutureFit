import React from 'react';

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-purple-600 mb-8">About Us</h1>
          <div className="space-y-6">
            <h3 className="text-lg md:text-xl text-gray-600">
              Welcome to <span className="font-semibold text-purple-600">FutureFit</span>, your one-stop destination for exploring a multitude of opportunities available to students after completing their 10+2. We understand that this is a pivotal moment in your life, filled with questions and possibilities. Our mission is to guide you through this exciting journey by offering comprehensive information and resources to help you make informed decisions about your future.
            </h3>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">Our Mission</h2>
              <p className="text-gray-400 mt-2">
                At <span className="font-semibold text-purple-600">FutureFit</span>, our mission is to empower students with knowledge and insights about various career paths and educational opportunities available after the 12th. We believe that every student has unique interests and strengths, and we aim to provide tailored information that can help you choose a path that aligns with your goals and passions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">What We Offer:</h2>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-purple-400">1. Comprehensive Career Guides:</h3>
                  <p className="text-gray-400 mt-1">
                    We provide detailed guides on a wide range of career options across different fields such as engineering, medical, commerce, arts, science, management, law, and design. Each guide includes information on the courses available, the skills required, and potential career prospects.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-purple-400">2. Expert Advice:</h3>
                  <p className="text-gray-400 mt-1">
                    Our team of experts includes career counselors, educators, and industry professionals who offer valuable insights and advice to help you navigate through your options and make the best choice for your future.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-purple-400">3. Student Resources:</h3>
                  <p className="text-gray-400 mt-1">
                    We offer a variety of resources including study materials, scholarship information, and tips for college admissions. Our goal is to support you at every step of your journey from high school to higher education and beyond.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">Our Vision</h2>
              <p className="text-gray-400 mt-2">
                Our vision is to become the leading platform for students seeking guidance and information about post-12th opportunities. We aim to continually expand our offerings and improve our services to meet the evolving needs of students and the educational landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
