function SignupAuth(values) {
  let error = {}
  const email_pattern = /^[^\s@]{2,102}@[^\s@]{4,256}\.[^\s@]{2,}$/
  const pin_pattern = /^[a-zA-Z0-9@]{8,}$/
  const username_pattern = /^[a-zA-Z0-9]{3,}$/ //alpha numeric character
  const mobilenumber_pattern = /^\d{10}$/

  if (!values.email) {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Invalid email format";
  } else {
      error.email= "";
  }

  if (!values.pwd) {
    error.pin = "pin should not be empty";
  } else if (!pin_pattern.test(values.pin)) {
    error.pin =
      "Pin must be at least 8 characters long";
  } else {
      error.pin="";
  }

  if (!values.confirmPwd) {
    error.confirmPwd = "Confirm Pwd should not be empty";
  } else if (String(values.confirmPwd) !== String(values.pwd)) {
    error.confirmPwd = "Confirm Pwd didn't match";
  } else {
      error.confirmPwd = "";
  }

  if (!values.username) {
    error.username = "Username should not be empty";
  } else if (!username_pattern.test(values.username)) {
    error.username =
      "Username must be at least 3 characters long and can only contain alphanumeric characters";
  } else {
      error.username="";
  }

  if (!values.mobileNumber) {
    error.mobileNumber = "Mobile Number should not be empty";
  } else if (!mobilenumber_pattern.test(values.mobileNumber)) {
    error.mobileNumber = "Invalid Mobile Number format";
  } else {
      error.mobileNumber="";
  }

  if (!values.userRole) {
    error.userRole = "admin/user should be selected";
  } else {
      error.userRole="";
  }

  return error;
}

export default SignupAuth;