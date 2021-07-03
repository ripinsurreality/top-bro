const isDevice = (() => {
  if (typeof navigator == "undefined") return

  let ua = navigator.userAgent

  return {
    info: ua,

    Android() {
      return ua.match(/Android/i)
    },
    BlackBerry() {
      return ua.match(/BlackBerry/i)
    },
    IEMobile() {
      return ua.match(/IEMobile/i)
    },
    iOS() {
      return ua.match(/iPhone|iPad|iPod/i)
    },
    OperaMini() {
      return ua.match(/Opera Mini/i)
    },

    /**
     * Any Device
     */
    any() {
      return (
        isDevice &&
        (isDevice.Android() ||
          isDevice.BlackBerry() ||
          isDevice.iOS() ||
          isDevice.OperaMini() ||
          isDevice.IEMobile())
      )
    },
  }
})()

// Export
export default isDevice
