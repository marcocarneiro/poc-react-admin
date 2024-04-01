import { Admin, Resource, ShowGuesser, EditGuesser } from "react-admin"
import { dataProvider } from "./dataProvider"
import { PostList, PostEdit, PostCreate } from "./components/Posts"
import { UserList } from "./components/UseList"
import PostIcon from "@mui/icons-material/Book"
import UserIcon from "@mui/icons-material/Group"
import { Dashboard } from "./components/Dashboard"
import ptBrMessages from 'ra-language-pt-br';
import polyglotI18nProvider from 'ra-i18n-polyglot'

const messages = {
  'pt-br': ptBrMessages,
};
//const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'pt-br')
const i18nProvider = polyglotI18nProvider((locale: string) => messages[locale], 'pt-br');


export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard} i18nProvider={i18nProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" icon={UserIcon} />
  </Admin>
)
