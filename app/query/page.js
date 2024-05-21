import prisma from "@/utils/db";

const prismaHandler = async (task) => {
  await prisma.task.create({
    data: {
      content: task,
    },
  });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const Query = async () => {
  // const tasks = await prismaHandler();
  const tasks = [];
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Prisma Testing</h1>
    </>
  );
};
export default Query;
