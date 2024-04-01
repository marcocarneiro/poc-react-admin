import { Admin, Resource, ShowGuesser, EditGuesser } from "react-admin"
import { dataProvider } from "./dataProvider"
import { PostList, PostEdit, PostCreate } from "./components/Posts"
import { UserList } from "./components/UseList"


export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" />
  </Admin>
)
