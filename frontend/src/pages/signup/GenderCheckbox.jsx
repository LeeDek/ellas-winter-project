// eslint-disable-next-line react/prop-types
const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-300">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info"
            checked={selectedGender === "male"}
            onChange={() =>
              onCheckboxChange(selectedGender === "male" ? "" : "male")
            }
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-300">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info"
            checked={selectedGender === "female"}
            onChange={() =>
              onCheckboxChange(selectedGender === "female" ? "" : "female")
            }
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "other" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-300">Other</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info"
            checked={selectedGender === "other"}
            onChange={() =>
              onCheckboxChange(selectedGender === "other" ? "" : "other")
            }
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

//Starter Code

// const GenderChechbox = () => {
//     return (
//       <div className="flex mt-2">
//         <div className="form-control">
//           <label className={`label gap-2 cursor-pointer`}>
//             <span className="label-text text-gray-300">Male</span>
//             <input type="checkbox" className="checkbox checkbox-info" />
//           </label>
//         </div>
//         <div className="form-control">
//           <label className={`label gap-2 cursor-pointer`}>
//             <span className="label-text text-gray-300">Female</span>
//             <input type="checkbox" className="checkbox checkbox-info" />
//           </label>
//         </div>
//         <div className="form-control">
//           <label className={`label gap-2 cursor-pointer`}>
//             <span className="label-text text-gray-300">Other</span>
//             <input type="checkbox" className="checkbox checkbox-info" />
//           </label>
//         </div>
//       </div>
//     );
//   };

//   export default GenderChechbox;
