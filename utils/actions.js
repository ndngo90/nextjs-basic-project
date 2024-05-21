"use server";
import { z } from "zod";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { resolve } from "styled-jsx/css";

export const createTask = async (formData) => {
  const task = formData.get("task");
  await prisma.task.create({
    data: {
      content: task,
    },
  });
  revalidatePath("/tasks");
};
export const createTaskCustom = async (prevState, formData) => {
  const content = formData.get("task");
  const Task = z.object({
    content: z.string().min(5),
  });
  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    return { message: "error" };
  }
};
export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
export const deleteTask = async (formData) => {
  const taskId = formData.get("taskId");
  await prisma.task.delete({
    where: {
      id: taskId,
    },
  });
  revalidatePath("/tasks");
};

export const updateTask = async (formData) => {
  const id = formData.get("taskId");
  const content = formData.get("content");
  let completed = formData.get("completed");
  if (completed === "on") {
    completed = true;
  } else {
    completed = false;
  }
  await prisma.task.upsert({
    where: {
      id,
    },
    update: {
      content,
      completed: completed,
    },
    create: {
      content,
      completed: completed,
    },
  });
  revalidatePath("/tasks");
  redirect("/tasks");
};
export const getSingleTask = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id: id,
    },
  });
};
