const Footer = () => {
  const now = new Date();

  return (
    <footer className="bg-[rgba(22,22,22)] px-5">
      <div className="max-w-7xl mx-auto py-3">
        <p className="text-neutral-300 font-mono text-center text-sm">
          Carefully crafted by{" "}
          <a
            className="hover:text-neutral-50 transition-colors duration-300"
            href="https://www.linkedin.com/in/josephvp/"
            target="_blank"
            rel="noopener noreferrer"
            title="Joseph V. on LinkedIn"
            aria-label="Joseph V. on LinkedIn"
          >
            Joseph V.
          </a>{" "}
          — {now.getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
