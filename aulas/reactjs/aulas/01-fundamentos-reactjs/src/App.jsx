import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/Sidebar";

import "./global.css";
import styles from "./components/App.module.css";


export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          
          <Post
            author="Bruno"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit molestiae debitis voluptatem laudantium id, nulla excepturi blanditiis, magni nam quod velit nisi corrupti reiciendis consequuntur incidunt tempore doloribus amet aspernatur."
          />
          <Post
            author="Bruno 2"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit molestiae debitis voluptatem laudantium id, nulla excepturi blanditiis, magni nam quod velit nisi corrupti reiciendis consequuntur incidunt tempore doloribus amet aspernatur."
          />
        </main>
      </div>
    </>
  );
}
