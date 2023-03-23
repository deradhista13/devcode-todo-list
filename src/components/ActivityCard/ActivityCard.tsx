import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "@/assets";
import { DeleteButton } from "@/components/_common/DeleteButton";
import useAlertStore from "@/stores/useAlertStore";
import { formatDate } from "@/utils/formatDate";
import {
    Card,
    CardTitle,
    CardFooter,
    CardDate,
} from "@/components/ActivityCard/ActivityCard.styles";

const { openAlert } = useAlertStore.getState();

const ActivityCard = ({ item }) => {
    const navigate = useNavigate();
    const deleteButtonRef: any = useRef();

    const navigateToDetails = (e) => {
        if (
            e.target !== deleteButtonRef.current &&
            !deleteButtonRef.current.contains(e.target)
        ) {
            navigate(`/activity/${item.id}`);
        }
    };

    const showDeleteModal = () => {
        openAlert({
            type: "activity",
            title: item.title,
            id: item.id,
        });
    };

    return (
        <Card onClick={navigateToDetails} data-cy="activity-item">
            <CardTitle data-cy="activity-item-title">{item.title}</CardTitle>
            <CardFooter>
                <CardDate data-cy="activity-item-date">
                    {formatDate(item.created_at)}
                </CardDate>
                <DeleteButton
                    onClick={showDeleteModal}
                    data-cy="activity-item-delete-button"
                    ref={deleteButtonRef}
                >
                    <TrashIcon />
                </DeleteButton>
            </CardFooter>
        </Card>
    );
};

export default ActivityCard;
