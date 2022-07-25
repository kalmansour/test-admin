import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

export const UserList = () => {
  const nameFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users">
      <SelectInput optionText="name" />
    </ReferenceInput>,
  ];
  return (
    <List filters={nameFilters}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <UrlField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};
