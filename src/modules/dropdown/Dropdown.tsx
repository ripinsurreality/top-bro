import Chevron from "@modules/icons/Chevron"
import React, { useEffect, useRef, useState } from "react"
import "./dropdown.sass"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"

SwiperCore.use([Navigation])

interface IOption {
  value: string
  label: string
  disabled?: boolean
  selected?: boolean
}

interface DropdownProps {
  options: IOption[]
  placeholder: string
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder }) => {
  const [isMenuClosed, setIsMenuClosed] = useState(false)
  const [currentOption, setCurrentOption] = useState<IOption | undefined>(
    options.find((option) => option.selected)
  )
  const dropdownRef = useRef<HTMLDivElement>(null)

  /* Close menu on page load. Otherwise Swiper buggs out and makes infinite height. */
  useEffect(() => {
    setIsMenuClosed(true)
  }, [])

  /* Class name parts */
  const wrapperClassName = "dropdown"
  const blockConnector = "__"
  const modConnector = "--"
  const controlName = "control"
  const menuName = "menu"
  const menuClosed = "closed"
  const optionName = "option"
  const optionDisabled = "disabled"
  const optionSelected = "selected"
  const arrowName = "arrow"
  const arrowUpName = "up"
  const arrowDownName = "down"

  /* Class names whole */
  const controlClassName = `${wrapperClassName}${blockConnector}${controlName}`
  const menuClassName = `${wrapperClassName}${blockConnector}${menuName}`
  const menuClosedMod = `${menuClassName}${modConnector}${menuClosed}`
  const optionClassName = `${wrapperClassName}${blockConnector}${optionName}`
  const optionDisabledMod = `${optionClassName}${modConnector}${optionDisabled}`
  const optionSelectedMod = `${optionClassName}${modConnector}${optionSelected}`
  const arrowClassName = `${wrapperClassName}${blockConnector}${arrowName}`
  const arrowUpMod = `${arrowClassName}${modConnector}${arrowUpName}`
  const arrowDownMod = `${arrowClassName}${modConnector}${arrowDownName}`

  const toggleDropdownMenu = () => {
    setIsMenuClosed(!isMenuClosed)
  }

  /* Events */
  const selectOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target
    if (!(target instanceof HTMLDivElement)) return
    setCurrentOption(
      options.filter((option) => target.dataset.value === option.value)[0]
    )
    setIsMenuClosed(true)
  }

  const onBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!(e.relatedTarget instanceof HTMLElement) && e.relatedTarget !== null)
      return
    if (dropdownRef.current?.contains(e.relatedTarget)) return
    setIsMenuClosed(true)
  }
  return (
    <>
      <div
        className={wrapperClassName}
        tabIndex={0}
        onBlur={onBlur}
        ref={dropdownRef}
      >
        {
          <div
            className={controlClassName}
            onClick={toggleDropdownMenu}
            data-selectable={true}
          >
            {currentOption ? currentOption.label : placeholder} <Chevron />
          </div>
        }
        <div
          className={`${menuClassName}${
            isMenuClosed ? " " + menuClosedMod : ""
          }`}
        >
          <div
            className={`${arrowClassName} ${arrowUpMod}`}
            data-selectable={true}
          >
            <Chevron />
          </div>
          <Swiper
            spaceBetween={2}
            direction={"vertical"}
            slidesPerView={"auto"}
            freeMode={true}
            navigation={{
              prevEl: `.${arrowUpMod}`,
              nextEl: `.${arrowDownMod}`,
            }}
            style={{
              width: "100%",
            }}
          >
            {options.map((option, i) => {
              const { label, value, disabled } = option
              return (
                <SwiperSlide key={`option-${value}-${i}`}>
                  <div
                    className={`${optionClassName}${
                      disabled ? " " + optionDisabledMod : ""
                    }${
                      currentOption?.value === value
                        ? " " + optionSelectedMod
                        : ""
                    }`}
                    data-value={value}
                    onClick={disabled ? undefined : selectOption}
                    key={`option-${i}`}
                    data-selectable={disabled ? false : true}
                  >
                    {label}
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div
            className={`${arrowClassName} ${arrowDownMod}`}
            data-selectable={true}
          >
            <Chevron />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dropdown
