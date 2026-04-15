// src/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-(--content-max-w) mx-auto px-5 pb-8 pt-6 border-t border-(--border-subtle) flex flex-col gap-2 text-[12px] text-fg-dimmed sm:flex-row sm:justify-between sm:items-center">
      <span>&copy; {currentYear} Kwon-KyoungMin All rights reserved.</span>
      <span>Built with React &middot; TypeScript &middot; Tailwind CSS</span>
    </footer>
  );
};

export default Footer;
