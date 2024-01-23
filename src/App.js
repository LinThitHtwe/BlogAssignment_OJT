import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { RouterProvider } from "react-router-dom";
import { store } from "./reduxapp/store";
import { router } from "./routes/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
          <Toaster position="top-center" />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
