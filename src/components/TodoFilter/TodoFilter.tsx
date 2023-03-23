import { useState } from "react";
import { SortIcon } from "@/assets";
import { ChecklistIcon } from "@/assets";
import Select from "@/components/_common/Select/Select";
import {
    TodoFilterWrapper,
    Label,
    Icon,
} from "@/components/TodoFilter/TodoFilter.styles";
import sortOptions from "@/constants/sortOptions";
import useTodoStore from "@/stores/useTodoStore";

const { changeFilter, filterTodo } = useTodoStore.getState();

const TodoFilter = () => {
    const [activeFilter, setActiveFilter] = useState(0);

    const handleFilterChange = (index) => {
        setActiveFilter(index);
        changeFilter(sortOptions[index].value);
        filterTodo();
    };

    return (
        <TodoFilterWrapper>
            <Select
                dataCy="sort-parent"
                childrenDataCy="sort-selection"
                onChange={handleFilterChange}
                activeOption={activeFilter}
                optionsList={sortOptions}
                trigger={
                    <Icon data-cy="todo-sort-button">
                        <SortIcon />
                    </Icon>
                }
                valueKey="value"
                labels={sortOptions.map(({ Icon, label }, id) => {
                    return (
                        <Label>
                            <Icon />
                            <span>{label}</span>
                            {activeFilter === id && (
                                <ChecklistIcon className="check" />
                            )}
                        </Label>
                    );
                })}
            />
        </TodoFilterWrapper>
    );
};

export default TodoFilter;
