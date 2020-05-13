import React from 'react'
import { toast } from 'react-toastify'

import { CloseButton } from './close.button'

export default {
  success(msg: string): React.ReactText {
    return toast.success(msg, {
      className: 'toastr-success',
      progressClassName: 'toastr-success-pg',
      autoClose: 2000,
      closeButton: <CloseButton color="rgb(0, 102, 68)" />,
    })
  },

  warn(msg: string): React.ReactText {
    return toast.success(msg, {
      className: 'toastr-warn',
      progressClassName: 'toastr-warn-pg',
      closeButton: <CloseButton color="rgb(255, 139, 0)" />,
    })
  },

  info(msg: string): React.ReactText {
    return toast.success(msg, {
      className: 'toastr-info',
      progressClassName: 'toastr-info-pg',
      closeButton: <CloseButton color="rgb(80, 95, 121)" />,
    })
  },

  error(msg: string): React.ReactText {
    return toast.error(msg, {
      className: 'toastr-error',
      progressClassName: 'toastr-error-pg',
      autoClose: 4000,
      closeButton: <CloseButton color="rgb(191, 38, 0)" />,
    })
  },
}
