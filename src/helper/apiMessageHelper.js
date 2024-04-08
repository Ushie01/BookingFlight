import { ErrorToast, SuccessToast } from "../client/share/toastBar";

const apiMessageHelper = ({
  statusCode,
  onSuccessCallback,
  onFailureCallback,
  message,
}) => {
  if (statusCode >= 400 && statusCode <= 500) {
    if (Array.isArray(message)) {
      message.forEach((value) => ErrorToast({ text: value }));
    } else {
      ErrorToast({ text: message });
    }
    onFailureCallback && onFailureCallback();
  }

  if (statusCode === 200 || statusCode === 201) {
    onSuccessCallback && onSuccessCallback();
    if (typeof message === "string") {
      SuccessToast({ text: message });
    }
  }
};

export default apiMessageHelper;
