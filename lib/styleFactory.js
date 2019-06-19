
import { isObject } from "./helperFactory"

const proerties = {
  direction: (style, size) => {
    if (isObject(style)) {
      return { flexDirection: style[size] || "row" }
    }
    return { flexDirection: style }
  },
  justify: (style, size) => {
    if (isObject(style)) {
      return { justifyContent: style[size] || "start" }
    }
    return { justifyContent: style }
  },
  align: (style, size) => {
    if (isObject(style)) {
      return { alignItems: style[size] || "stretch" }
    }
    return { alignItems: style }
  },
  show: (style, size) => {
    if (isObject(style)) {
      let hide = typeof style[size] === "boolean" && (style[size] === false)
      return { display: hide ? "none" : "flex" }
    }
    return { display: style ? "flex" : "none" }
  },
  hide: (style, size) => {
    if (isObject(style)) {
      let hide = typeof style[size] === "boolean" && (style[size] === true)
      return { display: hide ? "none" : "flex" }
    }
    return { display: style ? "none" : "true" }
  },
  width: (style, size) => {
    if (isObject(style)) {
      return style[size] ? { width: style[size] } : {}
    }
    return { width: style }
  }
}


export const getStyle = (props, dimensions) => {
  return Object.entries(props).reduce((newStyle, [key, value]) => {
    if (proerties[key]) {
      let propsStyle = proerties[key](value, dimensions.size) || {}
      return { ...newStyle, ...propsStyle }
    }
    return newStyle;
  }, { display: "flex" })
}