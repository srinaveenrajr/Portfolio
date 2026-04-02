import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-foreground">
          Sri Naveenraj R
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (<a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>))}
          <Button size="sm" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (<div className="md:hidden glass border-t border-border/50 px-4 pb-4 space-y-2">
          {navLinks.map((l) => (<a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>))}
          <Button size="sm" className="w-full" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>)}
    </nav>);
};
export default Navbar;
