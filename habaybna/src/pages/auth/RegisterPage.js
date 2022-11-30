import React from "react";
import CredintialsForm from "../../components/auth/CredintialsForm";
import DefaultLayout from "../../components/layout/DefaultLayout";

function RegisterPage() {
  return (
    <DefaultLayout>
        <div className="register-page pt-40">
        <div className="container">
            <CredintialsForm isRegister={true} />
        </div>
        </div>
    </DefaultLayout>
  );
}

export default RegisterPage;
