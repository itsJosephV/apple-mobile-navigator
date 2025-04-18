const Footer = () => {
  const now = new Date();

  return (
    <footer className="bg-[rgba(22,22,22)] px-5">
      <div className="max-w-7xl mx-auto py-2">
        <p className="text-neutral-300 font-mono text-center text-sm">
          Carefully crafted by{" "}
          <a
            className="hover:text-neutral-50 transition-colors duration-300"
            href=""
          >
            itsJosephV
          </a>{" "}
          — {now.getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
