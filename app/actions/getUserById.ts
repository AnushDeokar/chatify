import prisma from "@/app/libs/prismadb";

const getUserById = async (user: string) => {
  try {
    const chat = await prisma.user.findUnique({
      where: {
        id: user,
      },
    });
    if (!chat) {
      return null;
    }
    return chat;
  } catch (err) {
    throw new Error("There is some Error");
  }
};

export default getUserById;
