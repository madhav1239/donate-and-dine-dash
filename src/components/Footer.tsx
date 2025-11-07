import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="rounded-full bg-gradient-primary p-2">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="bg-gradient-hero bg-clip-text text-transparent">Ann Daan</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Turning food waste into hope, one meal at a time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/restaurant" className="hover:text-primary transition-colors">
                  Restaurant Partner
                </Link>
              </li>
              <li>
                <Link to="/ngo" className="hover:text-primary transition-colors">
                  NGO Partner
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="hover:text-primary transition-colors">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@anndaan.org
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 7455896364
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Muradnagar, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Ann Daan. All rights reserved. Built with ❤️ for a better world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
