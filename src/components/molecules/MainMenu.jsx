import MenuItem from "../atoms/MenuItem";

const MainMenu = () => {
  const menuItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <nav className="main-menu">
      <ul>
        {menuItems.map((item, index) => (
          <MenuItem key={index} text={item.text} href={item.href} />
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
