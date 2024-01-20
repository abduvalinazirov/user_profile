import { IUser } from "../types/data.models";

export const getUsers = async (): Promise<IUser[]> => {
  const response = await fetch("/api/users");
  return response.json();
};
export const getUser = async (id: string | undefined): Promise<IUser | null> => {
  const response = await fetch(`/api/user/${id}`);
  return response.ok ? response.json() : null;
};

export const updateUserProfile = async (newData: IUser): Promise<IUser> => {
  const response = await fetch(`/api/user/${newData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  return response.json();
};
