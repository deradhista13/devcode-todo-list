import { SortLatestIcon } from "@/assets";
import { SortOldestIcon } from "@/assets";
import { SortAZIcon } from "@/assets";
import { SortZAIcon } from "@/assets";
import { SortUnfinishedIcon } from "@/assets";

const sortOptions = [
    {
        label: "terbaru",
        Icon: SortLatestIcon,
        value: "latest",
    },
    {
        label: "terlama",
        Icon: SortOldestIcon,
        value: "oldest",
    },
    {
        label: "A-Z",
        Icon: SortAZIcon,
        value: "a-z",
    },
    {
        label: "Z-A",
        Icon: SortZAIcon,
        value: "z-a",
    },
    {
        label: "belum selesai",
        Icon: SortUnfinishedIcon,
        value: "unfinished",
    },
];

export default sortOptions;
