import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/Sidebar";


import "./global.css";
import styles from "./components/App.module.css";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/WEBGITbruno-ferreira.png",
      name: "Bruno Ferreira",
      role: "CTO @ Brtech",
    },
    content: [
      {
        type: "Paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        type: "Paragraph",
        content:
          "Sed error numquam rerum magnam iusto hic, tempore, voluptatem maxime",
      },
      {
        type: "Paragraph",
        content:
          "sint nisi eius sit blanditiis porro esse deserunt mollitia eos id omnis?",
      },
      { type: "Link", content: "https://github.com/WEBGITbruno-ferreira" },
      
    ],
    publishedAt: new Date('2023-01-03 20:00')
  },

  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk B.",
      role: "CTO @ Rockets",
    },
    content: [
      {
        type: "Paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        type: "Paragraph",
        content:
          "Sed error numquam rerum magnam iusto hic, tempore, voluptatem maxime",
      },
      {
        type: "Paragraph",
        content:
          "sint nisi eius sit blanditiis porro esse deserunt mollitia eos id omnis?",
      },
      { type: "Link", content: "https://github.com/maykbrito" },
      
    ],
    publishedAt: new Date('2023-01-20 20:00')
  },
];


export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          
          {posts.map( (post, index) => {
            return (
              <Post key={index} author = {post.author} content={post.content} publishedAt={post.publishedAt} />

              
            )
          })}


        </main>
      </div>
    </>
  );
}
