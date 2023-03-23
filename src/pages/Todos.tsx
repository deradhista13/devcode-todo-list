import MetaTags from "@/components/_common/MetaTags";
import { Wrapper } from "@/components/_common/Wrapper";
import Todo from "@/layouts/Todo/Todo";

const Todos = () => {
    return (
        <Wrapper>
            <MetaTags title="Detail" />
            <Todo />
        </Wrapper>
    );
};

export default Todos;
