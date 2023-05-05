const MenuItem = ({ text, href }) => {
  return (
    <li className="menu-item">
      <a href={href}>{text}</a>
    </li>
  );
};

export default MenuItem;
