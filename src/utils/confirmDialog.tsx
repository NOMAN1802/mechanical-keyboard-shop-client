/* eslint-disable @typescript-eslint/no-explicit-any */


const ConfirmDialog = ({ message, description, onConfirm, onCancel }: any) => {
  return (
    <div>
      <h4>{message}</h4>
      <p>{description}</p>
      <div className="flex justify-end space-x-2 mt-4">
        <button className="px-4 py-2 bg-slate-300 text-black" onClick={onCancel}>
          Cancel
        </button>
        <button className="px-4 py-2 bg-red-600 text-white" onClick={onConfirm}>
          Yes, remove it!
        </button>
      </div>
    </div>
  );
};

export default ConfirmDialog;
