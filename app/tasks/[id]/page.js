import { getSingleTask } from "@/utils/actions";
import Link from "next/link";
import EditForm from "@/components/tasks/edit-form";
const EditTaskPage = async ({ params }) => {
  const task = await getSingleTask(params.id);
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          Back to Tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};
export default EditTaskPage;
