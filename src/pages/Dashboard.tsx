import MetaTags from "@/components/_common/MetaTags";
import { Wrapper } from "@/components/_common/Wrapper";
import Activity from "@/layouts/Activity/Activity";

const Dashboard = () => {
    return (
        <Wrapper>
            <MetaTags title="Dashboard" />
            <Activity />
        </Wrapper>
    );
};

export default Dashboard;
