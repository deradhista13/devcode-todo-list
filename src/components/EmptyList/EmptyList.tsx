import { ActivityEmptyImg } from "@/assets";
import { TodoEmptyImg } from "@/assets";
import { Wrapper } from "@/components/_common/Wrapper";
import { EmptyImage } from "@/components/EmptyList/EmptyList.styles";

const EmptyList = ({ type = "activity" }) => {
    return (
        <Wrapper
            data-cy={
                type === "activity"
                    ? "activity-empty-state"
                    : "todo-empty-state"
            }
        >
            <EmptyImage>
                {type === "activity" ? <ActivityEmptyImg /> : <TodoEmptyImg />}
            </EmptyImage>
        </Wrapper>
    );
};

export default EmptyList;
