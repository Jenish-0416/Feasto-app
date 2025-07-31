import HeardStatic from "../routes/landing-page/components/heardstatic";
import { Outlet } from "react-router";
import React from "react";
import Header from "../routes/landing-page/components/header";

export function Welcome() { 
    return (
        <div>
            <Header />
            <Outlet />


        </div>
    )
}