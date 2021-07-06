import React from "react"
import BlankDropdown from "@modules/dropdown/BlankDropdown"
import BlankSlider from "./BlankSlider"

interface CustomDropdownProps {}

const CustomDropdown: React.FC<CustomDropdownProps> = () => {
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

  return (
    <BlankDropdown
      placeholder="choose an option"
      Control={({ currentOption }) => <>{currentOption}</>}
      Option={({ children, selectOption, value, className }) => (
        <div onClick={selectOption} className={className} data-value={value}>
          {children}
        </div>
      )}
      OptionsWrapper={({children}) => <BlankSlider>{children}</BlankSlider>}
      options={[
        { label: "Option1", value: "1" },
        { label: "Option2", value: "2" },
        { label: "Option3", value: "3" },
        { label: "Option4", value: "4" },
        { label: "Option5", value: "5" },
        { label: "Option6", value: "6" },
        { label: "Option7", value: "7" },
        { label: "Option8", value: "8" },
      ]}
      classes={{
        wrapper: wrapperClassName,
        menu: menuClassName,
        control: controlClassName,
        option: optionClassName,
        optionDisabled: optionDisabledMod,
        optionSelected: optionSelectedMod,
        menuClosed: menuClosedMod,
      }}
    />
  )
}

export default CustomDropdown
