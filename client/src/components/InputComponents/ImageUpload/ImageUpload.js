import React from "react";
import cx from "classnames";

const ImageUpload = ({
  name,
  type,
  formikProps,
  classes: { uploadContainer, inputContainer, fileName },
}) => {
  console.log(formikProps);
  return (
    <div className={uploadContainer}>
      <div className={inputContainer}>
        <span>Support only images (*.png, *.gif, *.jpeg)</span>
        <input
          id="fileInput"
          name={name}
          type={type}
          accept=".jpg, .png, .jpeg"
          onChange={(e) => formikProps.setFieldValue(name, e.target.files[0])}
        />
        <label htmlFor="fileInput">Choose file</label>
      </div>
      <p className={cx({ [fileName]: formikProps.values[name]?.name })}>
        {formikProps.values[name]?.name}
      </p>
    </div>
  );
};

export default ImageUpload;
