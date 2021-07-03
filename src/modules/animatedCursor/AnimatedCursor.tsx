import React, { useState, useEffect, useCallback, useRef } from "react"
import { useEventListener } from "./hooks/useEventListener"
import isDevice from "./helpers/isDevice"

/**
 * Cursor Core
 * Replaces the native cursor with a custom animated cursor, consisting
 * of an inner and outer dot that scale inversely based on hover or click.
 *
 * @author Stephen Scaff (github.com/stephenscaff)
 *
 * @param {string} color - rgb color value
 * @param {number} outerAlpha - level of alpha transparency for color
 * @param {number} innerSize - inner cursor size in px
 * @param {number} innerScale - inner cursor scale amount
 * @param {number} outerSize - outer cursor size in px
 * @param {number} outerScale - outer cursor scale amount
 *
 */
function CursorCore({
  color = "220, 90, 90",
  outerAlpha = 0.3,
  innerSize = 8,
  innerScale = 0.7,
  outerSize = 18,
  outerScale = 5,
  trailingSpeed = 8,
}) {
  const cursorOuterRef = useRef<HTMLDivElement>(null)
  const cursorInnerRef = useRef<HTMLDivElement>(null)
  const [requestState, setRequestState] = useState(0)
  const previousTimeRef = useRef()
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isActiveClickable, setIsActiveClickable] = useState(false)
  let endX = useRef(0)
  let endY = useRef(0)

  // Primary Mouse Move event
  const onMouseMove = useCallback(({ clientX, clientY }) => {
    if (!cursorInnerRef.current) return
    setCoords({ x: clientX, y: clientY })
    cursorInnerRef.current.style.top = `${clientY}px`
    cursorInnerRef.current.style.left = `${clientX}px`
    endX.current = clientX
    endY.current = clientY
  }, [])

  // Outer Cursor Animation Delay
  const animateOuterCursor = useCallback(
    (time) => {
      if (previousTimeRef.current && cursorOuterRef.current) {
        coords.x += (endX.current - coords.x) / trailingSpeed
        coords.y += (endY.current - coords.y) / trailingSpeed
        cursorOuterRef.current.style.top = `${coords.y}px`
        cursorOuterRef.current.style.left = `${coords.x}px`
      }
      previousTimeRef.current = time
      setRequestState(requestAnimationFrame(animateOuterCursor))
    },
    [requestState]
  )

  // RAF for animateOuterCursor
  useEffect(() => {
    setRequestState(requestAnimationFrame(animateOuterCursor))
    return () => {
      cancelAnimationFrame(requestState)
    }
  }, [animateOuterCursor])

  // Mouse Events State updates
  const onMouseDown = useCallback(() => {
    setIsActive(true)
  }, [])

  const onMouseUp = useCallback(() => {
    setIsActive(false)
  }, [])

  const onMouseEnterViewport = useCallback(() => {
    setIsVisible(true)
  }, [])

  const onMouseLeaveViewport = useCallback(() => {
    setIsVisible(false)
  }, [])

  useEventListener("mousemove", onMouseMove)
  useEventListener("mousedown", onMouseDown)
  useEventListener("mouseup", onMouseUp)
  useEventListener("mouseover", onMouseEnterViewport)
  useEventListener("mouseout", onMouseLeaveViewport)

  // Cursors Hover/Active State
  useEffect(() => {
    if (!cursorOuterRef.current) return
    cursorOuterRef.current.style.width = `${
      isActive ? outerSize * outerScale : outerSize
    }px`
    cursorOuterRef.current.style.height = `${
      isActive ? outerSize * outerScale : outerSize
    }px`
  }, [innerScale, outerScale, isActive])

  // Cursors Click States
  useEffect(() => {
    if (!isActiveClickable) return
    // cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${
    //   innerScale * 1.2
    // })`
    // cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${
    //   outerScale * 1.4
    // })`
  }, [innerScale, outerScale, isActiveClickable])

  // Cursor Visibility State
  useEffect(() => {
    if (!cursorOuterRef.current) return
    if (!cursorInnerRef.current) return
    cursorInnerRef.current.style.opacity = isVisible ? "1" : "0"
    cursorOuterRef.current.style.opacity = isVisible ? "1" : "0"
  }, [isVisible])

  // Target all possible clickables
  useEffect(() => {
    const clickablesQuery =
      'a, input[type="submit"], input[type="image"], label, select, button, [data-selectable="true"]'
    const clickables = document.querySelectorAll(clickablesQuery)
    clickables.forEach((el) => {
      if (!(el instanceof HTMLElement)) return
      el.style.cursor = "none"

      el.addEventListener("mouseover", () => {
        setIsActive(true)
      })
      el.addEventListener("click", () => {
        setIsActive(true)
        setIsActiveClickable(false)
      })
      el.addEventListener("mousedown", () => {
        setIsActiveClickable(true)
      })
      el.addEventListener("mouseup", () => {
        setIsActive(true)
      })
      el.addEventListener("mouseout", () => {
        setIsActive(false)
        setIsActiveClickable(false)
      })
    })

    const onDocumentMouseOver = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement)) return
      if (!isActive) return
      const hasClickable = !!e.target.closest(clickablesQuery)
      if (hasClickable) return
      setIsActive(false)
      setIsActiveClickable(false)
    }
    document.addEventListener("mouseover", onDocumentMouseOver)

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener("mouseover", () => {
          setIsActive(true)
        })
        el.removeEventListener("click", () => {
          setIsActive(true)
          setIsActiveClickable(false)
        })
        el.removeEventListener("mousedown", () => {
          setIsActiveClickable(true)
        })
        el.removeEventListener("mouseup", () => {
          setIsActive(true)
        })
        el.removeEventListener("mouseout", () => {
          setIsActive(false)
          setIsActiveClickable(false)
        })
        document.removeEventListener("mouseover", onDocumentMouseOver)
      })
    }
  }, [isActive])

  // Cursor Styles
  const styles: {
    [element: string]: React.CSSProperties | undefined
  } = {
    cursorInner: {
      zIndex: 999,
      display: "block",
      position: "fixed",
      borderRadius: "50%",
      width: innerSize,
      height: innerSize,
      pointerEvents: "none",
      background: `rgba(${color}, 1)`,
      transform: `translate(-50%, -50%)`,
      transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
      willChange: "top, bottom",
    },
    cursorOuter: {
      zIndex: 999,
      display: "block",
      position: "fixed",
      borderRadius: "50%",
      pointerEvents: "none",
      width: outerSize,
      height: outerSize,
      border: `2px solid rgba(${color}, ${outerAlpha})`,
      transform: "translate(-50%, -50%)",
      transition:
        "opacity 0.15s ease-in-out, width 0.15s ease-in-out, height 0.15s ease-in-out",
      willChange: "width, height, top, bottom",
    },
  }

  // Hide / Show global cursor
  document.body.style.cursor = "none"

  return (
    <>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner} />
    </>
  )
}

/**
 * AnimatedCursor
 * Calls and passes props to CursorCore if not a touch/mobile device.
 */
function AnimatedCursor({
  color = "254, 139, 76",
  outerAlpha = 1,
  innerSize = 20,
  outerSize = 20,
  outerScale = 4,
  innerScale = 1,
  trailingSpeed = 1,
}) {
  if (typeof navigator !== "undefined" && isDevice?.any()) {
    return <React.Fragment></React.Fragment>
  }
  return (
    <CursorCore
      color={color}
      outerAlpha={outerAlpha}
      innerSize={innerSize}
      innerScale={innerScale}
      outerSize={outerSize}
      outerScale={outerScale}
      trailingSpeed={trailingSpeed}
    />
  )
}

export default AnimatedCursor
