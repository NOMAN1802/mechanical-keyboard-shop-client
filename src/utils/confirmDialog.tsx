/* eslint-disable @typescript-eslint/no-explicit-any */


const ConfirmDialog = ({ message, description, onConfirm, onCancel }: any) => {
  return (
    <div className="bg-slate-400 rounded">
      <h4 className="text-center text-slate-100">{message}</h4>
      <p  className="text-center text-slate-100">{description}</p>
      <div className="flex justify-center space-x-2 p-4">
        <button className="p-2 bg-slate-600 text-slate-100 rounded" onClick={onCancel}>
          Cancel
        </button>
        <button className="p-2 bg-red-500 text-slate-100 rounded" onClick={onConfirm}>
          Yes, remove it!
        </button>
      </div>
    </div>
  );
};

export default ConfirmDialog;
