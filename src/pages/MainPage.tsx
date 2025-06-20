import React from 'react';

const MainPage: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Joe M.</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Joe</h2>
        <p className="text-lg md:text-xl">A Frontend Developer passionate about crafting beautiful UIs</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="text-gray-700 leading-relaxed">
          I'm a developer who loves turning ideas into interactive applications.
          I specialize in React, TypeScript, and Tailwind CSS.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8">Projects</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Card Example */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Portfolio Website</h4>
            <p className="text-sm text-gray-600 mb-4">A personal site to showcase my work and resume.</p>
            <a href="#" className="text-blue-500 hover:underline text-sm">View Project →</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-4">Contact</h3>
        <p className="mb-4">Email me at <a href="mailto:you@example.com" className="text-blue-500 hover:underline">you@example.com</a></p>
        <a href="#" className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Download Resume</a>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-4 border-t mt-8">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Joe M. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
