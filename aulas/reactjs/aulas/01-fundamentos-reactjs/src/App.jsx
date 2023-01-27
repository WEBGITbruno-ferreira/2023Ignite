import { Post } from "./Post";

export function App() {
  return (
    <>
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
