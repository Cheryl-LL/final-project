'use client'

const Button = ({ onClick, children }) => (
    <button 
      onClick={onClick}
      className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors"
    >
      {children}
    </button>
  );
  
  export default Button;