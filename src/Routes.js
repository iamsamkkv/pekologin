import React from "react";
import MacBookPro16ThirtySix from "pages/MacBookPro16ThirtySix";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/macbookpro16thirtysix"
          element={<MacBookPro16ThirtySix />}
        />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
