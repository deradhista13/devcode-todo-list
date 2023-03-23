import AddButton from "@/components/_common/Button";
import { Loader } from "@/components/_common/LoadingIndicator";
import useActivityStore from "@/stores/useActivityStore";
import {
    ActivityHeaderWrapper,
    ActionHeaderTitle,
} from "@/components/ActivityHeader/ActivityHeader.styles";

const { createActivity } = useActivityStore.getState();

const ActivityHeader = () => {
    const creating = useActivityStore((state) => state.activity.creating);

    return (
        <ActivityHeaderWrapper>
            <ActionHeaderTitle data-cy="activity-title">
                Activity
            </ActionHeaderTitle>
            <AddButton
                disabled={creating}
                onClick={createActivity}
                data-cy="activity-add-button"
            >
                {creating ? <Loader size="button" /> : "Tambah"}
            </AddButton>
        </ActivityHeaderWrapper>
    );
};

export default ActivityHeader;
