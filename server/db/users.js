import { prisma } from ".";
import bcrypt from "bcrypt";
import { userTransformer } from "../transformers/user";

export const createUser = (userData) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return prisma.user.create({ data: finalUserData });
};

export const getUserByUsername = (username) => {
  return prisma.user.findUnique({ where: { username } });
};

export const getUserById = (id) => {
  return prisma.user.findUnique({ where: { id } });
};

export const getAllUsers = () => {
  const usersArray = [];
  const users = prisma.user.findMany();
  users.forEach((user) => {
    userTransformer(user).push(usersArray);
  });
  return usersArray;
};

export const updateUser = (id, userData) => {
  return prisma.user.update({ where: { id }, data: userData });
};

export const getRandomUser = (count) => {
  const usersArray = [];
  const users = prisma.user.findMany({ take: count });
  users.forEach((user) => {
    userTransformer(user).push(usersArray);
  });
  return usersArray;
};
