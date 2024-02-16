"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// async function insertUser(
//   email: string,
//   password: string,
//   firstname: string,
//   lastname: string
// ) {
//   const res = await prisma.user.create({
//     data: {
//       email,
//       password,
//       firstname,
//       lastname,
//     },
//   });
//   console.log(res);
// }
//insertUser("shikhar@gmail.com", "shikhar123", "Shikhar", "Bansal");
// interface UpdateParams {
//   firstname: string;
//   lastname: string;
// }
// async function updateUser(
//   email: string,
//   { firstname, lastname }: UpdateParams
// ) {
//   const res = await prisma.user.update({
//     where: { email },
//     data: {
//       firstname,
//       lastname,
//     },
//   });
//   console.log(res);
// }
// updateUser("shikhar@gmail.com", {
//   firstname: "Shikhar123",
//   lastname: "bansal123",
// });
function getUser(firstname) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findFirst({
            where: {
                firstname: firstname,
            },
        });
        console.log(user);
    });
}
getUser("Shikhar123");
