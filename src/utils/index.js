import { toast } from "react-toastify";

export const notificationError = (error) => {
  toast.error(`${error}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const notificationSuccess = (message) => {
  toast.success(`${message}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const getAverage = (arr) => {
  const length = arr.length;
  const sum = arr.reduce((a, b) => a + b, 0);
  const average = sum / length;

  if (!isNaN(average)) {
    return Math.round(average * 100 + Number.EPSILON) / 100;
  } else {
    return null;
  }
};
