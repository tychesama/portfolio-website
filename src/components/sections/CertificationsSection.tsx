"use client";

import React from "react";
import CertificationsCard from "../common/CertificationsCard";


const CertificationsSection: React.FC = () => {
  return (
    <div className=" flex flex-wrap gap-2">
      <CertificationsCard
        certifications={{
          cert: "CCNA",
          logo: "/assets/title/title_icon_yui (2).png",
        }}
      />
      <CertificationsCard
        certifications={{
          cert: "Something",
          logo: "/assets/title/title_icon_yui (3).png",
        }}
      />
      <CertificationsCard
        certifications={{
          cert: "Sumth",
          logo: "/assets/title/title_icon_yui (4).png",
        }}
      />
    </div>
  );
};

export default CertificationsSection;
