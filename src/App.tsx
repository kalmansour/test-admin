import { Admin, Resource, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import { PostList } from "./posts";
import Dashboard from "./Dashboard";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
function App() {
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} />
      <Resource name="users" list={UserList} edit={EditGuesser} />
    </Admin>
  );
}

export default App;
