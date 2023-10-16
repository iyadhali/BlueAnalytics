import React from 'react';


interface SignInButtonProps {
  onClick?: () => void;
}

const Signbutton: React.FC<SignInButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 active:opacity-75 text-white px-4 py-2 rounded"
    >
      Sign In
    </button>
  );
};

export default Signbutton;
