import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import CoinDetails from "../pages/CoinDetails";
import NotFound from "../pages/NotFound";
import Layout from "../assets/components/layout/layout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <Dashboard />
        </Layout>
      }
      />


      <Route path="/reports" element={
        <Layout>
          <Reports />
        </Layout>} />
      <Route path="/settings" element={
        <Layout>
          <Settings />
        </Layout>} />

      <Route path="/coin/:id" element={
        <Layout>
          <CoinDetails />
        </Layout>}/>

        
      <Route path="*" element={
        <Layout>
          <NotFound/>
        </Layout>
      
      } />
    </Routes>
  );
}

export default AppRoutes;

