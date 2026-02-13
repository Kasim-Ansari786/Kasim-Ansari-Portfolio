const Footer = () => {
  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="container mx-auto px-6 text-center">
        <p className="font-mono text-sm text-muted-foreground">
          &lt;/&gt; Designed & Built by <span className="text-primary">Kasim Ansari</span> © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
