"use client";
import { useFormStatus, useFormState } from "react-dom";
import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import toast from "react-hot-toast";
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? "creating..." : "Add Task"}
    </button>
  );
};
const initialState = {
  message: null,
};
const CustomTaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message === "error") {
      toast.error("invalid input!");
      return;
    }
    if (state.message) {
      toast.success("task is created!");
    }
  });
  return (
    <form className="flex items-center gap-4" action={formAction}>
      <input
        type="text"
        id="task"
        name="task"
        className="input input-bordered w-full"
        placeholder="type task..."
        required
      />
      <SubmitButton />
    </form>
  );
};
export default CustomTaskForm;
