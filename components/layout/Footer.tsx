const Footer = () => {
  return (
    <footer data-test="homepage-footer" className="text-gray-600">
      <div className="site_footer_1">
        <div className="site_footer_2">
          <p
            className="text-center text-sm leading-loose
                    md:text-left"
          >
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/shaun-ferris-20a081100/"
              rel="noreferrer"
              className="font-medium underline
                            underline-offset-4"
            >
              Shaun Ferris.
            </a>
          </p>
          <p
            className="text-center text-sm leading-loose
                    md:text-left"
          >
            Source code available on{" "}
            <a
              href="https://github.com/ShaunFerris/homehub"
              rel="noreferrer"
              className="font-medium underline
                            underline-offset-4"
            >
              Github.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
