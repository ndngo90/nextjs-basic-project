import { createTask } from "@/utils/actions";

const TaskForm = async () => {
  return (
    <form className="flex items-center gap-4" action={createTask}>
      <input
        type="text"
        id="task"
        name="task"
        className="input input-bordered w-full"
        placeholder="type task..."
        required
        // value={task}
        // onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
};
export default TaskForm;
