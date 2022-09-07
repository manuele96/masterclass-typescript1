import React from "react";
interface IUser {
  name: string;
  email?: string;
}
interface IProps {
  user: IUser;
}
const User: React.FC<IProps> = ({ user }) => {
  return (
    <div>
      <strong>Nome: </strong>
      {user.name}
      <br></br>
      <strong>Nome: </strong>
      {user.email || "Não possui email"}
      <br></br>
    </div>
  );
};
export default User;
