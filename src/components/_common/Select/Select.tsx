import React, { useState, useRef, useLayoutEffect } from "react";
import useClickOutside from "@/hooks/useClickOutside";

const Select = ({
    optionsList,
    trigger,
    valueKey,
    labels,
    activeOption,
    onChange,
    dataCy,
    childrenDataCy,
}) => {
    // selectedOption is only for keeping track of what option is user currently visiting
    // activeOption is the current value that is used in the parent component, the value will only be changed when user is selected an option, not just visited

    const [selectedOption, setSelectedOption] = useState(activeOption);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const optionsRef: any = useRef();

    const toggleOptions = () => setIsOptionsOpen(!isOptionsOpen);
    const closeOptions = () => setIsOptionsOpen(false);

    useClickOutside(optionsRef, closeOptions);

    const setSelectedThenCloseDropdown = (index) => {
        setSelectedOption(index);

        // Only call onChange if index is changed
        if (activeOption !== index) {
            onChange(index);
        }
        setIsOptionsOpen(false);
    };

    const handleKeyDown = (index) => (e) => {
        switch (e.key) {
            case " ":
            case "SpaceBar":
            case "Enter":
                e.preventDefault();
                setSelectedThenCloseDropdown(index);
                break;
            default:
                break;
        }
    };

    const handleListKeyDown = (e) => {
        switch (e.key) {
            case "Escape":
                e.preventDefault();
                setIsOptionsOpen(false);
                break;
            case "ArrowUp":
                e.preventDefault();
                setSelectedOption(
                    selectedOption - 1 >= 0
                        ? selectedOption - 1
                        : optionsList.length - 1
                );
                break;
            case "ArrowDown":
                e.preventDefault();
                setSelectedOption(
                    selectedOption === optionsList.length - 1
                        ? 0
                        : selectedOption + 1
                );
                break;
            default:
                break;
        }
    };

    useLayoutEffect(() => {
        if (isOptionsOpen) {
            const activeItem =
                optionsRef.current.querySelectorAll("li")[selectedOption];
            activeItem.focus();
        }
    }, [isOptionsOpen, selectedOption]);

    const Trigger = (props) =>
        React.cloneElement(trigger, {
            type: "button",
            "aria-haspopup": "listbox",
            "aria-expanded": isOptionsOpen,
            className: isOptionsOpen ? "expanded" : "",
            ...props,
            onClick: toggleOptions,
            isOptionsOpen,
        });

    return (
        <>
            <Trigger />
            <ul
                data-cy={dataCy}
                ref={optionsRef}
                className={`options ${isOptionsOpen ? "show" : ""}`}
                role="listbox"
                aria-activedescendant={optionsList[selectedOption][valueKey]}
                tabIndex={-1}
                onKeyDown={handleListKeyDown}
            >
                {optionsList.map((option, index) => (
                    <li
                        data-cy={childrenDataCy}
                        key={option[valueKey]}
                        id={option[valueKey]}
                        role="option"
                        aria-selected={selectedOption === index}
                        tabIndex={0}
                        onKeyDown={handleKeyDown(index)}
                        onClick={() => {
                            setSelectedThenCloseDropdown(index);
                        }}
                    >
                        {labels[index]}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Select;
