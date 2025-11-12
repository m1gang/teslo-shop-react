import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"

export const TesloShoApp = () => {
    return (
        <RouterProvider router={appRouter} />
    )
}
