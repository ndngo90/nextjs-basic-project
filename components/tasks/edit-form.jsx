"use client";
import { updateTask } from "@/utils/actions";
const EditForm = ({ task }) => {
  const { id, completed, content } = task;
  return (
    <form
      action={updateTask}
      className="max-w-sm rounded-lg border border-base-300 bg-base-100  p-12"
    >
      <input type="hidden" name="taskId" value={id} />
      {/* content */}

      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />

      {/* completed */}
      <div className="form-control my-4">
        <label className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            name="completed"
            className="checkbox-primary checkbox checkbox-sm"
          />
        </label>
      </div>
      <button className="btn btn-primary btn-sm btn-block">edit</button>
    </form>
  );
};
export default EditForm;
