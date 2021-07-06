import React, { useEffect, useRef, useState } from "react"

interface BlankSliderProps {}

const BlankSlider: React.FC<BlankSliderProps> = ({ children }) => {
  const [dragStartX, setDragStartX] = useState(0)
  const [dragStartY, setDragStartY] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  
  const rubberBand = () => {
    if (isDragging) return
    const wrapperRect = wrapperRef.current?.getBoundingClientRect()!
    const contentRect = contentRef.current?.getBoundingClientRect()!
    const isOverflowBottom =
      wrapperRect.top + wrapperRect.height >
      contentRect.top + contentRect.height
    const isOverflowTop = wrapperRect.top < contentRect.top
    contentRef.current!.style.transform = `translateY(${
      isOverflowBottom
        ? wrapperRect.height - contentRect.height
        : isOverflowTop
        ? 0
        : offsetY
    }px)`
  }
  useEffect(() => {
    return () => {}
  }, [])

  useEffect(() => {
    contentRef.current!.style.transform = `translateY(${offsetY}px)`
  }, [offsetY])

  useEffect(() => {
    overlayRef.current!.style.pointerEvents = isDragging ? `none` : "all"
    // rubberBand()
  }, [isDragging])

  return (
    <div
      className="blank-slider"
      ref={wrapperRef}
      style={{
        maxHeight: "130px",
      }}
    >
      <div
        className="blank-slider__content"
        ref={contentRef}
        style={{
          overflow: "hidden",
          transform: `translateY(0)`,
          transition: `transform 0.2s ease`,
          position: "relative",
        }}
        onMouseDown={(e) => {
          const target = e.target as HTMLElement
          const rect = contentRef.current?.getBoundingClientRect()!
          const x = e.clientX
          const y = e.clientY - offsetY
          setDragStartX(x)
          setDragStartY(y)
          setIsDragging(true)
        }}
        onMouseMove={(e) => {
          if (!isDragging) return
          const target = e.target as HTMLElement
          const rect = contentRef.current?.getBoundingClientRect()!
          const x = e.clientX
          const y = e.clientY
          const calcOffsetY = y - dragStartY
          setOffsetY(calcOffsetY)
        }}
        onMouseUp={(e) => {
          setIsDragging(false)
        }}
        onMouseLeave={(e) => {
          if (isDragging) setIsDragging(false)
        }}
      >
        <div
          ref={overlayRef}
          className="overlay"
          style={{ pointerEvents: "all" }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default BlankSlider
