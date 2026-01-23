import { NavConfig } from "@/@types/NavItem";
import { CheckSquare, LayoutGrid } from "lucide-react";

export const MAIN_NAV: NavConfig = [
    {
        title: 'Dashboard',
        icon: LayoutGrid,
        path: '/',
        id: 'dashboard',
    },
    {
        icon: CheckSquare,
        title: 'Tasks',
        path: '/tasks',
        id: 'tasks',
        new: {
            tooltip: 'New Task',
            path: '/tasks/new',
        },
    },
]