import { Routes, Route, Navigate } from "react-router-dom";
import Header from "@/layouts/Header/Header";
import Dashboard from "@/pages/Dashboard";
import Todos from "@/pages/Todos";
import ModalAlert from "@/components/ModalAlert/ModalAlert";
import ModalSucess from "@/components/ModalSuccess/ModalSuccess";
import ModalTodo from "@/components/ModalTodo/ModalTodo";

const App = () => {
    return (
        <>
            <Header />
            <ModalSucess />
            <ModalAlert />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                    path="/activity/:activityId"
                    element={
                        <>
                            <ModalTodo />
                            <Todos />
                        </>
                    }
                />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </>
    );
};

export default App;
