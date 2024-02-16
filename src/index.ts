import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  email: string,
  password: string,
  firstname: string,
  lastname: string
) {
  const res = await prisma.user.create({
    data: {
      email,
      password,
      firstname,
      lastname,
    },
  });
  console.log(res);
}

insertUser("shikhar@gmail.com", "shikhar123", "Shikhar", "Bansal");

interface UpdateParams {
  firstname: string;
  lastname: string;
}

async function updateUser(
  email: string,
  { firstname, lastname }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { email },
    data: {
      firstname,
      lastname,
    },
  });
  console.log(res);
}

updateUser("shikhar@gmail.com", {
  firstname: "Shikhar123",
  lastname: "bansal123",
});

async function getUser(firstname: string) {
  const user = await prisma.user.findFirst({
    where: {
      firstname: firstname,
    },
  });
  console.log(user);
}

getUser("Shikhar123");
