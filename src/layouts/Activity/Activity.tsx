import { Loader } from "@/components/_common/LoadingIndicator";
import EmptyList from "@/components/EmptyList/EmptyList";
import ActivityCard from "@/components/ActivityCard/ActivityCard";
import ActivityHeader from "@/components/ActivityHeader/ActivityHeader";
import useActivity from "@/hooks/useActivity";
import { ActivityList } from "@/layouts/Activity/Activity.styles";

const Activity = () => {
    const { loading, activity: cards } = useActivity();

    if (loading) {
        return (
            <>
                <ActivityHeader />
                <Loader variant="primary" />
            </>
        );
    }

    if (!cards.length) {
        return (
            <>
                <ActivityHeader />
                <EmptyList type="activity" />
            </>
        );
    }

    return (
        <>
            <ActivityHeader />
            <ActivityList>
                {cards?.length > 0 &&
                    cards.map((item) => {
                        return <ActivityCard item={item} key={item.id} />;
                    })}
            </ActivityList>
        </>
    );
};

export default Activity;
