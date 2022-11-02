import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import CONSTANTS from "../../constants";
import { setOffer, clearAddOfferError } from "../../actions/actionCreator";
import styles from "./OfferForm.module.sass";
import ImageUpload from "../InputComponents/ImageUpload/ImageUpload";
import FormInput from "../FormInput/FormInput";
import Schems from "../../validators/validationSchems";
import Error from "../Error/Error";

const OfferForm = (props) => {
  console.log(props);
  const renderOfferInput = (formikProps) => {
    if (props.contestType === CONSTANTS.LOGO_CONTEST) {
      return (
        <ImageUpload
          name="offerData"
          type="file"
          formikProps={formikProps}
          classes={{
            uploadContainer: styles.imageUploadContainer,
            inputContainer: styles.uploadInputContainer,
            fileName: styles.fileName,
          }}
        />
      );
    }
    return (
      <FormInput
        name="offerData"
        classes={{
          container: styles.inputContainer,
          input: styles.input,
          warning: styles.fieldWarning,
          notValid: styles.notValid,
        }}
        type="text"
        label="your suggestion"
      />
    );
  };

  const setOffer = (values, { resetForm }) => {
    props.clearOfferError();
    const data = new FormData();
    console.log(data);
    const { contestId, contestType, customerId } = props;
    data.append("contestId", contestId);
    data.append("contestType", contestType);
    data.append("offerData", values.offerData);
    data.append("customerId", customerId);
    props.setNewOffer(data);
    resetForm();
  };

  const { addOfferError, clearOfferError } = props;
  const validationSchema =
    props.contestType === CONSTANTS.LOGO_CONTEST
      ? Schems.LogoOfferSchema
      : Schems.TextOfferSchema;
  return (
    <div className={styles.offerContainer}>
      {addOfferError && (
        <Error
          data={addOfferError.data}
          status={addOfferError.status}
          clearError={clearOfferError}
        />
      )}
      <Formik
        onSubmit={setOffer}
        initialValues={{
          offerData: "",
        }}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <Form className={styles.form}>
            {renderOfferInput(formikProps)}
            {formikProps.values.offerData && (
              <button type="submit" className={styles.btnOffer}>
                Send Offer
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setNewOffer: (data) => dispatch(setOffer(data)),
  clearOfferError: () => dispatch(clearAddOfferError()),
});

const mapStateToProps = (state) => {
  const { addOfferError } = state.contestByIdStore;
  return { addOfferError };
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferForm);
