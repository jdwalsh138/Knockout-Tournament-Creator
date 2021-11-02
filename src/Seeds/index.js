import {
    ALERT_VALID
    ADMIN_VALID
    GUEST_VALID
  } from '../Db';

export const alertActions = {
    success,
    error,
    clear
};

export const alertSuccess = (message) => (
    {
      type: ADD_TEAM,
      message
    }
  )

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}