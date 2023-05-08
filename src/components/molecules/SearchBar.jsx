import { useEffect, useState } from "react";
import { readFromLocalStorage } from "../../helpers/localStorage";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    const postsKey = "blogPosts";
    const savedPosts = readFromLocalStorage(postsKey);
    setPosts(savedPosts);
  };

  useEffect(() => {
    getPosts();
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, posts]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <div className="search-results-container">
          <ul className="search-results">
            {filteredPosts.map((post) => (
              <li key={post.id} className="search-result">
                <Link to={`/post/${post.id}`} onClick={() => setSearchTerm("")}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
