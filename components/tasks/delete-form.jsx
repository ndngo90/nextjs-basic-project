"use client";
import { deleteTask } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "deleting..." : "delete"}
    </button>
  );
};
const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="taskId" id="taskId" value={id} />
      <SubmitButton />
    </form>
  );
};
export default DeleteForm;
