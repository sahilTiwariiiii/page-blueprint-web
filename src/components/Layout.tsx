import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "How to play", href: "/how-to-play" },
    { name: "Points Table", href: "/points-table" },
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ];

  return (
    <div className="min-h-screen bg-gradient-navy">
      {/* Header */}
      <header className="relative">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-foreground">
                CRICKETS 11
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                Menu
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-brand-navy-dark border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <div className="text-2xl font-bold text-foreground mb-4">
                CRICKETS 11
              </div>
              <p className="text-muted-foreground text-sm">
                India's premier fantasy cricket platform for cricket
                enthusiasts. Create your dream team and experience the thrill of
                live cricket.
              </p>
              <div className="flex space-x-4 mt-4">
                <div className="w-6 h-6 bg-primary rounded"></div>
                <div className="w-6 h-6 bg-primary rounded"></div>
                <div className="w-6 h-6 bg-primary rounded"></div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["Home", "About Us", "Points Table", "Help Center"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                {[
                  "Terms & Conditions",
                  "Privacy Policy",
                  "Refund & Cancellation Policy",
                  "Community Guidelines",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm">
                    support@crickets11.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Crickets11. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;