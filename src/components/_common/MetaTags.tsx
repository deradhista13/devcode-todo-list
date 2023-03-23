import { Helmet } from "react-helmet-async";

interface MetaTagsProps {
    title?: string;
    children?: React.ReactNode;
}

const MetaTags = ({ title, children }: MetaTagsProps) => {
    const appName = import.meta.env.VITE_APP_NAME ?? "Vite + React + TS App";
    const titleTemplate = title !== "" ? `${appName} - ${title}` : `${appName}`;

    return (
        <>
            <Helmet title={titleTemplate}>{children}</Helmet>
        </>
    );
};

export default MetaTags;
