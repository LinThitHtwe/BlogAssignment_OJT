import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "reduxapp/provider";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider>
          <RouterProvider router={router} />
          <Toaster position="top-center" />
        </ReduxProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
