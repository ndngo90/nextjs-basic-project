import Link from "next/link";
import DeleteForm from "../tasks/delete-form";
import { getAllTasks } from "@/utils/actions";

const TaskList = async () => {
  const tasks = await getAllTasks();
  if (tasks.length === 0) {
    return <h2 className="mt-8 text-lg font-medium">No task to show</h2>;
  }
  return (
    <ul className="mt-8 flex flex-col gap-4">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="flex items-center justify-between rounded-md border border-base-300 px-6 py-2  shadow-md"
          >
            <h2
              className={`capitalize ${task.completed ? "line-through" : ""} text-lg`}
            >
              {task.content}
            </h2>
            <div className="flex items-center gap-4">
              <Link
                href={`/tasks/${task.id}`}
                className="btn btn-sm bg-green-500 "
              >
                Edit
              </Link>
              <DeleteForm id={task.id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default TaskList;
