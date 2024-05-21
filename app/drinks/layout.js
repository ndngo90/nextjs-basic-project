const DrinksLayout = ({ children }) => {
  return (
    <>
      <div className="mockup-window border bg-base-300">
        <div className="flex items-center px-4 py-8">
          <code>Do you have a question? ask the community</code>
        </div>
      </div>
      {children}
    </>
  );
};
export default DrinksLayout;
