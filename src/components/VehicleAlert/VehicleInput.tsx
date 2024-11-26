import React from 'react';

interface Props{
  label:string;
  id:string;
  pattern:string;
  required:boolean;
  value:string;
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=>{};
}

const VehicleInput = ({ label, id, pattern, required,value,onChange }:Props) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        pattern={pattern}
        onChange={e=>onChange(e)}
        required={required}
        value={value}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <p className="mt-1 text-sm text-red-600 hidden" id={`${id}-error`}></p>
    </div>
  );
};

export default VehicleInput;
