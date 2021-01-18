import { CustomDialog, useDialog } from 'react-st-modal';

function CustomDialogContent() {
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // Сlose the dialog and return the value
          dialog.close(value);
        }}
      >
        Custom button
      </button>
    </div>
  );
}

function CustomExample() {
  return (
    <div>
      <button
        onClick={async () => {
          const result = await CustomDialog(<CustomDialogContent />, {
            title: 'Custom Dialog',
            showCloseIcon: true,
          });
        }}
      >
        Custom
      </button>
    </div>
  );
}