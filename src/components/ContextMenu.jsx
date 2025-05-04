export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  expnenses,
  setExpenses,
  rowId,
  setExpense,
}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          setMenuPosition({});
          const { category, title, amount } = expnenses.find(
            (exp) => exp.id === rowId
          );
          setExpense({ category, title, amount });
          //   const editingExpense = expnenses.filter((exp) => exp.id === rowId)[0];
          //   setExpense(editingExpense);
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setMenuPosition({});
          setExpenses((prev) => prev.filter((exp) => exp.id !== rowId));
        }}
      >
        Delete
      </div>
    </div>
  );
}
