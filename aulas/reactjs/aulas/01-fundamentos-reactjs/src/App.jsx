import { Header } from "./components/header";
import { Post } from "./Post";
import './global.css'

export function App() {
  return (
    <>
      <Header/>
      <Post
        author="Bruno"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit molestiae debitis voluptatem laudantium id, nulla excepturi blanditiis, magni nam quod velit nisi corrupti reiciendis consequuntur incidunt tempore doloribus amet aspernatur."
      />
      <Post
        author="Bruno 2"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit molestiae debitis voluptatem laudantium id, nulla excepturi blanditiis, magni nam quod velit nisi corrupti reiciendis consequuntur incidunt tempore doloribus amet aspernatur."
      />
    </>
  );
}
