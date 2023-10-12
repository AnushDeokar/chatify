import prisma from "@/app/libs/prismadb";

const getChatById = async (chatId: string) => {
  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: chatId,
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

export default getChatById;
