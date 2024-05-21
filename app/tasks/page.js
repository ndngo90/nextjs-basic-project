import CustomTaskForm from "@/components/tasks/task-form-custom";
import TaskList from "@/components/tasks/task-list";
export const dynamic = "force-dynamic";
const TaskPage = async () => {
  return (
    <div className="max-w-lg">
      {/* <TaskForm /> */}
      <CustomTaskForm />
      <TaskList />
    </div>
  );
};
export default TaskPage;
