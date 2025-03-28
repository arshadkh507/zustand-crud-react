const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <a
            href="https://linkedin.com/in/arshadkh507"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/arshadkh507"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
        </div>
        <p className="text-sm">© 2024 arshadkh507. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
