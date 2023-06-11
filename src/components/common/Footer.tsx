const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 py-4 relative" data-testid="page-footer">
      <div className="contaoned mx-auto px-4 text-center text-gray-200">
        Mark Arenz &copy;{new Date().getFullYear()}
        <span> | </span>
        <a href="https://www.ridiculopathy.com" target="_blank" rel="noopener noreferrer">
          More Projects
        </a>
        <span> | </span>
        <a href="https://www.markmakesstuff.com" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      </div>
    </footer>
  );
};

export default Footer;
