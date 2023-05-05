# Simple Blog Micro-CMS with React and Local Storage

This is a simple micro-CMS system for a personal blog created using React JS and local storage. It includes basic functionality such as creating, editing, and reading blog posts, as well as a simple search feature.

## Atomic Design Organization

The project follows the Atomic Design methodology, with the following organization:

- **Atoms**: `ImageHero`, `Logo`, `Menu`, `MenuItem`, `SearchBar`
- **Molecules**: `PostEditor`, `PostItem`
- **Organisms**: `Header`, `PostsList`
- **Templates**: `Blog`, `Contact`, `Home`, `PostPage`
- **Pages**: `About`

## Components and Pages

The following components and pages are included in the project:

- `Logo`: Renders the blog's logo.
- `Menu`: Renders a list of site sections (Home, About, Blog, Contact).
- `ImageHero`: Renders the site's hero image.
- `SearchBar`: Searches the list of posts by name and returns a list of the post-matching strings entered.
- `PostEditor`: Allows users to create or edit a blog post.
- `PostItem`: Renders a blog post item.
- `PostsList`: Displays all of the blog posts and allows users to add new posts or edit existing ones.
- `Header`: Renders the blog's logo and main menu.
- `Blog`: Template that displays the list of posts.
- `Contact`: Template that displays contact information.
- `Home`: Template that displays the site's hero image and brief introduction.
- `PostPage`: Template that displays a single blog post.
- `About`: Page that displays information about the blog.

## Local Storage

The project uses local storage to store the blog posts, which are stored as an array of objects with the following structure:

```javascript
{
  id: 1,
  title: "Blog Post Title",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales magna sit amet massa blandit, vel fringilla eros fringilla. Donec nec ultrices lectus, at tempor felis. Nullam accumsan velit eu orci commodo lobortis.",
}

The following functions are used to interact with local storage:

readFromLocalStorage(key): Reads a value from local storage with the specified key.
saveToLocalStorage(key, value): Saves a value to local storage with the specified key.

## Installation and Usage

To use the project, simply clone the repository and install the dependencies:

To start the development server, run the following command:

```bash
npm start

To create a production build, run the following command:

```bash
npm run build

To start the development server, run the following command:

npm start

The application will be available at http://localhost:3000.