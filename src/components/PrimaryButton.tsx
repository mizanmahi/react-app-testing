type PrimaryButtonProps = { actionType?: string };

const PrimaryButton = ({ actionType = 'Add' }: PrimaryButtonProps) => {
   return <button>Click to {actionType}</button>;
};

export default PrimaryButton;
