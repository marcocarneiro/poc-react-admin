import { Edit, Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin'
import { List, Datagrid, TextField, ReferenceField, EditButton } from "react-admin"
import { useRecordContext} from "react-admin"

//Filter
const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
]

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" link="show" />          
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
)

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" InputProps={{ disabled: true }} />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
)

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" InputProps={{ disabled: true }} />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Create>
)

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
}