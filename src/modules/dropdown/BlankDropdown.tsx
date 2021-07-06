import React, { useEffect, useRef, useState } from "react"

interface BlankDropdownProps {
  classes?: {
    wrapper?: string
    wrapperClosed?: string
    control?: string
    menu?: string
    menuClosed?: string
    option?: string
    optionDisabled?: string
    optionSelected?: string
  }
  options: IOption[]
  Option: React.FC<{
    selectOption: (event: React.SyntheticEvent<HTMLElement>) => void
    value: string
    className: string
  }>
  OptionsWrapper?: React.FC<{}>
  Control: React.FC<{
    currentOption: string
    toggleMenu: (event: React.SyntheticEvent<HTMLElement>) => void
  }>
  placeholder: string
  closeOnSelect?: boolean
}

interface IOption {
  value: string
  label: string
  disabled?: boolean
  selected?: boolean
  hidden?: boolean
}

const BlankDropdown: React.FC<BlankDropdownProps> = ({
  classes,
  options,
  OptionsWrapper,
  Option,
  Control,
  placeholder,
  closeOnSelect = true,
}) => {
  const [isMenuClosed, setIsMenuClosed] = useState(false)
  const [currentOption, setCurrentOption] = useState<IOption | undefined>(
    options.find((option) => option.selected)
  )
  const wrapperRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMenuClosed(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuClosed(!isMenuClosed)
  }

  const selectOption = (e: React.SyntheticEvent<HTMLElement>) => {
    const target = e.target
    if (!(target instanceof HTMLElement)) return
    setCurrentOption(
      options.filter((option) => target.dataset.value === option.value)[0]
    )
    closeOnSelect && setIsMenuClosed(true)
  }

  const onBlur = (e: React.FocusEvent<HTMLElement>) => {
    if (!(e.relatedTarget instanceof HTMLElement) && e.relatedTarget !== null)
      return
    if (wrapperRef.current?.contains(e.relatedTarget)) return
    setIsMenuClosed(true)
  }

  const mappedOptions = options.map((option) => (
    <Option
      className={[
        classes?.option,
        option.disabled && classes?.optionDisabled,
        currentOption?.value === option.value && classes?.optionSelected,
      ].join(" ")}
      selectOption={selectOption}
      value={option.value}
    >
      {option.label}
    </Option>
  ))

  return (
    <div
      className={classes?.wrapper}
      tabIndex={0}
      ref={wrapperRef}
      onBlur={onBlur}
    >
      <div className={classes?.control} onClick={toggleMenu}>
        <Control
          currentOption={currentOption?.label ?? placeholder}
          toggleMenu={toggleMenu}
        />
      </div>
      <div
        ref={menuRef}
        className={[classes?.menu, isMenuClosed && classes?.menuClosed].join(
          " "
        )}
      >
        {OptionsWrapper ? (
          <OptionsWrapper>{mappedOptions}</OptionsWrapper>
        ) : (
          mappedOptions
        )}
      </div>
    </div>
  )
}

export default BlankDropdown
